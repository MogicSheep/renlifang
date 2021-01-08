<template>
    <div>
      <el-container>
        <el-aside width="235px">
          <el-container>
          <el-header height="235px" class="header1">
            <div>
              <img src="https://www.sdust.edu.cn/__local/A/F7/1F/7BFCC671B3241474D287FEAACDE_5C608556_262F1.jpg?e=.jpg" align="middle" class="image">
            </div>
          </el-header>
          <el-main>
            <el-row>
                姓名： 周成虎
              </el-row>
              <el-row>
                性别： 男
              </el-row>
              <el-row>
                民族： 汉族
              </el-row>
              <el-row>
                专业： 地图学与地理信息系
              </el-row>
              <el-row>
                单位： 中国科学院地理研究所
              </el-row>
              <el-row>
                学位： 博导
              </el-row>
              <el-row>
                代表论文： 新冠肺炎疫情大数据分析与区域防控政策建议
              </el-row>
              <!-- <el-row>
                现住址 xxxxxx
              </el-row> -->
              <!-- <el-row>
                已掌握落脚地 xxxxxx
              </el-row> -->
              <!-- <el-row>
              <el-button align="middle" size="mini" type="color" icon="el-icon-star-off" circle>收藏</el-button>
              </el-row> -->
          </el-main>
        </el-container>
        </el-aside>
        <el-container>
          <el-header height="90px" class="header2">
            <el-row></el-row>
            <el-row gutter="50">
            <el-col span="6">
            <router-link to="/Home">
                <el-button icon="el-icon-s-home" circle>后台管理</el-button>
            </router-link>
            </el-col>
            <el-col span="6">
            <router-link to="/ArchivesPage">
                <el-button icon="el-icon-menu" circle>档案中心</el-button>
            </router-link>
            </el-col>
            <el-col span="6">
            <router-link to="/FocusPage">
                <el-button icon="el-icon-video-camera" circle>数据可视化平台</el-button>
            </router-link>
            </el-col>
            <!-- <el-col span="6">
            <router-link to="/PersonPage">
                <el-button icon="el-icon-user" circle>人员轨迹</el-button>
            </router-link>
            </el-col> -->
            <el-col span="6">
            <router-link to="/SettingPage">
                <el-button icon="el-icon-setting" circle>开发人员测试</el-button>
            </router-link>
            </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!-- <el-tab-pane label="活动轨迹" name="first"> -->
                <!-- <el-row >活动栏目
                  <el-button>近期活动轨迹</el-button>
                  <el-button>历史活动轨迹</el-button>
                </el-row>
                <el-row>轨迹分类
                  <el-button>车辆轨迹</el-button>
                  <el-button>火车飞机轨迹</el-button>
                  <el-button>医疗轨迹</el-button>
                  <el-button>经常活动地点</el-button>
                </el-row> -->
                <!-- <el-timeline>
                  <el-timeline-item
                    placement="top"
                    v-for="(activity, index) in activities1"
                    :key="index"
                    :timestamp="activity.timestamp">
                      {{activity.content}}
                  </el-timeline-item>
                </el-timeline> -->
              <!-- </el-tab-pane> -->
              <el-tab-pane label="所在地区" name="second">
                <el-row>所在地区</el-row>
                <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:1080px" @click="getClickInfo" :scroll-wheel-zoom='true'>
                  <div v-for="marker in list" :key="marker">
                    <bm-marker  :position="{lng: marker.lng, lat: marker.lat}" :title="marker.name" @click="infoWindowOpen(marker)">
                      <bm-info-window title="车辆信息" :position="{lng: marker.lng, lat: marker.lat}"   :show="marker.showFlag" @close="infoWindowClose(marker)" @open="infoWindowOpen(marker)">
                      
                      </bm-info-window>
                    </bm-marker>
                  </div>
                </baidu-map>
                <!-- <el-timeline>
                  <el-timeline-item
                  placement="top"
                  v-for="(activity, index) in activities2"
                  :key="index"
                  :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline> -->
              </el-tab-pane>
              <!-- <el-tab-pane label="通讯方式" name="third">
              <el-row >身份类别
                  <el-button>全部</el-button>
                  <el-button>在用号码</el-button>
                  <el-button>曾用号码</el-button>
                </el-row>
              <el-table
                  :data="tableData3"
                  height="500"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="type"
                    label="种类"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="电话号码"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="latest_time"
                    label="最近使用时间"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="latest_area"
                    label="最近使用地点"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="signed_time"
                    label="登记时间"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="feedback"
                    label="反馈">
                  </el-table-column>
                </el-table>
              <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[10,20,30,40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
              </div>
              </el-tab-pane> -->
              <!-- <el-tab-pane label="虚拟身份" name="fourth">
                <el-row >身份类别
                  <el-button>全部</el-button>
                  <el-button>QQ</el-button>
                  <el-button>微信</el-button>
                  <el-button>支付宝</el-button>
                  <el-button>银行卡</el-button>
                </el-row>
                <el-table
                  :data="tableData4"
                  height="500"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="type"
                    label="类别"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="账号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="latest_time"
                    label="最近活跃时间"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="days"
                    label="使用天数"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="signed_time"
                    label="登记时间"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="feedback"
                    label="反馈">
                  </el-table-column>
                </el-table>
                <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[10,20,30,40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
                </div>
              </el-tab-pane> -->
              <!-- <el-tab-pane label="关系分析" name="fifth">
                <el-table
                  :data="tableData2"
                  height="500"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="age"
                    label="年龄"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="手机号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="identical"
                    label="身份证号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="relation"
                    label="关系类别"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="latest_time"
                    label="最近联系时间">
                  </el-table-column>
                </el-table>
                <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[10,20,30,40]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
                </div>
              </el-tab-pane> -->
              <el-tab-pane label="发表著作" name="sixth">
                <!-- <el-row >显示类别
                  <el-button>全部</el-button>
                  <el-button>图片</el-button>
                  <el-button>视频</el-button>
                </el-row> -->
                <el-timeline>
                  <el-timeline-item
                  placement="top"
                  v-for="(activity, index) in activities1"
                  :key="index"
                  :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline>
              </el-tab-pane>
              <!-- <el-tab-pane label="话单数据" name="seventh">
                <el-row >话单类别
                  <el-button>通话时间最长</el-button>
                  <el-button>通话次数最多</el-button>
                  <el-button>特定时期通话</el-button>
                </el-row>
                <el-table
                  :data="tableData1"
                  height="500"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="number"
                    label="手机号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="所属人"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="通话时长"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="times"
                    label="通话次数"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="last_time"
                    label="最后通话时间"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="when"
                    label="通话时期">
                  </el-table-column>
                </el-table>
              </el-tab-pane> -->
              <!-- <el-tab-pane label="工作记录" name="eighth">
                <el-row>工作记录</el-row>
                <el-timeline>
                  <el-timeline-item
                  placement="top"
                  v-for="(activity, index) in activities3"
                  :key="index"
                  :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline>
              </el-tab-pane> -->
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>

    export default {
      methods: {
        infoWindowClose(marker) {
      marker.showFlag = false
    },
        infoWindowOpen(marker) {
              marker.showFlag = true
            },
        handleClick(tab, event) {
        console.log(tab, event);
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        },
        handler ({BMap, map}) {
          var point = new BMap.Point(117.31363378465176, 38.99800324935621)
          map.centerAndZoom(point, 13)
          var marker = new BMap.Marker(point) // 创建标注
          map.addOverlay(marker) // 将标注添加到地图中
          var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
          map.addOverlay(circle)
        },
        getClickInfo (e) {
          console.log(e.point.lng)
          console.log(e.point.lat)
          this.center.lng = e.point.lng
          this.center.lat = e.point.lat
        }
      },
      data() {
        return {
          center: {lng: 117.31363378465176, lat: 38.99800324935621},
          zoom: 13,
          activeName: 'first',
          currentPage4: 1,
          list: [
        {
          lng: 117.31363378465176,
          lat: 38.99800324935621,
          //showFlag:false //flag放在每一条数据里
        },
        {
          lng: 116.404,
          lat: 39.900,
          //showFlag:false
        }
      ],
          activities1: [{
            content: '《洪水灾害评估信息系统研究》',
            timestamp: '1993-06'
          }, {
            content: '《地理信息系统概要》',
            timestamp: '1993.08'
          }, {
            content: '《地理元胞自动机研究》',
            timestamp: '1999.12'
          },{
            content: '《遥感影像地学理解与分析》',
            timestamp: '1999.12'
          },{
            content: '《地理学的数学模型与应用 1934-1999年《地理学报》中的数学模型及公式汇编》',
            timestamp: '2000.10'
          },{
            content: '《集成地震目录数据库及其应用研究》',
            timestamp: '2005.09'
          },{
            content: '《海洋地理信息系统：原理、技术与应用》',
            timestamp: '2005.11'
            }],
          activities2:[{
            content:'《地理信息系统导论》',
            timestamp:'2006.01'
          },{
            content:'《地貌学辞典》',
            timestamp:'2006.12'
          },{
            content:'	《高分辨率遥感影像地学计算》',
            timestamp:'2009.01'
          }],
      //     tableData1: [{
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //   }, {
      //     number: '176xxxx7878',
      //     name: '王小虎',
      //     time: '1.5h',
      //     times: '15',
      //     last_time:'2020.02.15 12:00',
      //     when:'2020年8月第二次上访'
      //     }],
      //     tableData2: [{
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //   },
      //   {
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //   },
      //   {
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //   },
      //   {
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //   },
      //   {
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //   },
      //   {
      //     name: 'xxx',
      //     age: '30',
      //     number: '176xxxx7878',
      //     identical: 'xxxxxxxxxxxxxxxx',
      //     relation:'父子',
      //     latest_time:'2020.20.20'
      //     }],
      //     tableData3: [{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //   },{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //   },{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //   },{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //   },{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //   },{
      //     type: '在用号码',
      //     number: 'xxxxxxxxx',
      //     latest_time: '2020.02.15',
      //     latest_area: '天津市',
      //     signed_time: '2018.03.21',
      //     feedback: '反馈'
      //     }],
      //     tableData4: [{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     },{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     },{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     },{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     },{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     },{
      //       type: 'QQ',
      //       number: 'xxxxxxxxx',
      //       latest_time: '2020.02.15',
      //       days: '天津市',
      //       signed_time: '2020.03.21',
      //       feedback: '反馈'
      //     }],
           }
         }
    }
</script>

<style>
.el-button--color.is-active,
.el-button--color:active {
  background: #c2a12b;
  border-color: #cbba7d;
  color: #cbba7d;
}
.header1 {
  background-color:#ffffff;
}
.header2 {
  background-color: #ffffff;
  line-height: 5px;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: left;
  line-height: 25px;
}
.el-row {
  margin-bottom: 20px;
}
.image {
  width: 200px;
  height: 200px;
}
.map {
        width: 100%;
        height: 400px;
    }
</style>