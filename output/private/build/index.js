"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const keyMapping_1 = require("./keyMapping");
const { t } = block_basekit_server_api_1.field;
const domain = '42kuajing.com';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBK0o7QUFDL0osNkNBQTBDO0FBQzFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQztBQUMvQiwyQkFBMkI7QUFDM0Isa0NBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBR2hDLGtDQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsU0FBUztJQUNULGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsTUFBTTtJQUNOLEtBQUs7SUFDTCxVQUFVO0lBQ1YsU0FBUyxFQUFFO1FBQ1QsY0FBYztRQUNkO1lBQ0UsR0FBRyxFQUFFLFlBQVk7WUFDakIsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLHlDQUFjLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLENBQUMsb0NBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQzdCLFFBQVEsRUFBRSxDQUFDO29CQUNULElBQUksRUFBRSxNQUFNO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7aUJBQzVCLENBQUM7U0FDSDtRQUNELFdBQVc7UUFDWDtZQUNFLEdBQUcsRUFBRSxrQkFBa0I7WUFD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