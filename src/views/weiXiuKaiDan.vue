<template>
  <div class>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 工单中心
        </el-breadcrumb-item>
        <el-breadcrumb-item>维修开单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <h2>客户信息</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item label="手机号" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="生日" required>
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="客户备注" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <!-- <el-form-item label="活动区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>-->
      </el-form>

      <h2>车辆信息</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item label="车牌号" prop="name">
          <el-input
            placeholder="车牌后五位"
            v-model="input3"
            style="width:200px"
            class="input-with-select"
          >
            <template v-slot:prepend>
              <el-select v-model="select" placeholder="陕A" style="width:70px">
                <el-option label="陕B" value="1"></el-option>
                <el-option label="陕C" value="2"></el-option>
                <el-option label="陕D" value="3"></el-option>
              </el-select>
            </template>
            <!-- <template v-slot:append>
              <el-button icon="el-icon-search"></el-button>
            </template>-->
          </el-input>
        </el-form-item>
        <el-form-item label="VIN码" prop="name">
          <el-input placeholder="输入完毕点击放大镜查询" v-model="input3" class="input-with-select">
            <template v-slot:append>
              <el-button icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <br />
        <el-form-item label="目前里程" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="下次保养里程" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="下次保养日期" required>
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <br />

        <el-form-item label="品牌" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="生产商" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="车代" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="车型" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="制造日期" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="变速器" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="发动机" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="功率" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="排量" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="燃料" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="车身" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="后制动" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="驻车" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="驱动" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="车辆备注" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
      </el-form>

      <h2>保险信息</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        :inline="true"
      >
        <el-form-item label="保险公司" prop="name">
          <el-select v-model="select" placeholder="保险公司" style="width:200px">
            <el-option label="平安" value="1"></el-option>
            <el-option label="惠普" value="2"></el-option>
            <el-option label="人寿" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年审日期" prop="name">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="啊啊啊"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="下次保险日期" required>
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <br />

        <el-form-item label="强险单号" prop="name">
          <el-input v-model="ruleForm.name" placeholder="sadas"></el-input>
        </el-form-item>
        <el-form-item label="强险到期" prop="name">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="啊啊啊"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="商业险单号" required>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商业险到期" prop="name">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="啊啊啊"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
      </el-form>

      <h2>服务项目</h2>
      <div class="fuWuMenu">
        <el-button size="small" type="primary" @click="dialogVisible = true">选择服务项目</el-button>
        <el-button size="small" type="primary">新增服务项目</el-button>
      </div>
      <el-table :data="tableData" border show-summary style="width: 100%;marginTop:25px">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="amount1" width="100" label="金额/元"></el-table-column>
        <el-table-column prop="amount2" width="100" label="优惠/元"></el-table-column>
        <el-table-column prop="amount2" width="100" label="应收/元"></el-table-column>
        <el-table-column prop="amount3" width="150" label="施工人员"></el-table-column>
        <el-table-column label="操作" width="100">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </el-table-column>
      </el-table>

      <!-- 项目选择弹出窗口 -->
      <el-dialog title="提示" v-model="dialogVisible" width="80%">
        <div class="search">
          <el-input class="searchMargin" placeholder="项目名称"></el-input>
          <el-button type="primary" size="mini">查询</el-button>
        </div>

        <el-table :data="tableData" border show-summary style="width: 100%;marginTop:25px">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="项目名称"></el-table-column>
          <el-table-column prop="amount1" width="100" label="金额/元"></el-table-column>
          <el-table-column prop="amount2" width="100" label="优惠/元"></el-table-column>
          <el-table-column prop="amount2" width="100" label="应收/元"></el-table-column>
          <el-table-column prop="amount3" width="150" label="施工人员"></el-table-column>
          <el-table-column label="操作" width="100">
            <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)"
              plain
            >选择</el-button>
          </el-table-column>
        </el-table>

        <template v-slot:footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: "更换机油",
          amount1: "1",
          amount2: "30",
          amount3: "马帅帅"
        },
        {
          name: "王小虎",
          amount1: "2",
          amount2: "4.43",
          amount3: 12
        },
        {
          name: "王小虎",
          amount1: "10",
          amount2: "1.9",
          amount3: 9
        },
        {
          name: "王小虎",
          amount1: "1",
          amount2: "2.2",
          amount3: 17
        },
        {
          name: "王小虎",
          amount1: "12",
          amount2: "4.1",
          amount3: 15
        }
      ],
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        input1: "",
        input2: "",
        input3: "",
        select: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },

      message: "first",
      showHeader: false,
      unread: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2018-04-19 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        }
      ],
      read: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ],
      recycle: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleRead(index) {
      const item = this.unread.splice(index, 1);
      console.log(item);
      this.read = item.concat(this.read);
    },
    handleDel(index) {
      const item = this.read.splice(index, 1);
      this.recycle = item.concat(this.recycle);
    },
    handleRestore(index) {
      const item = this.recycle.splice(index, 1);
      this.read = item.concat(this.read);
    },

    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  },
  computed: {
    unreadNum() {
      return this.unread.length;
    }
  }
};
</script>

<style>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
h2 {
  margin-bottom: 20px;
}

.search {
  display: flex;
  width: 50%;
}
.searchMargin {
  margin-right: 20px;
}
</style>

