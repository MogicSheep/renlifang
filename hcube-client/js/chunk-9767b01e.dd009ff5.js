(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9767b01e"],{2980:function(t,e,a){},"4e8b":function(t,e,a){"use strict";var s=a("2980"),l=a.n(s);l.a},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("dv-full-screen-container",[a("el-container",[a("el-header",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"title"},[t._v("一人一档")])]),a("el-col",{attrs:{span:20}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-s-home"}),t._v("首页")]),a("el-menu-item",{attrs:{index:"2"}},[t._v("电子档案 - admin")]),a("el-menu-item",{attrs:{index:"3"}},[t._v("电子档案 - user1")]),a("el-menu-item",{attrs:{index:"4"}},[t._v("电子档案 - user2")]),a("el-menu-item",{attrs:{index:"5"}},[t._v("电子档案 - user3")]),a("el-submenu",{staticStyle:{float:"right"},attrs:{index:"6"}},[a("template",{slot:"title"},[t._v("admin")]),a("el-menu-item",{attrs:{index:"1-1"}},[t._v("账号管理")]),a("el-menu-item",{attrs:{index:"1-2"}},[t._v("服务中心")]),a("el-menu-item",{attrs:{index:"1-3"}},[t._v("登出")])],2)],1)],1)],1)],1),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-row",{staticClass:"tac"},[a("el-col",{attrs:{span:24}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[a("router-link",{attrs:{to:"/"}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-location"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("系统首页")])])],1),a("router-link",{attrs:{to:"/ArchivesPage"}},[a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("档案中心")])])],1),a("router-link",{attrs:{to:"/FocusPage"}},[a("el-menu-item",{attrs:{index:"3"}},[a("i",{staticClass:"el-icon-video-camera"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("重点关注")])])],1),a("router-link",{attrs:{to:"/ManagePage"}},[a("el-menu-item",{attrs:{index:"4"}},[a("i",{staticClass:"el-icon-s-management"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("档案管理")])])],1),a("router-link",{attrs:{to:"/DrawPage"}},[a("el-menu-item",{attrs:{index:"5"}},[a("i",{staticClass:"el-icon-camera"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("人员画像")])])],1),a("router-link",{attrs:{to:"/PersonPage"}},[a("el-menu-item",{attrs:{index:"6"}},[a("i",{staticClass:"el-icon-user"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("人员轨迹")])])],1),a("router-link",{attrs:{to:"/SettingPage"}},[a("el-menu-item",{attrs:{index:"7"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("系统设置")])])],1)],1)],1)],1)],1),a("el-container",[a("el-main",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{height:"240px"}},t._l(3,(function(e){return a("el-carousel-item",{key:e},[a("h3",{staticClass:"small"},[t._v("管控情况")])])})),1)],1),a("br")]),a("el-col",{attrs:{span:24}},[a("el-row",{staticStyle:{"margin-left":"50px"}},[a("div",{staticStyle:{width:"600px",height:"400px",float:"left"},attrs:{id:"table1"}}),a("div",{staticStyle:{width:"400px",height:"400px",float:"left"},attrs:{id:"table2"}})])],1)],1),a("el-footer",[t._v("© Tju 2020")])],1)],1)],1)],1)],1)},l=[],i={methods:{drawChart:function(){var t=this.$echarts.init(document.getElementById("table2")),e=this.$echarts.init(document.getElementById("table1")),a={title:{text:"重点人占比",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",data:["人员类别1","人员类别2","人员类别3","人员类别4","人员类别5","人员类别6"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},saveAsImage:{show:!0}}},series:[{name:"重点人占比",type:"pie",radius:[20,110],center:["50%","50%"],roseType:"radius",label:{show:!1},emphasis:{label:{show:!0}},data:[{value:10,name:"人员类别1"},{value:5,name:"人员类别2"},{value:15,name:"人员类别3"},{value:25,name:"人员类别4"},{value:20,name:"人员类别5"},{value:35,name:"人员类别6"}]}]},s={title:{text:"管控单位人数图",left:"center"},dataset:{source:[["score","数量","product"],[15,15,"单位名称1"],[323,323,"单位名称2"],[103,103,"单位名称3"],[211,211,"单位名称4"],[66,66,"单位名称5"],[270,270,"单位名称6"]]},grid:{containLabel:!0},xAxis:{name:"数量"},yAxis:{type:"category"},visualMap:{orient:"horizontal",left:"center",min:0,max:350,text:["350","0"],dimension:0,inRange:{color:["#D7DA8B","#E15457"]}},toolbox:{show:!0,feature:{mark:{show:!0},magicType:{show:!0,type:["pie","funnel"]},saveAsImage:{show:!0}}},series:[{name:"管控单位人数图",type:"bar",encode:{x:"数量",y:"product"}}]};t.setOption(a),e.setOption(s)}},mounted:function(){this.drawChart()}},n=i,o=(a("4e8b"),a("2877")),r=Object(o["a"])(n,s,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-9767b01e.dd009ff5.js.map