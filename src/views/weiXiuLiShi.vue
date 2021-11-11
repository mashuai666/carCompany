<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 工单中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>维修历史</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tooltip
          class="item"
          effect="dark"
          content="历史所有订单"
          placement="top"
      >
        <el-button type="primary" :plain="false">全部</el-button>
      </el-tooltip>
      <el-tooltip
          class="item"
          effect="dark"
          content="没有开始施工的订单"
          placement="top"
      >
        <el-button type="primary" :plain="true">待施工</el-button>
      </el-tooltip>
      <el-tooltip
          class="item"
          effect="dark"
          content="正在施工的订单"
          placement="top"
      >
        <el-button type="primary" :plain="true">施工中</el-button>
      </el-tooltip>
      <el-tooltip
          class="item"
          effect="dark"
          content="已经完成的订单"
          placement="top"
      >
        <el-button type="primary" :plain="true">已完工</el-button>
      </el-tooltip>
      <el-tooltip
          class="item"
          effect="dark"
          content="意外中途结束的订单"
          placement="top"
      >
        <el-button type="primary" :plain="true">中断工单</el-button>
      </el-tooltip>


      <el-table
          :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
          style="width: 100%;margin-top: 10px"
      >
        <el-table-column label="接车时间" sortable  width="180" prop="date"/>
        <el-table-column label="开单时间" sortable  width="180" prop="date"/>
        <el-table-column label="车牌号" width="100" prop="carNumber"/>
        <el-table-column label="姓名" width="100" prop="name"/>
        <el-table-column label="手机号" width="130" prop="phone"/>
        <el-table-column label="车型" prop="cheXing"/>
        <el-table-column label="VIN" width="200" prop="vin"/>
        <el-table-column label="状态" width="100" prop="state"/>



        <el-table-column align="right">
          <template #header>
            <el-input
                v-model="search"
                placeholder="车牌号/姓名/手机号/订单号"
                class="input-with-select"
            >
              <template #append>
                <el-button icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </template>
          <template #default="scope">
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin: 10px auto;text-align: center" background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "weiXiuLiShi",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型这里型',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },
        {
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型这里是',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },
        {
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型这里',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },

        {
          date: '2016-05-02 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },{
          date: '2016-05-03 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },{
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车里是车型',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },{
          date: '2016-05-08 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          vin:'SSJZNSJXNSHQURYSGZ',
          state:'已完工'
        },
      ],
      search: '',
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>

<style scoped>

</style>