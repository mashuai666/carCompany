<!--维修单打印界面-->
<template>
  <div class="">
    <div class="crumbs">
      <!-- 面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 工单中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <router-link style="font-weight: normal;text-decoration: underline" to="weiXiuKaiDan"> 维修开单</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>维修单打印</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <button v-print="printObj">Print local range</button>
      <div id="printMe">
      <h2 style="text-align: center;font-weight: bold">维修单</h2>
        <a-descriptions :column=4 style="margin-top: 10px" size="middle" bordered title="">
          <a-descriptions-item label="单号">
            SD20211110170035
          </a-descriptions-item>
          <a-descriptions-item label="接单时间">
            2021-11-10 17:01:25
          </a-descriptions-item>
          <a-descriptions-item label="开单时间">
            2021-11-10 17:01:54
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :column=4 style="margin-top: 10px" size="middle" bordered title="基本信息">
          <a-descriptions-item label="车牌号">
            陕A15145
          </a-descriptions-item>
          <a-descriptions-item label="客户姓名">
            马帅
          </a-descriptions-item>
          <a-descriptions-item label="客户手机号">
            17391856792
          </a-descriptions-item>
          <a-descriptions-item label="VIN">
            SDJANSDSJASXJHSNAJ
          </a-descriptions-item>
          <a-descriptions-item label="付款类型">
            微信
          </a-descriptions-item>
          <a-descriptions-item label="车型">
            这里是车型这里是车型这里是车型这里是车型这里是车型这里是车型这里是车型
          </a-descriptions-item>
        </a-descriptions>
        <a-descriptions :column=2 style="margin-top: 10px" size="middle" bordered title="项目明细">
          <a-descriptions-item label="项目名称">
            项目名称项目名称项目名称项目名称项目名称
          </a-descriptions-item>
          <a-descriptions-item label="金额/元">
            150
          </a-descriptions-item>
          <a-descriptions-item label="使用商品">
            商品1
          </a-descriptions-item>
          <a-descriptions-item label="金额/元">
            150
          </a-descriptions-item>
          <a-descriptions-item label="使用商品">
            商品2
          </a-descriptions-item>
          <a-descriptions-item label="金额/元">
            150
          </a-descriptions-item>
          <a-descriptions-item label="附加费">
            要求送车
          </a-descriptions-item>
          <a-descriptions-item label="金额/元">
            150
          </a-descriptions-item>
          <a-descriptions-item label="总花费/元">
            358
          </a-descriptions-item>

        </a-descriptions>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "weiXiuDan",
  data() {
    return {
      printLoading: true,
      printObj: {
        id: "printMe",
        popTitle: '测试打印',
        extraCss: "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    };
  }
}

</script>

<style>
.message-title {
  cursor: pointer;
}

.handle-row {
  margin-top: 30px;
}

.ant-descriptions-header {
  margin-bottom: 5px;
}
</style>

