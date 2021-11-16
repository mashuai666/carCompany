<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 库存中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>库存中心</el-breadcrumb-item>
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
            <el-option label="商品编号" value="1"></el-option>
            <el-option label="名称" value="2"></el-option>
            <el-option label="Tel" value="3"></el-option>
          </el-select>
        </template>
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>




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
        <el-table-column label="商品编号" width="150" prop="shangPinID"/>
        <el-table-column label="名称" width="150" prop="name"/>
        <el-table-column label="数量" width="50" prop="number"/>
        <el-table-column label="单位" width="50" prop="danWei"/>
        <el-table-column label="进货价" width="80" prop="jinHuo"/>
        <el-table-column label="销售价" width="80" prop="xiaoShou"/>
        <el-table-column label="供应商名称" width="150"  prop="gongYingName"/>
        <el-table-column label="品牌"  width="150" prop="pinPai"/>
        <el-table-column label="规格型号"  width="150" prop="guiGeXingHao"/>
        <el-table-column label="出场编码"  width="150" prop="chuChangBianMa"/>
        <el-table-column label="OE号"  width="200" prop="OE"/>
        <el-table-column label="适用车型"  width="200" prop="shiYongCheXing"/>
        <el-table-column label="操作"  width="150"  fixed="right" >
          <template #default="scope">
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
  name: "kuCunZhongXin",
  data() {
    return {
      input3:'',
      tableData: [
        {
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
        },
        {
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
        },
        {
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
        },
        {
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
        },{
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
        },{
          shangPinID: 'SP1015155242',
          name: '商品名称',
          number: '200',
          danWei: '单位',
          jinHuo: '150',
          xiaoShou: '180',
          gongYingName: '供应商名称',
          pinPai: '品牌名称',
          guiGeXingHao: '规格型号-规格型号',
          chuChangBianMa: '出场编码-出场编码',
          OE: '1541151154154125412',
          shiYongCheXing: '适用车型-车型-车型-车型',
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