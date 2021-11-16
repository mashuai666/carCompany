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
      <label style="margin-right: 10px;">订单状态查找</label>
      <el-select v-model="value" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        >
        </el-option>
      </el-select>

      <label style="margin-right: 10px;margin-left: 10px;">接车时间查找</label>
      <el-date-picker v-model="valuea" type="date" placeholder="选择日期">
      </el-date-picker>



      <el-table
          :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
          style="width: 100%;margin-top: 10px"
      >
        <el-table-column label="维修单号" width="200" prop="orderId"/>
        <el-table-column label="姓名" width="100" prop="name"/>
        <el-table-column label="车牌号" width="100" prop="carNumber"/>
        <el-table-column label="电话" width="130" prop="phone"/>
        <el-table-column label="接车时间" width="180" prop="date"/>
        <el-table-column label="开单时间" width="180" prop="date"/>
        <el-table-column label="车型"  prop="cheXing"/>
<!--        <el-table-column label="供应商名称"  prop="cheXing"/>-->
        <el-table-column label="状态" width="100" prop="state"/>
        <el-table-column fixed="right" align="right"  >
          <template #header>
            <el-input
                v-model="search"
                class="input-with-select"
            >
              <template #prepend>
                <el-tooltip
                    class="item"
                    effect="dark"
                    content="选择要查找的类别"
                    placement="top"
                >
                <el-select v-model="select"  style="width: 110px">
                  <el-option label="订单号" value="1"></el-option>
                  <el-option label="手机号" value="2"></el-option>
                  <el-option label="车牌号" value="3"></el-option>
                  <el-option label="姓名" value="4"></el-option>
                </el-select>
                </el-tooltip>
              </template>
              <template #append>
                <el-button icon="el-icon-search"></el-button>
              </template>
            </el-input>
          </template>
          <template #default="scope">
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">详情</el-button>
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
          orderId:'SD20211115153120',
          state:'已完工'
        },
        {
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型这里是',
          orderId:'SD20211115153120',
          state:'已完工'
        },
        {
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型这里',
          orderId:'SD20211115153120',
          state:'已完工'
        },

        {
          date: '2016-05-02 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          orderId:'SD20211115153120',
          state:'已完工'
        },{
          date: '2016-05-03 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          orderId:'SD20211115153120',
          state:'已完工'
        },{
          date: '2016-05-01 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车里是车型',
          orderId:'SD20211115153120',
          state:'已完工'
        },{
          date: '2016-05-08 15:45:25',
          carNumber: '陕A15412',
          name: '小马马',
          phone:'17391856792',
          cheXing:'这里是车型这里是车型这里是车型是车型',
          orderId:'SD20211115153120',
          state:'已完工'
        },
      ],
      search: '',
      value: '全部',
      select:'订单号',
      valuea:'',
      options: [
        {
          value: '1',
          label: '全部'
        },
        {
          value: '2',
          label: '待施工'
        },
        {
          value: '3',
          label: '施工中'
        },
        {
          value: '4',
          label: '已完工'
        },
        {
          value: '5',
          label: '中断工单'
        },

      ],
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