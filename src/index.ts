import { basekit, FieldType, field, FieldComponent, FieldCode, NumberFormatter, AuthorizationType, DateFormatter } from '@lark-opdev/block-basekit-server-api';
import { keyMapping } from './keyMapping';
const { t } = field;

const domain = '42kuajing.com';
// 通过addDomainList添加请求接口的域名
basekit.addDomainList([domain]);


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
    },
    // 是否强制更新
    {
      key: 'force_update',
      label: '是否强制更新',
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Number],
        mode: 'single'
      },
      validator: { required: true },
      tooltips: [{
        type: 'text',
        content: '请选择是否强制更新字段, 0为不强制更新, 1为强制更新'
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
        { key: 'parent_asins_first_amazon_url', type: FieldType.Text, title: '父ASIN亚马逊前台地址' },
        { key: 'parent_asins_first_parent_asin', type: FieldType.Text, title: '父ASIN' },
        { key: 'parent_asins_first_sid', type: FieldType.Text, title: '父ASIN对应店铺ID' },
        { key: 'parent_asins_full', type: FieldType.Text, title: '完整父ASIN列表' },
        { key: 'asins_first_amazon_url', type: FieldType.Text, title: 'ASIN亚马逊前台地址' },
        { key: 'asins_first_asin', type: FieldType.Text, title: 'ASIN名称', primary: true },
        { key: 'asins_first_sid', type: FieldType.Text, title: 'ASIN对应店铺ID' },
        { key: 'asins_full', type: FieldType.Text, title: '完整ASIN列表' },
        { key: 'price_list_first_country', type: FieldType.Text, title: '国家' },
        { key: 'price_list_first_is_eur', type: FieldType.Text, title: '是否欧洲共享库存' },
        { key: 'price_list_first_local_sku', type: FieldType.Text, title: '本地SKU' },
        { key: 'price_list_first_mid', type: FieldType.Text, title: '站点ID' },
        { key: 'price_list_first_local_name', type: FieldType.Text, title: '品名' },
        { key: 'price_list_first_sid', type: FieldType.Text, title: '店铺ID' },
        { key: 'price_list_first_is_delete', type: FieldType.Text, title: '是否删除' },
        { key: 'price_list_first_volume', type: FieldType.Text, title: 'MSKU销量' },
        { key: 'price_list_first_product_pic_url', type: FieldType.Text, title: '本地上传图片地址' },
        { key: 'price_list_first_small_image_url', type: FieldType.Text, title: 'MSKU缩略图地址' },
        { key: 'price_list_first_seller_name', type: FieldType.Text, title: '店铺名称' },
        { key: 'price_list_first_price', type: FieldType.Text, title: '历史快照价格' },
        { key: 'price_list_first_seller_sku', type: FieldType.Text, title: 'MSKU' },
        { key: 'price_list_first_source_rate', type: FieldType.Text, title: '原币种汇率', extra: { formatter: NumberFormatter.DIGITAL_ROUNDED_2 } },
        { key: 'price_list_first_status', type: FieldType.Text, title: '商品状态' },
        { key: 'price_list_first_cid', type: FieldType.Text, title: '分类ID' },
        { key: 'price_list_full', type: FieldType.Text, title: '完整价格列表' },
        { key: 'small_cate_rank', type: FieldType.Text, title: '小类排名' },
        { key: 'item_name', type: FieldType.Text, title: '商品标题' },
        { key: 'sku', type: FieldType.Text, title: 'SKU' },
        { key: 'local_name', type: FieldType.Text, title: '品名' },
        { key: 'cate_rank', type: FieldType.Text, title: '大类排名', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'rank_category', type: FieldType.Text, title: '大类名称' },
        { key: 'prev_cate_rank', type: FieldType.Text, title: '上一次大类排名', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'currency_icon', type: FieldType.Text, title: '币种符号' },
        { key: 'cg_price_currency_icon', type: FieldType.Text, title: '采购成本币种符号' },
        { key: 'ranking_update_time', type: FieldType.Text, title: '排名更新时间' },
        { key: 'seller_store_countries_first_country', type: FieldType.Text, title: '国家' },
        { key: 'seller_store_countries_first_seller_name', type: FieldType.Text, title: '店铺名称' },
        { key: 'seller_store_countries_full', type: FieldType.Text, title: '完整店铺国家列表' },
        { key: 'categories', type: FieldType.Text, title: '分类' },
        { key: 'brands', type: FieldType.Text, title: '品牌' },
        { key: 'principal_names', type: FieldType.Text, title: '负责人' },
        { key: 'developer_names', type: FieldType.Text, title: '开发人' },
        { key: 'attributes', type: FieldType.Text, title: '商品属性' },
        { key: 'month_stock_sales_ratio', type: FieldType.Text, title: '月库销比' },
        { key: 'volume', type: FieldType.Text, title: '销量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'b2b_volume', type: FieldType.Text, title: 'B2B销量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'order_items', type: FieldType.Text, title: '订单量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'b2b_order_items', type: FieldType.Text, title: 'B2B订单量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'amount', type: FieldType.Text, title: '销售额' },
        { key: 'b2b_amount', type: FieldType.Text, title: 'B2B销售额' },
        { key: 'volume_chain_ratio', type: FieldType.Text, title: '销量环比' },
        { key: 'amount_chain_ratio', type: FieldType.Text, title: '销售额环比' },
        { key: 'order_chain_ratio', type: FieldType.Text, title: '订单量环比' },
        { key: 'gross_profit', type: FieldType.Text, title: '结算毛利润' },
        { key: 'predict_gross_profit', type: FieldType.Text, title: '订单毛利润' },
        { key: 'gross_margin', type: FieldType.Text, title: '结算毛利率' },
        { key: 'predict_gross_margin', type: FieldType.Text, title: '订单毛利率' },
        { key: 'roi', type: FieldType.Text, title: '投资回报率' },
        { key: 'promotion_volume', type: FieldType.Text, title: '促销销量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'promotion_amount', type: FieldType.Text, title: '促销销售额' },
        { key: 'promotion_order_items', type: FieldType.Text, title: '促销订单量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'promotion_discount', type: FieldType.Text, title: '促销折扣' },
        { key: 'reviews_count', type: FieldType.Text, title: '评论数', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_count', type: FieldType.Text, title: '退款量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_rate', type: FieldType.Text, title: '退款率' },
        { key: 'afn_fulfillable_quantity', type: FieldType.Text, title: 'FBA可售库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_receiving_quantity', type: FieldType.Text, title: 'FBA入库中', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_shipped_quantity', type: FieldType.Text, title: 'FBA在途库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_inbound_working_quantity', type: FieldType.Text, title: 'FBA计划入库', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'afn_unsellable_quantity', type: FieldType.Text, title: 'FBA不可售库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_fc_processing', type: FieldType.Text, title: '调仓中库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_fc_transfers', type: FieldType.Text, title: '待调仓库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'reserved_customerorders', type: FieldType.Text, title: '待发货库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'fbm_quantity', type: FieldType.Text, title: 'FBM可售库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'stock_up_num', type: FieldType.Text, title: '实际在途库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'clicks', type: FieldType.Text, title: '广告点击量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_days', type: FieldType.Text, title: '可售天数预估', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'fbm_available_days', type: FieldType.Text, title: 'FBM可售天数', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'avg_star', type: FieldType.Text, title: '平均评分' },
        { key: 'prev_star', type: FieldType.Text, title: '前次评分' },
        { key: 'comment_rate', type: FieldType.Text, title: '留评率' },
        { key: 'sessions', type: FieldType.Text, title: '浏览器会话量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sessions_mobile', type: FieldType.Text, title: '移动端会话量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sessions_total', type: FieldType.Text, title: '总会话量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'buy_box_percentage', type: FieldType.Text, title: 'Buy Box占有率' },
        { key: 'page_views', type: FieldType.Text, title: '浏览器页面浏览量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'page_views_mobile', type: FieldType.Text, title: '移动端页面浏览量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'page_views_total', type: FieldType.Text, title: '总页面浏览量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'ad_direct_order_quantity', type: FieldType.Text, title: '广告直接订单量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'ad_direct_sales_amount', type: FieldType.Text, title: '广告直接销售额' },
        { key: 'adv_rate', type: FieldType.Text, title: '广告订单占比' },
        { key: 'volume_cvr', type: FieldType.Text, title: '销量转化率' },
        { key: 'cvr', type: FieldType.Text, title: '总转化率' },
        { key: 'ctr', type: FieldType.Text, title: '点击率' },
        { key: 'acoas', type: FieldType.Text, title: '广告成本占销比' },
        { key: 'acos', type: FieldType.Text, title: '广告投入产出比' },
        { key: 'has_oprator_log', type: FieldType.Text, title: '存在操作日志' },
        { key: 'return_goods_count', type: FieldType.Text, title: '退货量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'return_goods_rate', type: FieldType.Text, title: '退货率' },
        { key: 'cpc', type: FieldType.Text, title: '单次点击成本' },
        { key: 'spend', type: FieldType.Text, title: '广告总花费' },
        { key: 'roas', type: FieldType.Text, title: '广告支出回报率' },
        { key: 'asoas', type: FieldType.Text, title: '广告销售额占比' },
        { key: 'cpo', type: FieldType.Text, title: '单订单广告成本' },
        { key: 'cpm', type: FieldType.Text, title: '千次展示成本' },
        { key: 'ad_sales_amount', type: FieldType.Text, title: '广告销售额' },
        { key: 'ad_cvr', type: FieldType.Text, title: '广告转化率' },
        { key: 'ad_order_quantity', type: FieldType.Text, title: '广告订单量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'shared_cost_of_advertising', type: FieldType.Text, title: '广告差异分摊' },
        { key: 'shared_ads_sb_cost', type: FieldType.Text, title: 'SB广告分摊' },
        { key: 'shared_ads_sbv_cost', type: FieldType.Text, title: 'SBV广告分摊' },
        { key: 'ads_sd_cost', type: FieldType.Text, title: 'SD广告花费' },
        { key: 'ads_sp_cost', type: FieldType.Text, title: 'SP广告花费' },
        { key: 'impressions', type: FieldType.Text, title: '广告展示量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'sids', type: FieldType.Text, title: '店铺ID列表' },
        { key: 'net_amount', type: FieldType.Text, title: '净销售额' },
        { key: 'small_image_url', type: FieldType.Text, title: '商品缩略图地址' },
        { key: 'available_inventory_afn_fulfillable_quantity', type: FieldType.Text, title: 'FBA可售库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_stock_up_num', type: FieldType.Text, title: '实际在途库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_customerorders', type: FieldType.Text, title: '待发货库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_fc_transfers', type: FieldType.Text, title: '待调仓库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_afn_inbound_receiving_quantity', type: FieldType.Text, title: 'FBA入库中', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_available_inventory', type: FieldType.Text, title: '总可用库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_reserved_fc_processing', type: FieldType.Text, title: '调仓中库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'available_inventory_fbm_quantity', type: FieldType.Text, title: 'FBM可售库存', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'avg_custom_price', type: FieldType.Text, title: '销售均价' },
        { key: 'avg_volume', type: FieldType.Text, title: '平均销量' },
        { key: 'icon_num', type: FieldType.Text, title: '运营日志数量', extra: { formatter: NumberFormatter.INTEGER } },
        { key: 'spu_spu_names_first_spu_name', type: FieldType.Text, title: 'SPU名称' },
        { key: 'spu_spu_names_first_spu', type: FieldType.Text, title: 'SPU' },
        { key: 'spu_spu_names_full', type: FieldType.Text, title: '完整SPU列表' },
        { key: 'product_create_time', type: FieldType.Text, title: '商品创建时间' },
        { key: 'cg_price', type: FieldType.Text, title: '采购成本' },
        { key: 'whs_value', type: FieldType.Text, title: '可用货值' },
        { key: 'local_quantity', type: FieldType.Text, title: '本地可用库存' },
        { key: 'oversea_quantity', type: FieldType.Text, title: '海外仓可用库存' },
        { key: 'inventory_sales_ratio', type: FieldType.Text, title: '存销比' },
        { key: 'avg_landed_price', type: FieldType.Text, title: '平均到岸价' },
        { key: 'suppliers', type: FieldType.Text, title: '供应商列表' },
        { key: 'model', type: FieldType.Text, title: '型号列表' },
        { key: 'return_amount', type: FieldType.Text, title: '退款金额', extra: { formatter: NumberFormatter.DIGITAL_ROUNDED_2 } },
        { key: 'tag_set_first_global_tag_id', type: FieldType.Text, title: '全局标签ID' },
        { key: 'tag_set_first_tag_name', type: FieldType.Text, title: '标签名称' },
        { key: 'tag_set_first_color', type: FieldType.Text, title: '标签颜色' },
        { key: 'tag_set_full', type: FieldType.Text, title: '完整标签列表' },
      ]
    }
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (formItemParams: { [key: string]: any }, context: any) => {
    const { asin_field, start_date_field, end_date_field } = formItemParams;
    const asin = asin_field[0]['text'];
    const mid = formItemParams.mid_field
    const start_date = new Date(start_date_field).toLocaleDateString('en-CA'); // YYYY-MM-DD 格式
    const end_date = new Date(end_date_field).toLocaleDateString('en-CA');
    const force_update = formItemParams.force_update === 1 ? true : false;
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
      "path": "/bd/productPerformance/openApi/asinList",
      "force_update": force_update
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
          if (flatData[keyMapping[key]] !== undefined) {
            mappedItem[key] = flatData[keyMapping[key]];
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