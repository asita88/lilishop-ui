<template>
  <div class="layout">
    <Form ref="formValidate" :label-width="160" label-position="right" :model="formValidate" :rules="ruleValidate">
      <FormItem label="合约地址" prop="contractAddress">
        <Input maxlength="300" v-model="formValidate.contractAddress" />
      </FormItem>
      <FormItem label="聚合地址" prop="aggregateAddress">
        <Input maxlength="300"  v-model="formValidate.aggregateAddress" />
      </FormItem>
      <FormItem label="聚合密钥" prop="aggregateAddress">
        <Input maxlength="300"  v-model="formValidate.aggregatePasswd" />
      </FormItem>
      <div class="label-btns">
        <Button type="primary" @click="submit('formValidate')">保存</Button>
      </div>
    </Form>
  </div>
</template>
<script>
import { setSetting } from "@/api/index";
import { handleSubmit } from "../setting/validate";
export default {
  data() {
    return {
      ruleValidate: {}, // 验证规则
      formValidate: { // 表单数据
        contractAddress: "",
        aggregateAddress: "",
        aggregatePasswd: "",
      },
    };
  },
  props: ["res", "type"],
  created() {
    this.init();
  },
  methods: {
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting();
      }
    },
    // 保存设置
    setupSetting() {
      setSetting(this.type, this.formValidate).then((res) => {
        if (res.success) {
          this.$Message.success("保存成功!");
        } else {
          this.$Message.error("保存失败!");
        }
      });
    },
    // 实例化数据
    init() {
      this.res = JSON.parse(this.res);

      this.$set(this, "formValidate", { ...this.res });
      Object.keys(this.formValidate).forEach((item) => {
        this.ruleValidate[item] = [
          {
            required: true,
            message: "请填写必填项",
            trigger: "blur",
          },
        ];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../setting/style.scss";

.label-item {
  display: flex;
}
.w200 {
  /deep/ .ivu-input {
    width: 250px !important;
    margin: 0 10px;
  }
}
/deep/ .ivu-input {
  width: 450px !important;
  margin: 0 10px;
}
.ivu-input-wrapper {
  width: 450px;
  margin-right: 10px;
}
</style>
