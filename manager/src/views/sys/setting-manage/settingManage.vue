
<template>
  <Card v-if="show">
    <Tabs v-model="selected" @on-click="clickTab">
      <TabPane :label="tabItem.name" :name="tabItem.type" v-for="(tabItem, tabIndex) in tabWay" :key="tabIndex">
        <component v-if="settingData" :res="settingData" :type="selected"
                   :is="templateSetting[tabItem.type]"></component>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
import {getSetting} from "@/api/index.js";
import templateSetting from "./template";

export default {
  data() {
    return {
      templateSetting, // 设置模板
      selected: "", // 已选
      settingData: "", // 模板数据
      show: true, // 是否显示
      setting: [
        //基础配置
        {
          type: "BASE_SETTING",
          name: "基础配置",
        },
        //商品设置
        {
          type: "GOODS_SETTING",
          name: "商品设置",
        },
        //订单配置
        {
          type: "ORDER_SETTING",
          name: "订单配置",
        },
        //积分设置
        {type: "POINT_SETTING", name: "积分设置"},
        {
          type: "WITHDRAWAL_SETTING",
          name: "提现设置",
        },
        //  快递查询设置
        {
          type: "LOGISTICS_SETTING",
          name: "快递查询设置",
        },
        //静态资源配置
        {
          type: "OSS_SETTING",
          name: "静态资源配置",
        },
        //短信配置
        {
          type: "SMS_SETTING",
          name: "短信配置",
        },
        //阿里短信配置
        {
          type: "IM_SETTING",
          name: "客服设置",
        },
      ],
      authLogin: [
        // 登录设置
        {type: "CONNECT_SETTING", name: "登录设置"},
      ],
      pay: [
        //支付设置
        {type: "PAYMENT_SUPPORT", name: "支付开启/关闭"},
        //TRC支付设置
        {type: "TRC_PAYMENT", name: "TRC支付设置"},
        //ERC支付设置
        {type: "ERC_PAYMENT", name: "ERC支付设置"},
      ],
      tabWay: [], // tab数据
    };
  },

  watch: {
    $route(to, from) {
      this.selected = "";
      this.show = false;
      this.getSettingData(this.selected);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    this.clickTab(this.selected);
  },
  methods: {
    // tab切换
    clickTab(name) {
      this.selected = name;
      this.getSettingData(name);
    },
    /**
     * 进入页面请求第一个配置
     */
    getSettingData(name) {
      this.settingData = "";
      Object.keys(this).forEach((item) => {
        if (this.$route.name == item) {
          this.tabWay = this[item];
        }
      });
      // 点击页面给每项第一个数据赋值
      if (!name) {
        name = this.tabWay[0].type;
        this.selected = name;
      }

      getSetting(name).then((res) => {
        if (res.result) {
          this.settingData = JSON.stringify(res.result);
        }
      });
    },
  },
};
</script>
