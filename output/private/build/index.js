"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '.env')
});
const key_mapping = fs_1.default.readFileSync(path_1.default.join(__dirname, 'key_mapping.json'), 'utf-8');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRkFBK0o7QUFDL0osb0RBQTRCO0FBQzVCLDRDQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUM7SUFDWixJQUFJLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO0NBQ25DLENBQUMsQ0FBQztBQUNILE1BQU0sV0FBVyxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxnQ0FBSyxDQUFDO0FBRXBCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGdEQUFnRCxDQUFDO0FBQ2xGLDJCQUEyQjtBQUMzQixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFHOUIsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxNQUFNO0lBQ04sS0FBSztJQUNMLFVBQVU7SUFDVixTQUFTLEVBQUU7UUFDVCxjQUFjO1FBQ2Q7WUFD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