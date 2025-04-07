"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const keyMapping_1 = require("./keyMapping");
const { t } = block_basekit_server_api_1.field;
const domain = 'cs2skins.wildog.vip';
// 通过addDomainList添加请求接口的域名
block_basekit_server_api_1.basekit.addDomainList([domain]);
block_basekit_server_api_1.basekit.addField({
    // 定义捷径的i18n语言资源
    // i18n: {
    //   messages: {
    //     'zh-CN': {
    //       'lingxing-appid': '人民币金额',
    //       'lingxing-appsecret': '美元金额',
    //       'rate': '汇率',
    //     },
    //     'en-US': {
    //       'rmb': 'RMB Amount',
    //       'usd': 'Dollar amount',
    //       'rate': 'Exchange Rate',
    //     },
    //     'ja-JP': {
    //       'rmb': '人民元の金額',
    //       'usd': 'ドル金額',
    //       'rate': '為替レート',
    //     },
    //   }
    // },
    // 定义捷径的入参
    formItems: [
        // ASIN 来源字段选择
        {
            key: 'asin_field',
            label: 'ASIN来源字段',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Text],
                mode: 'single'
            },
            validator: { required: true },
            tooltips: [{
                    type: 'text',
                    content: '请选择包含ASIN编号的文本字段'
                }]
        },
        // 开始日期字段选择
        {
            key: 'start_date_field',
            label: '开始日期字段',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.DateTime],
                mode: 'single'
            },
            validator: { required: true },
            tooltips: [{
                    type: 'text',
                    content: '请选择开始日期字段'
                }]
        },
        // 结束日期字段选择
        {
            key: 'end_date_field',
            label: '结束日期字段',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.DateTime],
                mode: 'single'
            },
            validator: { required: true },
            tooltips: [{
                    type: 'text',
                    content: '请选择结束日期字段'
                }]
        },
        {
            key: 'mid_field',
            label: '站点id字段',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Number],
                mode: 'single'
            },
            validator: { required: true },
            tooltips: [{
                    type: 'text',
                    content: '请选择站点id字段'
                }]
        }
    ],
    // 定义捷径的返回结果类型
    resultType: {
        type: block_basekit_server_api_1.FieldType.Object,
        extra: {
            icon: {
                light: 'https://example.com/object-icon.svg',
            },
            properties: [
                {
                    key: 'id',
                    isGroupByKey: true,
                    type: block_basekit_server_api_1.FieldType.Text,
                    title: 'id',
                    hidden: true,
                },
                { key: 'parent_asins_first_amazon_url', type: block_basekit_server_api_1.FieldType.Text, title: '父ASIN亚马逊前台地址' },
                { key: 'parent_asins_first_parent_asin', type: block_basekit_server_api_1.FieldType.Text, title: '父ASIN' },
                { key: 'parent_asins_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: '父ASIN对应店铺ID' },
                { key: 'parent_asins_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整父ASIN列表' },
                { key: 'asins_first_amazon_url', type: block_basekit_server_api_1.FieldType.Text, title: 'ASIN亚马逊前台地址' },
                { key: 'asins_first_asin', type: block_basekit_server_api_1.FieldType.Text, title: 'ASIN名称', primary: true },
                { key: 'asins_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: 'ASIN对应店铺ID' },
                { key: 'asins_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整ASIN列表' },
                { key: 'price_list_first_country', type: block_basekit_server_api_1.FieldType.Text, title: '国家' },
                { key: 'price_list_first_is_eur', type: block_basekit_server_api_1.FieldType.Text, title: '是否欧洲共享库存' },
                { key: 'price_list_first_local_sku', type: block_basekit_server_api_1.FieldType.Text, title: '本地SKU' },
                { key: 'price_list_first_mid', type: block_basekit_server_api_1.FieldType.Text, title: '站点ID' },
                { key: 'price_list_first_local_name', type: block_basekit_server_api_1.FieldType.Text, title: '品名' },
                { key: 'price_list_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: '店铺ID' },
                { key: 'price_list_first_is_delete', type: block_basekit_server_api_1.FieldType.Text, title: '是否删除' },
                { key: 'price_list_first_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'MSKU销量' },
                { key: 'price_list_first_product_pic_url', type: block_basekit_server_api_1.FieldType.Text, title: '本地上传图片地址' },
                { key: 'price_list_first_small_image_url', type: block_basekit_server_api_1.FieldType.Text, title: 'MSKU缩略图地址' },
                { key: 'price_list_first_seller_name', type: block_basekit_server_api_1.FieldType.Text, title: '店铺名称' },
                { key: 'price_list_first_price', type: block_basekit_server_api_1.FieldType.Text, title: '历史快照价格' },
                { key: 'price_list_first_seller_sku', type: block_basekit_server_api_1.FieldType.Text, title: 'MSKU' },
                { key: 'price_list_first_source_rate', type: block_basekit_server_api_1.FieldType.Text, title: '原币种汇率', extra: { formatter: block_basekit_server_api_1.NumberFormatter.DIGITAL_ROUNDED_2 } },
                { key: 'price_list_first_status', type: block_basekit_server_api_1.FieldType.Text, title: '商品状态' },
                { key: 'price_list_first_cid', type: block_basekit_server_api_1.FieldType.Text, title: '分类ID' },
                { key: 'price_list_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整价格列表' },
                { key: 'small_cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: '小类排名' },
                { key: 'item_name', type: block_basekit_server_api_1.FieldType.Text, title: '商品标题' },
                { key: 'sku', type: block_basekit_server_api_1.FieldType.Text, title: 'SKU' },
                { key: 'local_name', type: block_basekit_server_api_1.FieldType.Text, title: '品名' },
                { key: 'cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: '大类排名', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'rank_category', type: block_basekit_server_api_1.FieldType.Text, title: '大类名称' },
                { key: 'prev_cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: '上一次大类排名', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'currency_icon', type: block_basekit_server_api_1.FieldType.Text, title: '币种符号' },
                { key: 'cg_price_currency_icon', type: block_basekit_server_api_1.FieldType.Text, title: '采购成本币种符号' },
                { key: 'ranking_update_time', type: block_basekit_server_api_1.FieldType.Text, title: '排名更新时间' },
                { key: 'seller_store_countries_first_country', type: block_basekit_server_api_1.FieldType.Text, title: '国家' },
                { key: 'seller_store_countries_first_seller_name', type: block_basekit_server_api_1.FieldType.Text, title: '店铺名称' },
                { key: 'seller_store_countries_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整店铺国家列表' },
                { key: 'categories', type: block_basekit_server_api_1.FieldType.Text, title: '分类' },
                { key: 'brands', type: block_basekit_server_api_1.FieldType.Text, title: '品牌' },
                { key: 'principal_names', type: block_basekit_server_api_1.FieldType.Text, title: '负责人' },
                { key: 'developer_names', type: block_basekit_server_api_1.FieldType.Text, title: '开发人' },
                { key: 'attributes', type: block_basekit_server_api_1.FieldType.Text, title: '商品属性' },
                { key: 'month_stock_sales_ratio', type: block_basekit_server_api_1.FieldType.Text, title: '月库销比' },
                { key: 'volume', type: block_basekit_server_api_1.FieldType.Text, title: '销量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'b2b_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'B2B销量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'order_items', type: block_basekit_server_api_1.FieldType.Text, title: '订单量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'b2b_order_items', type: block_basekit_server_api_1.FieldType.Text, title: 'B2B订单量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'amount', type: block_basekit_server_api_1.FieldType.Text, title: '销售额' },
                { key: 'b2b_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'B2B销售额' },
                { key: 'volume_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: '销量环比' },
                { key: 'amount_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: '销售额环比' },
                { key: 'order_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: '订单量环比' },
                { key: 'gross_profit', type: block_basekit_server_api_1.FieldType.Text, title: '结算毛利润' },
                { key: 'predict_gross_profit', type: block_basekit_server_api_1.FieldType.Text, title: '订单毛利润' },
                { key: 'gross_margin', type: block_basekit_server_api_1.FieldType.Text, title: '结算毛利率' },
                { key: 'predict_gross_margin', type: block_basekit_server_api_1.FieldType.Text, title: '订单毛利率' },
                { key: 'roi', type: block_basekit_server_api_1.FieldType.Text, title: '投资回报率' },
                { key: 'promotion_volume', type: block_basekit_server_api_1.FieldType.Text, title: '促销销量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'promotion_amount', type: block_basekit_server_api_1.FieldType.Text, title: '促销销售额' },
                { key: 'promotion_order_items', type: block_basekit_server_api_1.FieldType.Text, title: '促销订单量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'promotion_discount', type: block_basekit_server_api_1.FieldType.Text, title: '促销折扣' },
                { key: 'reviews_count', type: block_basekit_server_api_1.FieldType.Text, title: '评论数', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_count', type: block_basekit_server_api_1.FieldType.Text, title: '退款量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_rate', type: block_basekit_server_api_1.FieldType.Text, title: '退款率' },
                { key: 'afn_fulfillable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA可售库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_receiving_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA入库中', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_shipped_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA在途库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_working_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA计划入库', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_unsellable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA不可售库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_fc_processing', type: block_basekit_server_api_1.FieldType.Text, title: '调仓中库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_fc_transfers', type: block_basekit_server_api_1.FieldType.Text, title: '待调仓库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_customerorders', type: block_basekit_server_api_1.FieldType.Text, title: '待发货库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'fbm_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBM可售库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'stock_up_num', type: block_basekit_server_api_1.FieldType.Text, title: '实际在途库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'clicks', type: block_basekit_server_api_1.FieldType.Text, title: '广告点击量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_days', type: block_basekit_server_api_1.FieldType.Text, title: '可售天数预估', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'fbm_available_days', type: block_basekit_server_api_1.FieldType.Text, title: 'FBM可售天数', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'avg_star', type: block_basekit_server_api_1.FieldType.Text, title: '平均评分' },
                { key: 'prev_star', type: block_basekit_server_api_1.FieldType.Text, title: '前次评分' },
                { key: 'comment_rate', type: block_basekit_server_api_1.FieldType.Text, title: '留评率' },
                { key: 'sessions', type: block_basekit_server_api_1.FieldType.Text, title: '浏览器会话量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sessions_mobile', type: block_basekit_server_api_1.FieldType.Text, title: '移动端会话量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sessions_total', type: block_basekit_server_api_1.FieldType.Text, title: '总会话量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'buy_box_percentage', type: block_basekit_server_api_1.FieldType.Text, title: 'Buy Box占有率' },
                { key: 'page_views', type: block_basekit_server_api_1.FieldType.Text, title: '浏览器页面浏览量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'page_views_mobile', type: block_basekit_server_api_1.FieldType.Text, title: '移动端页面浏览量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'page_views_total', type: block_basekit_server_api_1.FieldType.Text, title: '总页面浏览量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'ad_direct_order_quantity', type: block_basekit_server_api_1.FieldType.Text, title: '广告直接订单量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'ad_direct_sales_amount', type: block_basekit_server_api_1.FieldType.Text, title: '广告直接销售额' },
                { key: 'adv_rate', type: block_basekit_server_api_1.FieldType.Text, title: '广告订单占比' },
                { key: 'volume_cvr', type: block_basekit_server_api_1.FieldType.Text, title: '销量转化率' },
                { key: 'cvr', type: block_basekit_server_api_1.FieldType.Text, title: '总转化率' },
                { key: 'ctr', type: block_basekit_server_api_1.FieldType.Text, title: '点击率' },
                { key: 'acoas', type: block_basekit_server_api_1.FieldType.Text, title: '广告成本占销比' },
                { key: 'acos', type: block_basekit_server_api_1.FieldType.Text, title: '广告投入产出比' },
                { key: 'has_oprator_log', type: block_basekit_server_api_1.FieldType.Text, title: '存在操作日志' },
                { key: 'return_goods_count', type: block_basekit_server_api_1.FieldType.Text, title: '退货量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_goods_rate', type: block_basekit_server_api_1.FieldType.Text, title: '退货率' },
                { key: 'cpc', type: block_basekit_server_api_1.FieldType.Text, title: '单次点击成本' },
                { key: 'spend', type: block_basekit_server_api_1.FieldType.Text, title: '广告总花费' },
                { key: 'roas', type: block_basekit_server_api_1.FieldType.Text, title: '广告支出回报率' },
                { key: 'asoas', type: block_basekit_server_api_1.FieldType.Text, title: '广告销售额占比' },
                { key: 'cpo', type: block_basekit_server_api_1.FieldType.Text, title: '单订单广告成本' },
                { key: 'cpm', type: block_basekit_server_api_1.FieldType.Text, title: '千次展示成本' },
                { key: 'ad_sales_amount', type: block_basekit_server_api_1.FieldType.Text, title: '广告销售额' },
                { key: 'ad_cvr', type: block_basekit_server_api_1.FieldType.Text, title: '广告转化率' },
                { key: 'ad_order_quantity', type: block_basekit_server_api_1.FieldType.Text, title: '广告订单量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'shared_cost_of_advertising', type: block_basekit_server_api_1.FieldType.Text, title: '广告差异分摊' },
                { key: 'shared_ads_sb_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'SB广告分摊' },
                { key: 'shared_ads_sbv_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'SBV广告分摊' },
                { key: 'ads_sd_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'SD广告花费' },
                { key: 'ads_sp_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'SP广告花费' },
                { key: 'impressions', type: block_basekit_server_api_1.FieldType.Text, title: '广告展示量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sids', type: block_basekit_server_api_1.FieldType.Text, title: '店铺ID列表' },
                { key: 'net_amount', type: block_basekit_server_api_1.FieldType.Text, title: '净销售额' },
                { key: 'small_image_url', type: block_basekit_server_api_1.FieldType.Text, title: '商品缩略图地址' },
                { key: 'available_inventory_afn_fulfillable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA可售库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_stock_up_num', type: block_basekit_server_api_1.FieldType.Text, title: '实际在途库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_customerorders', type: block_basekit_server_api_1.FieldType.Text, title: '待发货库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_fc_transfers', type: block_basekit_server_api_1.FieldType.Text, title: '待调仓库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_afn_inbound_receiving_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBA入库中', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_available_inventory', type: block_basekit_server_api_1.FieldType.Text, title: '总可用库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_fc_processing', type: block_basekit_server_api_1.FieldType.Text, title: '调仓中库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_fbm_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'FBM可售库存', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'avg_custom_price', type: block_basekit_server_api_1.FieldType.Text, title: '销售均价' },
                { key: 'avg_volume', type: block_basekit_server_api_1.FieldType.Text, title: '平均销量' },
                { key: 'icon_num', type: block_basekit_server_api_1.FieldType.Text, title: '运营日志数量', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'spu_spu_names_first_spu_name', type: block_basekit_server_api_1.FieldType.Text, title: 'SPU名称' },
                { key: 'spu_spu_names_first_spu', type: block_basekit_server_api_1.FieldType.Text, title: 'SPU' },
                { key: 'spu_spu_names_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整SPU列表' },
                { key: 'product_create_time', type: block_basekit_server_api_1.FieldType.Text, title: '商品创建时间' },
                { key: 'cg_price', type: block_basekit_server_api_1.FieldType.Text, title: '采购成本' },
                { key: 'whs_value', type: block_basekit_server_api_1.FieldType.Text, title: '可用货值' },
                { key: 'local_quantity', type: block_basekit_server_api_1.FieldType.Text, title: '本地可用库存' },
                { key: 'oversea_quantity', type: block_basekit_server_api_1.FieldType.Text, title: '海外仓可用库存' },
                { key: 'inventory_sales_ratio', type: block_basekit_server_api_1.FieldType.Text, title: '存销比' },
                { key: 'avg_landed_price', type: block_basekit_server_api_1.FieldType.Text, title: '平均到岸价' },
                { key: 'suppliers', type: block_basekit_server_api_1.FieldType.Text, title: '供应商列表' },
                { key: 'model', type: block_basekit_server_api_1.FieldType.Text, title: '型号列表' },
                { key: 'return_amount', type: block_basekit_server_api_1.FieldType.Text, title: '退款金额', extra: { formatter: block_basekit_server_api_1.NumberFormatter.DIGITAL_ROUNDED_2 } },
                { key: 'tag_set_first_global_tag_id', type: block_basekit_server_api_1.FieldType.Text, title: '全局标签ID' },
                { key: 'tag_set_first_tag_name', type: block_basekit_server_api_1.FieldType.Text, title: '标签名称' },
                { key: 'tag_set_first_color', type: block_basekit_server_api_1.FieldType.Text, title: '标签颜色' },
                { key: 'tag_set_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整标签列表' },
            ]
        }
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
    execute: async (formItemParams, context) => {
        const { asin_field, start_date_field, end_date_field } = formItemParams;
        const asin = asin_field[0]['text'];
        const mid = formItemParams.mid_field;
        const start_date = new Date(start_date_field).toISOString().split('T')[0];
        const end_date = new Date(end_date_field).toISOString().split('T')[0];
        const body = {
            "data": {
                "offset": 0,
                "length": 20,
                "sort_field": "volume",
                "sort_type": "desc",
                "search_field": "asin",
                "search_value": [asin],
                "mid": mid,
                "start_date": start_date,
                "end_date": end_date,
                "summary_field": "asin"
            },
            "path": "/bd/productPerformance/openApi/asinList"
        };
        console.log('====body', body);
        const { account = 0 } = formItemParams;
        /** 为方便查看日志，使用此方法替代console.log */
        function debugLog(arg) {
            console.log(JSON.stringify({
                formItemParams,
                context,
                arg
            }));
        }
        try {
            const res = await context.fetch('https://' + domain + '/api/proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }).then(res => res.json());
            console.log('====res', res);
            if (!res || !res.data || !Array.isArray(res.data.list)) {
                console.log('API 返回数据无效:', res);
                throw new Error('API 返回数据无效或格式不正确');
            }
            // 递归提取最末端的键值对
            function extractLeafData(obj) {
                let result = {};
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
                    if (value && typeof value === 'object' && !Array.isArray(value)) {
                        // 如果是对象，递归提取
                        Object.assign(result, extractLeafData(value));
                    }
                    else if (Array.isArray(value)) {
                        // 如果是数组，仅处理第一个元素
                        if (value.length > 0) {
                            const firstElement = value[0];
                            if (typeof firstElement === 'object') {
                                Object.assign(result, extractLeafData(firstElement));
                            }
                            else {
                                result[key] = String(value);
                            }
                        }
                        else {
                            result[key] = String(value);
                        }
                    }
                    else {
                        // 如果是基本类型，直接添加到结果中
                        result[key] = String(value);
                    }
                });
                return result;
            }
            // 检查是否有值为 null 的字段，如果有则将其转换为字符串 'null'
            function convertNullToString(obj) {
                if (obj === null) {
                    return 'null';
                }
                else if (Array.isArray(obj)) {
                    return obj.map(item => convertNullToString(item));
                }
                else if (typeof obj === 'object') {
                    const newObj = {};
                    Object.keys(obj).forEach(key => {
                        newObj[key] = convertNullToString(obj[key]);
                    });
                    return newObj;
                }
                return obj;
            }
            // 遍历 res.data.list 并转换 null 值
            res.data.list = res.data.list.map((item) => {
                return convertNullToString(item);
            });
            // 遍历 res.data.list 并映射数据
            const mappedData = res.data.list.map((item) => {
                const flatData = extractLeafData(item); // 提取所有最末端数据
                const mappedItem = {};
                Object.keys(keyMapping_1.keyMapping).forEach(key => {
                    if (flatData[keyMapping_1.keyMapping[key]] !== undefined) {
                        mappedItem[key] = flatData[keyMapping_1.keyMapping[key]];
                    }
                });
                return mappedItem;
            });
            mappedData[0].id = asin; // 添加 id 字段
            return {
                code: block_basekit_server_api_1.FieldCode.Success,
                data: mappedData[0]
            };
        }
        catch (e) {
            console.log('====error', String(e));
            debugLog(e);
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBK0o7QUFDL0osNkNBQTBDO0FBQzFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLE1BQU0sTUFBTSxHQUFHLHFCQUFxQixDQUFDO0FBQ3JDLDJCQUEyQjtBQUMzQixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHaEMsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxNQUFNO0lBQ04sS0FBSztJQUNMLFVBQVU7SUFDVixTQUFTLEVBQUU7UUFDVCxjQUFjO1FBQ2Q7WUFDRSxHQUFHLEVBQUUsWUFBWTtZQUNqQixLQUFLLEVBQUUsVUFBVTtZQUNqQixTQUFTLEVBQUUseUNBQWMsQ0FBQyxXQUFXO1lBQ3JDLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsQ0FBQyxvQ0FBUyxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNELFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDN0IsUUFBUSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLE1BQU07b0JBQ1osT0FBTyxFQUFFLGtCQUFrQjtpQkFDNUIsQ0FBQztTQUNIO1FBQ0QsV0FBVztRQUNYO1lBQ0UsR0FBRyxFQUFFLGtCQUFrQjtZ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