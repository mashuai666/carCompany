<template>
  <div>
    <div class="crumbs">
      <!-- 面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 商品采购
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-button type="primary" plain>从已有商品中选择</el-button>
      <el-tooltip
          class="item"
          effect="dark"
          content="使用excel文件模板进行导入，可在左侧导航工具箱中下载"
          placement="top"
      >
      <el-button type="primary" @click="$router.push('daoRuShangPin')" plain>批量excl导入</el-button>
      </el-tooltip>
      <el-divider></el-divider>
      <el-form  :inline="true"   ref="form" :model="form" label-width="130px">
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-select v-model="form.danWei" placeholder="选择采购人">
            <el-option label="个" value="1"></el-option>
            <el-option label="张" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="采购时间">
          <el-date-picker
              v-model="form.date"
              type="datetime"
              placeholder="选择时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="进货价">
          <el-input v-model="form.jinHuo"></el-input>
        </el-form-item>
        <el-form-item label="销售价">
          <el-input v-model="form.xiaoShou"></el-input>
        </el-form-item>

        <el-form-item label="发票号">
          <el-input v-model="form.faPiao"></el-input>
        </el-form-item>



        <el-form-item label="供应商名称">
          <el-input v-model="form.gongYingName"></el-input>
        </el-form-item>

        <el-form-item label="品牌">
          <el-input v-model="form.PinPai"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input v-model="form.xingHao"></el-input>
        </el-form-item>
        <el-form-item label="出厂编码">
          <el-input v-model="form.bianMa"></el-input>
        </el-form-item>
        <el-form-item  label="OE号">
          <el-input v-model="form.OE"></el-input>
        </el-form-item>
        <el-form-item label="适用车型">
          <el-input v-model="form.cheXing"></el-input>
        </el-form-item>
        <el-form-item label="采购人">
          <el-select v-model="form.people" placeholder="选择采购人">
            <el-option label="小王" value="1"></el-option>
            <el-option label="小张" value="2"></el-option>
          </el-select>
        </el-form-item><br>
        <el-form-item style="margin-left: 30px">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "shangPinCaiGou",
  data() {
    return {
      form: {
        name: '',
        number: '',
        danWei: '',
        date: '',
        jinHuo: '',
        xiaoShou: '',
        faPiao: '',
        gongYingName: '',
        PinPai: '',
        xingHao: '',
        bianMa: '',
        OE: '',
        cheXing: '',
        people: ''
      },
      value1:''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }

  },
}
</script>

<style scoped>

</style>