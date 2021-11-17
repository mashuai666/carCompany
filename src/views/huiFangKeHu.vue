<template>
 <div>
   <div class="crumbs">
     <el-breadcrumb separator="/">
       <el-breadcrumb-item>
         <i class="el-icon-lx-calendar"></i> 库存中心
       </el-breadcrumb-item>
       <el-breadcrumb-item>回访客户</el-breadcrumb-item>
     </el-breadcrumb>
   </div>
   <div class="container">
     <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="保养日期回访" name="first">
         <el-alert
             :closable="false"
             title="只能对维修开单中填写了下次保养日期的车辆进行统计"
             style="margin-bottom: 10px"
             type="info">
         </el-alert>

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
               <el-option label="车牌号" value="3"></el-option>
               <el-option label="车辆备注" value="4"></el-option>
               <el-option label="客户备注" value="5"></el-option>
             </el-select>
           </template>
           <template #append>
             <el-button icon="el-icon-search"></el-button>
           </template>
         </el-input>

         <label style="margin-right: 10px;margin-left: 10px;">保养日期查找</label>
         <el-date-picker v-model="valuea" type="date" placeholder="选择日期">
         </el-date-picker>

         <el-table
             :row-class-name="tableRowClassName"
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
           <el-table-column label="车牌号" width="150"  prop="date"/>
           <el-table-column label="保养日期" width="150"  prop="birth"/>
           <el-table-column label="客户备注"  prop="beiZhu"/>
           <el-table-column label="车辆备注"  prop="beiZhu"/>
           <el-table-column label="操作"   >
             <template #default="scope">
               <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">查看详细记录</el-button>
               <el-tooltip class="item" effect="dark" content="如果已经进行过回访请点击此按钮" placement="top">
               <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">已回访</el-button>
               </el-tooltip>
               <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             </template>
           </el-table-column>
         </el-table>
         <el-pagination style="margin: 10px auto;text-align: center" background layout="prev, pager, next" :total="1000"></el-pagination>


         </el-tab-pane>
       <el-tab-pane label="客户生日回访" name="second">
         <el-alert
             :closable="false"
             title="只能对客户信息中填写了生日日期的客户进行统计"
             style="margin-bottom: 10px"
             type="info">
         </el-alert>
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
               <el-option label="车牌号" value="3"></el-option>
               <el-option label="车辆备注" value="4"></el-option>
               <el-option label="客户备注" value="5"></el-option>
             </el-select>
           </template>
           <template #append>
             <el-button icon="el-icon-search"></el-button>
           </template>
         </el-input>

         <label style="margin-right: 10px;margin-left: 10px;">保养日期查找</label>
         <el-date-picker v-model="valuea" type="date" placeholder="选择日期">
         </el-date-picker>

         <el-table
             :row-class-name="tableRowClassName"
             :data="
      tableData2
    "
             style="width: 100%;margin-top: 10px"
         >
           <el-table-column label="客户名称" width="100" prop="name"/>
           <el-table-column label="手机号" width="150" prop="phone"/>
           <el-table-column label="车牌号" width="150"  prop="date"/>
           <el-table-column label="客户生日" width="150"  prop="birth"/>
           <el-table-column label="客户备注"  prop="beiZhu"/>
           <el-table-column label="车辆备注"  prop="beiZhu"/>
           <el-table-column label="操作"   >
             <template #default="scope">
               <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">查看详细信息</el-button>
               <el-tooltip class="item" effect="dark" content="如果已经进行过回访请点击此按钮" placement="top">
                 <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">已回访</el-button>
               </el-tooltip>
               <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             </template>
           </el-table-column>
         </el-table>
         <el-pagination style="margin: 10px auto;text-align: center" background layout="prev, pager, next" :total="1000"></el-pagination>

       </el-tab-pane>
     </el-tabs>
     </div>
 </div>
</template>

<script>
export default {
  name: "huiFangKeHu",
  data() {
    return {
      activeName: 'first',

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
      tableData2: [
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>