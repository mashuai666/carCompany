<template>
  <div>
    <!-- <img src="../assets/img/img.jpg" class="user-avator" alt /> -->
    <el-row :gutter="20">
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-card shadow="hover" style="height:403px;">
          <template #header>
            <div class="clearfix">
              <span>今日工单进程</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
          </template>
          <el-tabs v-model="message">
            <el-tab-pane :label="`全部(${oneData.length})`" name="first">
              <el-table :data="oneData" :show-header="false" style="width: 100%">
                <el-table-column  width="100">
                  <template #default="scope">
                    <span class="message-title">{{scope.row.kehu}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="chepai" width="100"></el-table-column>
                <el-table-column prop="chexing" ></el-table-column>
                <el-table-column prop="date" width="180"></el-table-column>
                <el-table-column prop="tag" width="180"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="`待施工(${twoData.length})`" name="second">
              <el-table :data="twoData" :show-header="false" style="width: 100%">
                <el-table-column  width="100">
                  <template #default="scope">
                    <span class="message-title">{{scope.row.kehu}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="chepai" width="100"></el-table-column>
                <el-table-column prop="chexing" ></el-table-column>
                <el-table-column prop="date" width="180"></el-table-column>
                <el-table-column prop="tag" width="180"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="`施工中(${threeData.length})`" name="third">
              <el-table :data="threeData" :show-header="false" style="width: 100%">
                <el-table-column  width="100">
                  <template #default="scope">
                    <span class="message-title">{{scope.row.kehu}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="chepai" width="100"></el-table-column>
                <el-table-column prop="chexing" ></el-table-column>
                <el-table-column prop="date" width="180"></el-table-column>
                <el-table-column prop="tag" width="180"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane :label="`已完工(${fourData.length})`" name="four">
              <el-table :data="fourData" :show-header="false" style="width: 100%">
                <el-table-column  width="100">
                  <template #default="scope">
                    <span class="message-title">{{scope.row.kehu}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="chepai" width="100"></el-table-column>
                <el-table-column prop="chexing" ></el-table-column>
                <el-table-column prop="date" width="180"></el-table-column>
                <el-table-column prop="tag" width="180"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="kuaijieMenu">
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
            <div class="list">
              <img src="../assets/img/img.jpg" class="img" alt />
              <div>维修开单</div>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover" style="height:auto;margin-top:-25px">
          <template #header>
            <div class="clearfix">
              <span>通知公告(未读消息)</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
          </template>
          <div class="tongzhi">
            <div class="list">
              <div class="biaoti">通知公告标题</div>
              <div class="riqi">2019-09-20 15:03:00</div>
            </div>
            <div class="list">
              <div class="biaoti">通知公告标题</div>
              <div class="riqi">2019-09-20 15:03:00</div>
            </div>
            <div class="list">
              <div class="biaoti">通知公告标题</div>
              <div class="riqi">2019-09-20 15:03:00</div>
            </div>
            <div class="list">
              <div class="biaoti">通知公告标题</div>
              <div class="riqi">2019-09-20 15:03:00</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col>
    </el-row>-->
  </div>
</template>

<script>
// import Schart from "vue-schart";
export default {
  name: "dashboard",
  data() {
    return {
      message: "first",
      showHeader: false,
      // 全部订单
      oneData: [
        {
          kehu:'马先生',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        },
        {
            kehu:'马先生',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        }
      ],
       // 待施工
      twoData: [
        {
          kehu:'马先生',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        },
        {
            kehu:'呃呃呃',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        }
      ],
       // 施工中
      threeData: [
        {
          kehu:'嗡嗡嗡',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        },
        {
            kehu:'顶顶顶',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        }
      ],
       // 已完工
      fourData: [
        {
          kehu:'力王',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        },
        {
            kehu:'阿斯顿',
          chepai:'陕A45621',
          chexing:'科沃兹************',
          date: "2018-04-19 20:00:00",
          tag:'未施工'
        }
      ],
     
     
      options: {
        type: "bar",
        title: {
          text: "最近一周各品类销售图"
        },
        xRorate: 25,
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230]
          },
          {
            label: "百货",
            data: [164, 178, 190, 135, 160]
          },
          {
            label: "食品",
            data: [144, 198, 150, 235, 120]
          }
        ]
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类销售趋势图"
        },
        labels: ["6月", "7月", "8月", "9月", "10月"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230]
          },
          {
            label: "百货",
            data: [164, 178, 150, 135, 160]
          },
          {
            label: "食品",
            data: [74, 118, 200, 235, 90]
          }
        ]
      }
    };
  },
  components: {
    // Schart
  },
  computed: {
    role() {
      return this.name === "admin" ? "超级管理员" : "普通用户";
    },
    unreadNum() {
      return this.unread.length;
    }
  },

  methods: {
    changeDate() {
      const now = new Date().getTime();
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000);
        item.name = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
      });
    },
    // handleRead(index) {
    //   const item = this.unread.splice(index, 1);
    //   console.log(item);
    //   this.read = item.concat(this.read);
    // },
    // handleDel(index) {
    //   const item = this.read.splice(index, 1);
    //   this.recycle = item.concat(this.recycle);
    // },
    // handleRestore(index) {
    //   const item = this.recycle.splice(index, 1);
    //   this.read = item.concat(this.read);
    // }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
.kuaijieMenu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.kuaijieMenu .list {
  display: flex;
  width: 20%;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}
.kuaijieMenu .img {
  width: 50px;
  height: 50px;
  margin-top: 20px;
  border-radius: 50%;
}
.tongzhi .list {
  color: #409eff;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 14px;
}
</style>
