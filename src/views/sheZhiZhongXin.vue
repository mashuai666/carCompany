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
          <el-form style="width:500px" ref="form" :model="enterpriseInfo" label-width="100px">
            <el-form-item label="企业名称">
              <el-input v-model="enterpriseInfo.shopName" disabled>XXX汽修</el-input>
            </el-form-item>
            <el-form-item label="管理员姓名">
              <el-input v-model="enterpriseInfo.name" disabled>小马马</el-input>
            </el-form-item>
            <el-form-item label="管理员电话">
              <el-input v-model="enterpriseInfo.phone" disabled>17391856792</el-input>
            </el-form-item>
            <el-form-item label="到期时间">
              <el-input v-model="enterpriseInfo.outTime" disabled>2022-22-22 22:22:22</el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="人员管理" name="2">
          <el-table
              :data="peopleManagement"
              style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="jurisdiction"
                label="权限"
                width="180">
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template #default="scope">
                <el-button type="text" size="small" @click="handleClick(scope.$index, scope.row)"
                >修改
                </el-button
                >
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button type="primary" style="margin-top: 20px" @click="addEmployees">添加员工</el-button>

        </el-tab-pane>

        <el-tab-pane label="服务项目" name="3">
          <el-table
              :data="serveData"
              style="width: 100%">
            <el-table-column
                prop="name"
                label="服务名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="money"
                label="金额/元"
                width="180">
            </el-table-column>
            <el-table-column
                prop="sale"
                label="优惠/元"
                width="180">
            </el-table-column>
            <el-table-column
                prop="receivable"
                label="应收/元"
                width="180">
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template #default="scope">
                <el-button type="text" size="small" @click="handleClick(scope.$index, scope.row)"
                >修改
                </el-button
                >
                <el-button type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--          分页器-->
          <el-pagination page-size="7" style="text-align: center" @current-change="getServes" background layout="prev, pager, next"
                         :total="total">
          </el-pagination>
          <el-button type="primary" style="margin-top: 20px" @click="addEmployees">添加服务项目</el-button>
        </el-tab-pane>

        <el-tab-pane label="账户设置" name="4">账户设置</el-tab-pane>

        <el-tab-pane label="供应商设置" name="5">供应商设置</el-tab-pane>

        <el-tab-pane label="账户设置" name="6">账户设置</el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {getEmployees, getServe} from '@/api/sheZhiZhongXin'

export default {
  name: "sheZhiZhongXin",
  data() {
    return {
      activeName: '1',
      // 企业资料数据
      enterpriseInfo: {},
      // 人员管理数据
      peopleManagement: [],
      // 服务项目数据
      serveData: [],
      // 服务分页器的页码
      total:''
    };
  },
  mounted() {
    // 获取企业资料数据
    this.enterpriseInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.enterpriseInfo.outTime = moment(this.enterpriseInfo.outTime).format('YYYY-MM-DD HH:MM:SS')
    // 获取员工资料信息
    getEmployees().then(res => {
      if (res.status !== 200) {
        this.$message.error(res.data)
        return
      }
      res.data.forEach((item, index) => {
        res.data[index].jurisdiction = res.data[index].jurisdiction == 1 ? '管理员' : '职员'
      })
      this.peopleManagement = res.data
      }),
        // 获取服务项目
    this.getServes(1)
  },
  methods: {
    // 添加员工
    addEmployees() {
      this.$prompt('请输入员工姓名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value}) => {
        const employees = value.trim()
        if (employees !== '' && employees !== null && employees !== undefined) {
          console.log('正确输入')
        }
      }).catch(() => {

      });
    },
    // 获取服务项目
    getServes(currentPage) {
      getServe({currentPage}).then(res => {
        if (res.status !== 200) {
          this.$message.error(res.data)
          return
        }
        this.serveData = res.data.data
        this.total =res.data.total
        console.log(res.data)
      })
    },
    // eslint-disable-next-line no-unused-vars
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    onSubmit() {
      // console.log('submit!');
    }
  }
}
</script>

<style scoped>

</style>