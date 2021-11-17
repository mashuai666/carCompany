<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 设置中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="企业资料" name="1">
          <el-form style="width:500px" ref="form" :model="form"  label-width="100px">
            <el-form-item label="企业名称" >
              <el-input v-model="form.name" disabled>XXX汽修</el-input>
            </el-form-item>
            <el-form-item label="管理员姓名" >
              <el-input v-model="form.adminNanme" disabled>小马马</el-input>
            </el-form-item>
            <el-form-item label="管理员电话" >
              <el-input v-model="form.adminPhone" disabled>17391856792</el-input>
            </el-form-item>
            <el-form-item label="到期时间" >
              <el-input v-model="form.dqDate" disabled>2022-22-22 22:22:22</el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

<!--            <el-form-item label="活动区域">-->
<!--              <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--                <el-option label="区域一" value="shanghai"></el-option>-->
<!--                <el-option label="区域二" value="beijing"></el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="活动时间">-->
<!--              <el-col :span="11">-->
<!--                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>-->
<!--              </el-col>-->
<!--              <el-col class="line" :span="2">-</el-col>-->
<!--              <el-col :span="11">-->
<!--                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>-->
<!--              </el-col>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="即时配送">-->
<!--              <el-switch v-model="form.delivery"></el-switch>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="活动性质">-->
<!--              <el-checkbox-group v-model="form.type">-->
<!--                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="地推活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
<!--                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
<!--              </el-checkbox-group>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="特殊资源">-->
<!--              <el-radio-group v-model="form.resource">-->
<!--                <el-radio label="线上品牌商赞助"></el-radio>-->
<!--                <el-radio label="线下场地免费"></el-radio>-->
<!--              </el-radio-group>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="活动形式">-->
<!--              <el-input type="textarea" v-model="form.desc"></el-input>-->
<!--            </el-form-item>-->

          </el-form>
        </el-tab-pane>
        <el-tab-pane label="人员管理" name="2">人员管理</el-tab-pane>
        <el-tab-pane label="服务项目" name="3">服务项目</el-tab-pane>
        <el-tab-pane label="账户设置" name="4">账户设置</el-tab-pane>
        <el-tab-pane label="供应商设置" name="5">供应商设置</el-tab-pane>
        <el-tab-pane label="账户设置" name="6">账户设置</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "sheZhiZhongXin",
  data() {
    return {
      activeName: '1',
      form: {
        name: 'xxx汽修',
        adminNanme: '小马马',
        adminPhone: '17391856792',
        dqDate: '2022-22-22 22:22:22',
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>