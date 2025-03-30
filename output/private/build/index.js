"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const key_mapping = fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../src/key_mapping.json'), 'utf-8');
const keyMapping = JSON.parse(key_mapping);
const { t } = block_basekit_server_api_1.field;
const host = process.env.HOST || 'https://api.exchangerate-api.com/v4/latest/USD';
// 通过addDomainList添加请求接口的域名
block_basekit_server_api_1.basekit.addDomainList([host]);
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
                { key: 'parent_asins_first_amazon_url', type: block_basekit_server_api_1.FieldType.Text, title: 'Amazon Url' },
                { key: 'parent_asins_first_parent_asin', type: block_basekit_server_api_1.FieldType.Text, title: 'Parent Asin' },
                { key: 'parent_asins_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: 'Sid' },
                { key: 'parent_asins_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Parent Asins' },
                { key: 'asins_first_amazon_url', type: block_basekit_server_api_1.FieldType.Text, title: 'Amazon Url' },
                { key: 'asins_first_asin', type: block_basekit_server_api_1.FieldType.Text, title: 'Asin', primary: true },
                { key: 'asins_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: 'Sid' },
                { key: 'asins_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Asins' },
                { key: 'price_list_first_country', type: block_basekit_server_api_1.FieldType.Text, title: 'Country' },
                { key: 'price_list_first_is_eur', type: block_basekit_server_api_1.FieldType.Text, title: 'Is Eur' },
                { key: 'price_list_first_local_sku', type: block_basekit_server_api_1.FieldType.Text, title: 'Local Sku' },
                { key: 'price_list_first_mid', type: block_basekit_server_api_1.FieldType.Text, title: 'Mid' },
                { key: 'price_list_first_local_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Local Name' },
                { key: 'price_list_first_sid', type: block_basekit_server_api_1.FieldType.Text, title: 'Sid' },
                { key: 'price_list_first_is_delete', type: block_basekit_server_api_1.FieldType.Text, title: 'Is Delete' },
                { key: 'price_list_first_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'Volume' },
                { key: 'price_list_first_product_pic_url', type: block_basekit_server_api_1.FieldType.Text, title: 'Product Pic Url' },
                { key: 'price_list_first_small_image_url', type: block_basekit_server_api_1.FieldType.Text, title: 'Small Image Url' },
                { key: 'price_list_first_seller_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Seller Name' },
                { key: 'price_list_first_price', type: block_basekit_server_api_1.FieldType.Text, title: 'Price' },
                { key: 'price_list_first_seller_sku', type: block_basekit_server_api_1.FieldType.Text, title: 'Seller Sku' },
                { key: 'price_list_first_source_rate', type: block_basekit_server_api_1.FieldType.Text, title: 'Source Rate', extra: { formatter: block_basekit_server_api_1.NumberFormatter.DIGITAL_ROUNDED_2 } },
                { key: 'price_list_first_status', type: block_basekit_server_api_1.FieldType.Text, title: 'Status' },
                { key: 'price_list_first_cid', type: block_basekit_server_api_1.FieldType.Text, title: 'Cid' },
                { key: 'price_list_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Price List' },
                { key: 'small_cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: 'Small Cate Rank' },
                { key: 'item_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Item Name' },
                { key: 'sku', type: block_basekit_server_api_1.FieldType.Text, title: 'Sku' },
                { key: 'local_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Local Name' },
                { key: 'cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: 'Cate Rank', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'rank_category', type: block_basekit_server_api_1.FieldType.Text, title: 'Rank Category' },
                { key: 'prev_cate_rank', type: block_basekit_server_api_1.FieldType.Text, title: 'Prev Cate Rank', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'currency_icon', type: block_basekit_server_api_1.FieldType.Text, title: 'Currency Icon' },
                { key: 'cg_price_currency_icon', type: block_basekit_server_api_1.FieldType.Text, title: 'Cg Price Currency Icon' },
                { key: 'ranking_update_time', type: block_basekit_server_api_1.FieldType.Text, title: 'Ranking Update Time' },
                { key: 'seller_store_countries_first_country', type: block_basekit_server_api_1.FieldType.Text, title: 'Country' },
                { key: 'seller_store_countries_first_seller_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Seller Name' },
                { key: 'seller_store_countries_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Seller Store Countries' },
                { key: 'categories', type: block_basekit_server_api_1.FieldType.Text, title: 'Categories' },
                { key: 'brands', type: block_basekit_server_api_1.FieldType.Text, title: 'Brands' },
                { key: 'principal_names', type: block_basekit_server_api_1.FieldType.Text, title: 'Principal Names' },
                { key: 'developer_names', type: block_basekit_server_api_1.FieldType.Text, title: 'Developer Names' },
                { key: 'attributes', type: block_basekit_server_api_1.FieldType.Text, title: 'Attributes' },
                { key: 'month_stock_sales_ratio', type: block_basekit_server_api_1.FieldType.Text, title: 'Month Stock Sales Ratio' },
                { key: 'volume', type: block_basekit_server_api_1.FieldType.Text, title: 'Volume', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'b2b_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'B2b Volume', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'order_items', type: block_basekit_server_api_1.FieldType.Text, title: 'Order Items', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'b2b_order_items', type: block_basekit_server_api_1.FieldType.Text, title: 'B2b Order Items', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Amount' },
                { key: 'b2b_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'B2b Amount' },
                { key: 'volume_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: 'Volume Chain Ratio' },
                { key: 'amount_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: 'Amount Chain Ratio' },
                { key: 'order_chain_ratio', type: block_basekit_server_api_1.FieldType.Text, title: 'Order Chain Ratio' },
                { key: 'gross_profit', type: block_basekit_server_api_1.FieldType.Text, title: 'Gross Profit' },
                { key: 'predict_gross_profit', type: block_basekit_server_api_1.FieldType.Text, title: 'Predict Gross Profit' },
                { key: 'gross_margin', type: block_basekit_server_api_1.FieldType.Text, title: 'Gross Margin' },
                { key: 'predict_gross_margin', type: block_basekit_server_api_1.FieldType.Text, title: 'Predict Gross Margin' },
                { key: 'roi', type: block_basekit_server_api_1.FieldType.Text, title: 'Roi' },
                { key: 'promotion_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'Promotion Volume', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'promotion_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Promotion Amount' },
                { key: 'promotion_order_items', type: block_basekit_server_api_1.FieldType.Text, title: 'Promotion Order Items', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'promotion_discount', type: block_basekit_server_api_1.FieldType.Text, title: 'Promotion Discount' },
                { key: 'reviews_count', type: block_basekit_server_api_1.FieldType.Text, title: 'Reviews Count', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_count', type: block_basekit_server_api_1.FieldType.Text, title: 'Return Count', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_rate', type: block_basekit_server_api_1.FieldType.Text, title: 'Return Rate' },
                { key: 'afn_fulfillable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Fulfillable Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_receiving_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Inbound Receiving Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_shipped_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Inbound Shipped Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_inbound_working_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Inbound Working Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'afn_unsellable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Unsellable Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_fc_processing', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Fc Processing', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_fc_transfers', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Fc Transfers', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'reserved_customerorders', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Customerorders', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'fbm_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Fbm Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'stock_up_num', type: block_basekit_server_api_1.FieldType.Text, title: 'Stock Up Num', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'clicks', type: block_basekit_server_api_1.FieldType.Text, title: 'Clicks', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_days', type: block_basekit_server_api_1.FieldType.Text, title: 'Available Days', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'fbm_available_days', type: block_basekit_server_api_1.FieldType.Text, title: 'Fbm Available Days', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'avg_star', type: block_basekit_server_api_1.FieldType.Text, title: 'Avg Star' },
                { key: 'prev_star', type: block_basekit_server_api_1.FieldType.Text, title: 'Prev Star' },
                { key: 'comment_rate', type: block_basekit_server_api_1.FieldType.Text, title: 'Comment Rate' },
                { key: 'sessions', type: block_basekit_server_api_1.FieldType.Text, title: 'Sessions', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sessions_mobile', type: block_basekit_server_api_1.FieldType.Text, title: 'Sessions Mobile', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sessions_total', type: block_basekit_server_api_1.FieldType.Text, title: 'Sessions Total', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'buy_box_percentage', type: block_basekit_server_api_1.FieldType.Text, title: 'Buy Box Percentage' },
                { key: 'page_views', type: block_basekit_server_api_1.FieldType.Text, title: 'Page Views', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'page_views_mobile', type: block_basekit_server_api_1.FieldType.Text, title: 'Page Views Mobile', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'page_views_total', type: block_basekit_server_api_1.FieldType.Text, title: 'Page Views Total', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'ad_direct_order_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Ad Direct Order Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'ad_direct_sales_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Ad Direct Sales Amount' },
                { key: 'adv_rate', type: block_basekit_server_api_1.FieldType.Text, title: 'Adv Rate' },
                { key: 'volume_cvr', type: block_basekit_server_api_1.FieldType.Text, title: 'Volume Cvr' },
                { key: 'cvr', type: block_basekit_server_api_1.FieldType.Text, title: 'Cvr' },
                { key: 'ctr', type: block_basekit_server_api_1.FieldType.Text, title: 'Ctr' },
                { key: 'acoas', type: block_basekit_server_api_1.FieldType.Text, title: 'Acoas' },
                { key: 'acos', type: block_basekit_server_api_1.FieldType.Text, title: 'Acos' },
                { key: 'has_oprator_log', type: block_basekit_server_api_1.FieldType.Text, title: 'Has Oprator Log' },
                { key: 'return_goods_count', type: block_basekit_server_api_1.FieldType.Text, title: 'Return Goods Count', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'return_goods_rate', type: block_basekit_server_api_1.FieldType.Text, title: 'Return Goods Rate' },
                { key: 'cpc', type: block_basekit_server_api_1.FieldType.Text, title: 'Cpc' },
                { key: 'spend', type: block_basekit_server_api_1.FieldType.Text, title: 'Spend' },
                { key: 'roas', type: block_basekit_server_api_1.FieldType.Text, title: 'Roas' },
                { key: 'asoas', type: block_basekit_server_api_1.FieldType.Text, title: 'Asoas' },
                { key: 'cpo', type: block_basekit_server_api_1.FieldType.Text, title: 'Cpo' },
                { key: 'cpm', type: block_basekit_server_api_1.FieldType.Text, title: 'Cpm' },
                { key: 'ad_sales_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Ad Sales Amount' },
                { key: 'ad_cvr', type: block_basekit_server_api_1.FieldType.Text, title: 'Ad Cvr' },
                { key: 'ad_order_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Ad Order Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'shared_cost_of_advertising', type: block_basekit_server_api_1.FieldType.Text, title: 'Shared Cost Of Advertising' },
                { key: 'shared_ads_sb_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'Shared Ads Sb Cost' },
                { key: 'shared_ads_sbv_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'Shared Ads Sbv Cost' },
                { key: 'ads_sd_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'Ads Sd Cost' },
                { key: 'ads_sp_cost', type: block_basekit_server_api_1.FieldType.Text, title: 'Ads Sp Cost' },
                { key: 'impressions', type: block_basekit_server_api_1.FieldType.Text, title: 'Impressions', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'sids', type: block_basekit_server_api_1.FieldType.Text, title: 'Sids' },
                { key: 'net_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Net Amount' },
                { key: 'small_image_url', type: block_basekit_server_api_1.FieldType.Text, title: 'Small Image Url' },
                { key: 'available_inventory_afn_fulfillable_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Fulfillable Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_stock_up_num', type: block_basekit_server_api_1.FieldType.Text, title: 'Stock Up Num', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_customerorders', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Customerorders', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_fc_transfers', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Fc Transfers', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_afn_inbound_receiving_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Afn Inbound Receiving Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_available_inventory', type: block_basekit_server_api_1.FieldType.Text, title: 'Available Inventory', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_reserved_fc_processing', type: block_basekit_server_api_1.FieldType.Text, title: 'Reserved Fc Processing', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'available_inventory_fbm_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Fbm Quantity', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'avg_custom_price', type: block_basekit_server_api_1.FieldType.Text, title: 'Avg Custom Price' },
                { key: 'avg_volume', type: block_basekit_server_api_1.FieldType.Text, title: 'Avg Volume' },
                { key: 'icon_num', type: block_basekit_server_api_1.FieldType.Text, title: 'Icon Num', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'spu_spu_names_first_spu_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Spu Name' },
                { key: 'spu_spu_names_first_spu', type: block_basekit_server_api_1.FieldType.Text, title: 'Spu' },
                { key: 'spu_spu_names_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Spu Spu Names' },
                { key: 'product_create_time', type: block_basekit_server_api_1.FieldType.Text, title: 'Product Create Time' },
                { key: 'cg_price', type: block_basekit_server_api_1.FieldType.Text, title: 'Cg Price' },
                { key: 'whs_value', type: block_basekit_server_api_1.FieldType.Text, title: 'Whs Value' },
                { key: 'local_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Local Quantity' },
                { key: 'oversea_quantity', type: block_basekit_server_api_1.FieldType.Text, title: 'Oversea Quantity' },
                { key: 'inventory_sales_ratio', type: block_basekit_server_api_1.FieldType.Text, title: 'Inventory Sales Ratio' },
                { key: 'avg_landed_price', type: block_basekit_server_api_1.FieldType.Text, title: 'Avg Landed Price' },
                { key: 'suppliers', type: block_basekit_server_api_1.FieldType.Text, title: 'Suppliers' },
                { key: 'model', type: block_basekit_server_api_1.FieldType.Text, title: 'Model' },
                { key: 'return_amount', type: block_basekit_server_api_1.FieldType.Text, title: 'Return Amount', extra: { formatter: block_basekit_server_api_1.NumberFormatter.DIGITAL_ROUNDED_2 } },
                { key: 'tag_set_first_global_tag_id', type: block_basekit_server_api_1.FieldType.Text, title: 'Global Tag Id' },
                { key: 'tag_set_first_tag_name', type: block_basekit_server_api_1.FieldType.Text, title: 'Tag Name' },
                { key: 'tag_set_first_color', type: block_basekit_server_api_1.FieldType.Text, title: 'Color' },
                { key: 'tag_set_full', type: block_basekit_server_api_1.FieldType.Text, title: '完整Tag Set' },
                { key: 'currency_code', type: block_basekit_server_api_1.FieldType.Text, title: 'Currency Code' },
                { key: 'volume_chain', type: block_basekit_server_api_1.FieldType.Text, title: 'Volume Chain', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'amount_chain', type: block_basekit_server_api_1.FieldType.Text, title: 'Amount Chain' },
                { key: 'order_items_chain', type: block_basekit_server_api_1.FieldType.Text, title: 'Order Items Chain', extra: { formatter: block_basekit_server_api_1.NumberFormatter.INTEGER } },
                { key: 'pids', type: block_basekit_server_api_1.FieldType.Text, title: 'Pids' }
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
            const res = await context.fetch('https://' + host + '/api/proxy', {
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
                Object.keys(keyMapping).forEach(key => {
                    if (flatData[key] !== undefined) {
                        mappedItem[keyMapping[key]] = flatData[key];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBK0o7QUFDL0osb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixNQUFNLFdBQVcsR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEcsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMzQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsZ0NBQUssQ0FBQztBQUVwQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxnREFBZ0QsQ0FBQztBQUNsRiwyQkFBMkI7QUFDM0Isa0NBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRzlCLGtDQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsU0FBUztJQUNULGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsTUFBTTtJQUNOLEtBQUs7SUFDTCxVQUFVO0lBQ1YsU0FBUyxFQUFFO1FBQ1QsY0FBYztRQUNkO1lBQ0UsR0FBRyxFQUFFLFlBQVk7WUFDakIsS0FBSyxFQUFFLFVBQVU7WUFDakIsU0FBUyxFQUFFLHlDQUFjLENBQUMs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