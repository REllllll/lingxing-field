import { basekit, FieldType, field, FieldComponent, FieldCode, NumberFormatter, AuthorizationType, DateFormatter } from '@lark-opdev/block-basekit-server-api';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config({
  path: path.join(__dirname, '.env')
});
const key_mapping = fs.readFileSync(path.join(__dirname, 'key_mapping.json'), 'utf-8');
const keyMapping = JSON.parse(key_mapping);
const { t } = field;

const host = process.env.HOST || 'https://api.exchangerate-api.com/v4/latest/USD';
// 通过addDomainList添加请求接口的域名
basekit.addDomainList([host]);


basekit.addField({
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
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Text],
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
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.DateTime],
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
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.DateTime],
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
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Number],
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
    type: FieldType.Object,
    extra: {
      icon: {
        light: 'https://example.com/object-icon.svg',
      },
      properties: [
        {
          key: 'id',
          isGroupByKey: true,
          type: FieldType.Text,
          title: 'id',
          hidden: true,
        },
        { key: 'parent_asins_first_amazon_url', type: FieldType.Text, title: 'Amazon Url' },
        { key: 'parent_asins_first_parent_asin', type: FieldType.Text, title: 'Parent Asin' },
        { key: 'parent_asins_first_sid', type: FieldType.Text, title: 'Sid' },
        { key: 'parent_asins_full', type: FieldType.Text, title: '完整Parent Asins' },
        { key: 'asins_first_amazon_url', type: FieldType.Text, title: 'Amazon Url' },
        { key: 'asins_first_asin', type: FieldType.Text, title: 'Asin', primary: true },
        { key: 'asins_first_sid', type: FieldType.Text, title: 'Sid' },
        { key: 'asins_full', type: FieldType.Text, title: '完整Asins' },
        { key: 'price_list_first_country', type: FieldType.Text, title: 'Country' },
        { key: 'price_list_first_is_eur', type: FieldType.Text, title: 'Is Eur' },
        { key: 'price_list_first_local_sku', type: FieldType.Text, title: 'Local Sku' },
        { key: 'price_list_first_mid', type: FieldType.Text, title: 'Mid' },
        { key: 'price_list_first_local_name', type: FieldType.Text, title: 'Local Name' },
        { key: 'price_list_first_sid', type: FieldType.Text, title: 'Sid' },
        { key: 'price_list_first_is_delete', type: FieldType.Text, title: 'Is Delete' },
        { key: 'price_list_first_volume', type: FieldType.Text, title: 'Volume' },
        { key: 'price_list_first_product_pic_url', type: FieldType.Text, title: 'Product Pic Url' },
        { key: 'price_list_first_small_image_url', type: FieldType.Text, title: 'Small Image Url' },
        { key: 'price_list_first_seller_name', type: FieldType.Text, title: 'Seller Name' },
        { key: 'price_list_first_price', type: FieldType.Text, title: 'Price' },
        { key: 'price_list_first_seller_sku', type: FieldType.Text, title: 'Seller Sku' },
        { key: 'price_list_first_source_rate', type: FieldType.Text, title: 'Source Rate', extra: { formatter: NumberFormatter.DIGITAL_ROUNDED_2 } },
        { key: 'price_list_first_status', type: FieldType.Text, title: 'Status' },
        { key: 'price_list_first_cid', type: FieldType.Text, title: 'Cid' },
        { key: 'price_list_full', type: FieldType.Text, title: '完整Price List' },
        { key: 'small_cate_rank', type: FieldType.Text, title: 'Small Cate Rank' },
        { key: 'item_name', type: FieldType.Text, title: 'Item Name' },
        { key: 'sku', type: FieldType.Text, title: 'Sku' },
        { key: 'local_name', type: FieldType.Text, title: 'Local Name' },
        { key: 'cate_rank', type: FieldType.Text, title: 'Cate Rank', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'rank_category', type: FieldType.Text, title: 'Rank Category' },
        { key: 'prev_cate_rank', type: FieldType.Text, title: 'Prev Cate Rank', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'currency_icon', type: FieldType.Text, title: 'Currency Icon' },
        { key: 'cg_price_currency_icon', type: FieldType.Text, title: 'Cg Price Currency Icon' },
        { key: 'ranking_update_time', type: FieldType.Text, title: 'Ranking Update Time' },
        { key: 'seller_store_countries_first_country', type: FieldType.Text, title: 'Country' },
        { key: 'seller_store_countries_first_seller_name', type: FieldType.Text, title: 'Seller Name' },
        { key: 'seller_store_countries_full', type: FieldType.Text, title: '完整Seller Store Countries' },
        { key: 'categories', type: FieldType.Text, title: 'Categories' },
        { key: 'brands', type: FieldType.Text, title: 'Brands' },
        { key: 'principal_names', type: FieldType.Text, title: 'Principal Names' },
        { key: 'developer_names', type: FieldType.Text, title: 'Developer Names' },
        { key: 'attributes', type: FieldType.Text, title: 'Attributes' },
        { key: 'month_stock_sales_ratio', type: FieldType.Text, title: 'Month Stock Sales Ratio' },
        { key: 'volume', type: FieldType.Text, title: 'Volume', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'b2b_volume', type: FieldType.Text, title: 'B2b Volume', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'order_items', type: FieldType.Text, title: 'Order Items', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'b2b_order_items', type: FieldType.Text, title: 'B2b Order Items', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'amount', type: FieldType.Text, title: 'Amount' },
        { key: 'b2b_amount', type: FieldType.Text, title: 'B2b Amount' },
        { key: 'volume_chain_ratio', type: FieldType.Text, title: 'Volume Chain Ratio' },
        { key: 'amount_chain_ratio', type: FieldType.Text, title: 'Amount Chain Ratio' },
        { key: 'order_chain_ratio', type: FieldType.Text, title: 'Order Chain Ratio' },
        { key: 'gross_profit', type: FieldType.Text, title: 'Gross Profit' },
        { key: 'predict_gross_profit', type: FieldType.Text, title: 'Predict Gross Profit' },
        { key: 'gross_margin', type: FieldType.Text, title: 'Gross Margin' },
        { key: 'predict_gross_margin', type: FieldType.Text, title: 'Predict Gross Margin' },
        { key: 'roi', type: FieldType.Text, title: 'Roi' },
        { key: 'promotion_volume', type: FieldType.Text, title: 'Promotion Volume', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'promotion_amount', type: FieldType.Text, title: 'Promotion Amount' },
        { key: 'promotion_order_items', type: FieldType.Text, title: 'Promotion Order Items', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'promotion_discount', type: FieldType.Text, title: 'Promotion Discount' },
        { key: 'reviews_count', type: FieldType.Text, title: 'Reviews Count', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_count', type: FieldType.Text, title: 'Return Count', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_rate', type: FieldType.Text, title: 'Return Rate' },
        { key: 'afn_fulfillable_quantity', type: FieldType.Text, title: 'Afn Fulfillable Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_receiving_quantity', type: FieldType.Text, title: 'Afn Inbound Receiving Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_shipped_quantity', type: FieldType.Text, title: 'Afn Inbound Shipped Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_working_quantity', type: FieldType.Text, title: 'Afn Inbound Working Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_unsellable_quantity', type: FieldType.Text, title: 'Afn Unsellable Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_fc_processing', type: FieldType.Text, title: 'Reserved Fc Processing', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_fc_transfers', type: FieldType.Text, title: 'Reserved Fc Transfers', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_customerorders', type: FieldType.Text, title: 'Reserved Customerorders', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'fbm_quantity', type: FieldType.Text, title: 'Fbm Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'stock_up_num', type: FieldType.Text, title: 'Stock Up Num', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'clicks', type: FieldType.Text, title: 'Clicks', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_days', type: FieldType.Text, title: 'Available Days', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'fbm_available_days', type: FieldType.Text, title: 'Fbm Available Days', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'avg_star', type: FieldType.Text, title: 'Avg Star' },
        { key: 'prev_star', type: FieldType.Text, title: 'Prev Star' },
        { key: 'comment_rate', type: FieldType.Text, title: 'Comment Rate' },
        { key: 'sessions', type: FieldType.Text, title: 'Sessions', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sessions_mobile', type: FieldType.Text, title: 'Sessions Mobile', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sessions_total', type: FieldType.Text, title: 'Sessions Total', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'buy_box_percentage', type: FieldType.Text, title: 'Buy Box Percentage' },
        { key: 'page_views', type: FieldType.Text, title: 'Page Views', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'page_views_mobile', type: FieldType.Text, title: 'Page Views Mobile', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'page_views_total', type: FieldType.Text, title: 'Page Views Total', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'ad_direct_order_quantity', type: FieldType.Text, title: 'Ad Direct Order Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'ad_direct_sales_amount', type: FieldType.Text, title: 'Ad Direct Sales Amount' },
        { key: 'adv_rate', type: FieldType.Text, title: 'Adv Rate' },
        { key: 'volume_cvr', type: FieldType.Text, title: 'Volume Cvr' },
        { key: 'cvr', type: FieldType.Text, title: 'Cvr' },
        { key: 'ctr', type: FieldType.Text, title: 'Ctr' },
        { key: 'acoas', type: FieldType.Text, title: 'Acoas' },
        { key: 'acos', type: FieldType.Text, title: 'Acos' },
        { key: 'has_oprator_log', type: FieldType.Text, title: 'Has Oprator Log' },
        { key: 'return_goods_count', type: FieldType.Text, title: 'Return Goods Count', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_goods_rate', type: FieldType.Text, title: 'Return Goods Rate' },
        { key: 'cpc', type: FieldType.Text, title: 'Cpc' },
        { key: 'spend', type: FieldType.Text, title: 'Spend' },
        { key: 'roas', type: FieldType.Text, title: 'Roas' },
        { key: 'asoas', type: FieldType.Text, title: 'Asoas' },
        { key: 'cpo', type: FieldType.Text, title: 'Cpo' },
        { key: 'cpm', type: FieldType.Text, title: 'Cpm' },
        { key: 'ad_sales_amount', type: FieldType.Text, title: 'Ad Sales Amount' },
        { key: 'ad_cvr', type: FieldType.Text, title: 'Ad Cvr' },
        { key: 'ad_order_quantity', type: FieldType.Text, title: 'Ad Order Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'shared_cost_of_advertising', type: FieldType.Text, title: 'Shared Cost Of Advertising' },
        { key: 'shared_ads_sb_cost', type: FieldType.Text, title: 'Shared Ads Sb Cost' },
        { key: 'shared_ads_sbv_cost', type: FieldType.Text, title: 'Shared Ads Sbv Cost' },
        { key: 'ads_sd_cost', type: FieldType.Text, title: 'Ads Sd Cost' },
        { key: 'ads_sp_cost', type: FieldType.Text, title: 'Ads Sp Cost' },
        { key: 'impressions', type: FieldType.Text, title: 'Impressions', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sids', type: FieldType.Text, title: 'Sids' },
        { key: 'net_amount', type: FieldType.Text, title: 'Net Amount' },
        { key: 'small_image_url', type: FieldType.Text, title: 'Small Image Url' },
        { key: 'available_inventory_afn_fulfillable_quantity', type: FieldType.Text, title: 'Afn Fulfillable Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_stock_up_num', type: FieldType.Text, title: 'Stock Up Num', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_customerorders', type: FieldType.Text, title: 'Reserved Customerorders', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_fc_transfers', type: FieldType.Text, title: 'Reserved Fc Transfers', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_afn_inbound_receiving_quantity', type: FieldType.Text, title: 'Afn Inbound Receiving Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_available_inventory', type: FieldType.Text, title: 'Available Inventory', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_fc_processing', type: FieldType.Text, title: 'Reserved Fc Processing', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_fbm_quantity', type: FieldType.Text, title: 'Fbm Quantity', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'avg_custom_price', type: FieldType.Text, title: 'Avg Custom Price' },
        { key: 'avg_volume', type: FieldType.Text, title: 'Avg Volume' },
        { key: 'icon_num', type: FieldType.Text, title: 'Icon Num', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'spu_spu_names_first_spu_name', type: FieldType.Text, title: 'Spu Name' },
        { key: 'spu_spu_names_first_spu', type: FieldType.Text, title: 'Spu' },
        { key: 'spu_spu_names_full', type: FieldType.Text, title: '完整Spu Spu Names' },
        { key: 'product_create_time', type: FieldType.Text, title: 'Product Create Time' },
        { key: 'cg_price', type: FieldType.Text, title: 'Cg Price' },
        { key: 'whs_value', type: FieldType.Text, title: 'Whs Value' },
        { key: 'local_quantity', type: FieldType.Text, title: 'Local Quantity' },
        { key: 'oversea_quantity', type: FieldType.Text, title: 'Oversea Quantity' },
        { key: 'inventory_sales_ratio', type: FieldType.Text, title: 'Inventory Sales Ratio' },
        { key: 'avg_landed_price', type: FieldType.Text, title: 'Avg Landed Price' },
        { key: 'suppliers', type: FieldType.Text, title: 'Suppliers' },
        { key: 'model', type: FieldType.Text, title: 'Model' },
        { key: 'return_amount', type: FieldType.Text, title: 'Return Amount', extra: { formatter: NumberFormatter.DIGITAL_ROUNDED_2 } },
        { key: 'tag_set_first_global_tag_id', type: FieldType.Text, title: 'Global Tag Id' },
        { key: 'tag_set_first_tag_name', type: FieldType.Text, title: 'Tag Name' },
        { key: 'tag_set_first_color', type: FieldType.Text, title: 'Color' },
        { key: 'tag_set_full', type: FieldType.Text, title: '完整Tag Set' },
        { key: 'currency_code', type: FieldType.Text, title: 'Currency Code' },
        { key: 'volume_chain', type: FieldType.Text, title: 'Volume Chain', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'amount_chain', type: FieldType.Text, title: 'Amount Chain' },
        { key: 'order_items_chain', type: FieldType.Text, title: 'Order Items Chain', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'pids', type: FieldType.Text, title: 'Pids' }

      ]
    }
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (formItemParams: { [key: string]: any }, context: any) => {
    const { asin_field, start_date_field, end_date_field } = formItemParams;
    const asin = asin_field[0]['text'];
    const mid = formItemParams.mid_field
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
    function debugLog(arg: any) {
      console.log(JSON.stringify({
        formItemParams,
        context,
        arg
      }))
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
      function extractLeafData(obj: any): Record<string, any> {
        let result: Record<string, any> = {};
        Object.keys(obj).forEach(key => {
          const value = obj[key];
          if (value && typeof value === 'object' && !Array.isArray(value)) {
        // 如果是对象，递归提取
        Object.assign(result, extractLeafData(value));
          } else if (Array.isArray(value)) {
        // 如果是数组，仅处理第一个元素
        if (value.length > 0) {
          const firstElement = value[0];
          if (typeof firstElement === 'object') {
            Object.assign(result, extractLeafData(firstElement));
          } else {
            result[key] = String(value);
          }
        } else {
          result[key] = String(value);
        }
          } else {
        // 如果是基本类型，直接添加到结果中
        result[key] = String(value);
          }
        });
        return result;
      }

      // 检查是否有值为 null 的字段，如果有则将其转换为字符串 'null'
      function convertNullToString(obj: any): any {
        if (obj === null) {
          return 'null';
        } else if (Array.isArray(obj)) {
          return obj.map(item => convertNullToString(item));
        } else if (typeof obj === 'object') {
          const newObj: any = {};
          Object.keys(obj).forEach(key => {
            newObj[key] = convertNullToString(obj[key]);
          });
          return newObj;
        }
        return obj;
      }
      // 遍历 res.data.list 并转换 null 值
      res.data.list = res.data.list.map((item: any) => {
        return convertNullToString(item);
      });

      // 遍历 res.data.list 并映射数据
      const mappedData = res.data.list.map((item: any) => {
        const flatData = extractLeafData(item); // 提取所有最末端数据
        const mappedItem: any = {};
        Object.keys(keyMapping).forEach(key => {
          if (flatData[key] !== undefined) {
            mappedItem[keyMapping[key]] = flatData[key];
          }
        });
        return mappedItem;
      });

      mappedData[0].id = asin; // 添加 id 字段

      return {
        code: FieldCode.Success,
        data: mappedData[0]
      };
    } catch (e) {
      console.log('====error', String(e));
      debugLog(e);
      return {
        code: FieldCode.Error,
      };
    }
  },
});
export default basekit;