<template>
<div>
  <div class="crumbs">
    <!-- 面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-lx-calendar"></i> 导入商品
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="container">
    <input-excel @getResult="getMyExcelData"></input-excel>
    <el-button type="primary" @click="$router.push('shangPinCaiGou')" plain>单个添加</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Date" width="180" />
      <el-table-column prop="number" label="Name" width="180" />
      <el-table-column prop="danWei" label="Name" width="180" />
      <el-table-column prop="date" label="Name" width="180" />
      <el-table-column prop="jinHuo" label="Name" width="180" />
      <el-table-column prop="xiaoShou" label="Name" width="180" />
      <el-table-column prop="faPiao" label="Name" width="180" />
      <el-table-column prop="gongYingName" label="Name" width="180" />
      <el-table-column prop="PinPai" label="Name" width="180" />
      <el-table-column prop="xingHao" label="Name" width="180" />
      <el-table-column prop="bianMa" label="Name" width="180" />
      <el-table-column prop="OE" label="Name" width="180" />
      <el-table-column prop="cheXing" label="Address" />
      <el-table-column prop="people" label="Address" />
    </el-table>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    </div>
</div>
</template>

<script>
import inputExcel from '@/components/uploadExcel'
export default {
  name: "daoRuShangPin",
  data(){
    return {
      tableData:[{
        name: '123',
        number: '11',
        danWei: '1',
        date: '',
        jinHuo: '213',
        xiaoShou: '',
        faPiao: '123',
        gongYingName: '',
        PinPai: '',
        xingHao: '',
        bianMa: '',
        OE: '',
        cheXing: '',
        people: ''
      }]
    }
  },
  components:{
    inputExcel
  },
  methods: {
    getMyExcelData(data) {
      // data 为读取的excel数据，在这里进行处理该数据
      console.log(data)
      this.tableData = data
    }

  },
}
</script>

<style scoped>

</style>