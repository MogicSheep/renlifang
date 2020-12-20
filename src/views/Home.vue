<template>
  <div class="home">
    <dv-full-screen-container>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="4" >
              <div class='title'>一人一档</div>
            </el-col>

            <el-col :span="20" >
              <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
                <el-menu-item index="2">电子档案 - admin</el-menu-item>
                <el-menu-item index="3">电子档案 - user1</el-menu-item>
                <el-menu-item index="4">电子档案 - user2</el-menu-item>
                <el-menu-item index="5">电子档案 - user3</el-menu-item>
                <el-submenu index="6" style="float:right">
                  <template slot="title">admin</template>
                  <el-menu-item index="1-1">账号管理</el-menu-item>
                  <el-menu-item index="1-2">服务中心</el-menu-item>
                  <el-menu-item index="/login">登出</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-header>
        
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  
                  <router-link to="/">
                    <el-menu-item index="1">
                      <i class="el-icon-location"></i>
                      <span slot="title">系统首页</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/ArchivesPage">
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">档案中心</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/FocusPage">
                    <el-menu-item index="3">
                      <i class="el-icon-video-camera"></i>
                      <span slot="title">重点关注</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/ManagePage">
                    <el-menu-item index="4">
                      <i class="el-icon-s-management"></i>
                      <span slot="title">档案管理</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/DrawPage">
                    <el-menu-item index="5">
                      <i class="el-icon-camera"></i>
                      <span slot="title">人员画像</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/PersonPage">
                    <el-menu-item index="6">
                      <i class="el-icon-user"></i>
                      <span slot="title">人员轨迹</span>
                    </el-menu-item>
                  </router-link>

                  <router-link to="/SettingPage">
                    <el-menu-item index="7">
                      <i class="el-icon-setting"></i>
                      <span slot="title">系统设置</span>
                    </el-menu-item>
                  </router-link>

                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <!--
            四个图表
            1 2
            3 4
          -->
          <el-container>
            <el-main>
              <el-col :span="24">
                <div class="block">
                  <el-carousel height="240px">
                    <el-carousel-item v-for="item in 3" :key="item">
                      <h3 class="small">管控情况</h3>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <br>
              </el-col>
              <el-col :span="24">
                <el-row style="margin-left: 50px">
                  <div id="table1" style="width: 600px;height:400px;float:left;"></div>
                  <div id="table2" style="width: 400px;height:400px;float:left;"></div>
                </el-row>
              </el-col>
            </el-main>
            <el-footer >&copy; Tju 2020</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("table2"));
      let myChart2 = this.$echarts.init(document.getElementById("table1"));
      // 指定图表的配置项和数据
      let option = {
          title: {
              text: '重点人占比',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              left: 'center',
              top: 'bottom',
              data: ['人员类别1', '人员类别2', '人员类别3', '人员类别4', '人员类别5', '人员类别6']
          },
          toolbox: {
              show: true,
              feature: {
                  mark: {show: true},
                  dataView: {show: true, readOnly: false},
                  magicType: {
                      show: true,
                      type: ['pie', 'funnel']
                  },
                  saveAsImage: {show: true}
              }
          },
          series: [
              {
                  name: '重点人占比',
                  type: 'pie',
                  radius: [20, 110],
                  center: ['50%', '50%'],
                  roseType: 'radius',
                  label: {
                      show: false
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  },
                  data: [
                      {value: 10, name: '人员类别1'},
                      {value: 5, name: '人员类别2'},
                      {value: 15, name: '人员类别3'},
                      {value: 25, name: '人员类别4'},
                      {value: 20, name: '人员类别5'},
                      {value: 35, name: '人员类别6'}
                  ]
              }
          ]
      };
      let option2 = {
          title: {
              text: '管控单位人数图',
              left: 'center'
          },
            dataset: {
        source: [
            ['score', '数量', 'product'],
            [15, 15, '单位名称1'],
            [323, 323, '单位名称2'],
            [103, 103, '单位名称3'],
            [211, 211, '单位名称4'],
            [66, 66, '单位名称5'],
            [270, 270, '单位名称6'],
           ]
        },
        grid: {containLabel: true},
        xAxis: {name: '数量'},
        yAxis: {type: 'category'},
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 0,
            max: 350,
            text: ['350', '0'],
            // Map the score column to color
            dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
      toolbox: {
              show: true,
              feature: {
                  mark: {show: true},
                  magicType: {
                      show: true,
                      type: ['pie', 'funnel']
                  },
                  saveAsImage: {show: true}
              }
          },
        series: [
        {
            name: '管控单位人数图',
            type: 'bar',
            encode: {
                // Map the "amount" column to X axis.
                x: '数量',
                // Map the "product" column to Y axis
                y: 'product'
                }
            }
        ]
    };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart2.setOption(option2);
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>>


<style scope="this api replaced by slot-scope in 2.5.0+">
.home {
  height: 100%;
}

.title {
  background-color: #1ec198;
  width: 200px;
  text-align: center;
  color:white;
  padding-left: 30px;
}

.el-container {
  height: 100%;
}

.el-header {
  height: 60px;
  background-color: white;
  line-height: 60px;
  padding: 0!important;
}
.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

.el-header > span,
.el-header .el-dropdown {
  font-size: 18px;
}

.el-footer {
  background-color: #252d36;
  color: #ffc852;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
}

.el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>