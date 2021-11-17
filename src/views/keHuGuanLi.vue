<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 库存中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-input
          style="width: 400px"
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
      >
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 110px">
            <el-option label="客户名称" value="1"></el-option>
            <el-option label="手机号" value="2"></el-option>
            <el-option label="客户备注" value="3"></el-option>
          </el-select>
        </template>
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>

      <label style="margin-right: 10px;margin-left: 10px;">到店时间查找</label>
      <el-date-picker v-model="valuea" type="date" placeholder="选择日期">
      </el-date-picker>


      <el-tooltip class="item" effect="dark" content="新增客户不能替代维修开单，仅新增客户" placement="top">
        <el-button style="margin-left: 20px">新增客户</el-button>

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
        <el-table-column label="客户名称" width="100" prop="name"/>
        <el-table-column label="手机号" width="150" prop="phone"/>
        <el-table-column label="上次到店时间" width="150"  prop="date"/>
        <el-table-column label="客户生日" width="150"  prop="birth"/>
        <el-table-column label="客户备注"  prop="beiZhu"/>
        <el-table-column label="操作"   >
          <template #default="scope">
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">查看客户维修记录</el-button>
            <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
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
  name: "keHuGuanLi",
  data() {
    return {
      input3:'',
      tableData: [
        {
          name:'小马子',
          phone:17391856792,
          date:'2021-11-17 15:30:21',
          birth:'11-17',
          beiZhu:'客户备注'
        },
        {
          name:'小马子',
          phone:17391856792,
          date:'2021-11-17 15:30:21',
          birth:'2021-11-17',
          beiZhu:'客户备注'
        },{
          name:'小马子',
          phone:17391856792,
          date:'2021-11-17 15:30:21',
          birth:'11-17',
          beiZhu:'客户备注'
        },{
          name:'小马子',
          phone:17391856792,
          date:'2021-11-17 15:30:21',
          birth:'11-17',
          beiZhu:'客户备注客户备注客户备注客户备注客户备注客户备注客户备注'
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