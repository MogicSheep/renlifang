<template>
    <div class="focus">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
            <title>人立方</title>
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/app.css" />
	    </head>
	
        <body class="bg01">
            <!-- <header class="header">
                <h3>人立方</h3>
            </header> -->
            <!-- <em-header :headTitle = "pageTitle">
            </em-header> -->
            <div class="header">
                <el-row>
                    <el-col span="10">
                        <el-cow>
                            <el-col span="8" class="coll1">
                                <br>
                                <el-button type="primary" @click="addRoutes1" round>档案中心</el-button>
                            </el-col>
                            <el-col span="8" class="coll1">
                                <br>
                                <el-button type="primary" @click="addRoutes2" round>人员画像</el-button>
                            </el-col>
                            <el-col span="8" class="coll1">
                                <br>
                                <el-button type="primary" @click="addRoutes3" round>档案管理</el-button>
                            </el-col>
                        </el-cow>
                    </el-col>
                    <el-col span="4">
                        <h3>人立方</h3>
                    </el-col>
                    <el-col span="10">
                        <el-row>
                            <el-col span="12">
                                <br>
                                <!-- <el-button type="primary" @click="addRoutes4" round>人员轨迹</el-button> -->
                            </el-col>
                            <!-- <el-col span="12"> -->
                                <!-- <br> -->
                                
                                <!-- <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear='getGoodsList' keyup.enter.native="login"> -->
                                    <!-- <el-button slot="append" icon="el-icon-search" @click="getGoodsList">搜索</el-button> -->
                                <!-- </el-input> -->
                            <!-- </el-col> -->
                            <!-- <el-col span="12">
                                <h3>登录栏3</h3>
                            </el-col> -->
                        </el-row>
                    </el-col>
                </el-row>
            </div>
            
            <!--
                p1    p4
                   p3 p5
                p2    p6
            -->
            <div class="wrapper">
                <div class="container-fluid">
                    <div class="row fill-h">
                        <div class="coll1">
                            <div class="xpanel-wrapper xpanel-wrapper-2">
                                <div class="xpanel">
                                    <div class="fill-h" id="p1">
                                        <Demo2 style="width:400px;height:400px"></Demo2>
                                    </div>
                                </div>
                            </div>
                            <div class="xpanel-wrapper xpanel-wrapper-2">
                                <div class="xpanel">
                                    <div class="fill-h" id="p2">
                                        <dv-scroll-board :config="config2" style="width:310px;height:292px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="coll2">
                            <div class="xpanel-wrapper xpanel-wrapper-1">
                                <div class="xpanel">
                                    <div class="fill-h" id="p3">
                                        <Demo1 style="width:600px;height:600px"></Demo1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="coll3">
                            <div class="xpanel-wrapper xpanel-wrapper-3">
                                <div class="xpanel">
                                    <div class="fill-h" id="p4">
                                        <!-- <span>作者画像搜索</span> -->
                                        <el-row>
                                            <el-col :span="24">
                                                <el-autocomplete
                                                class="inline-input"
                                                v-model="form.searchname"
                                                :fetch-suggestions="querySearch"
                                                placeholder="请输入内容"
                                                :trigger-on-focus="false"
                                                @select="handleSelect"
                                                @keyup.enter.native="SearchTxt"
                                                ></el-autocomplete>
                                            </el-col>
                                        </el-row>
                                        <!-- 搜索框 -->
                                        <!-- <br><br><br><br>
                                        <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear='getGoodsList'>
                                            <el-button slot="append" icon="el-icon-search" @click="getGoodsList">搜索</el-button>
                                        </el-input>

                                        <dv-digital-flop :config="config4" style="width:200px;height:50px;" /> -->
                                    </div>
                                </div>
                            </div>
                            <div class="xpanel-wrapper xpanel-wrapper-3">
                                <div class="xpanel">
                                    <div class="fill-h" id="p5">
                                        <div id="table1" style="width: 325px;height:175px;float:left;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="xpanel-wrapper xpanel-wrapper-3">
                                <div class="xpanel">
                                    <div class="fill-h" id="p6">
                                        <dv-capsule-chart :config="config6" style="width:300px;height:200px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>>

<script>
// import EmHeader from "@/components/header.vue"
import demo1 from '@/components/demo1.vue'
import demo2 from '@/components/demo2.vue'
export default {
    name:"focus",
    header: ['列1', '列2', '列3'],
    methods:{
        SearchTxt() {
            if(this.form.searchname==='周成虎')this.$router.push("/demo");
        },
        addRoutes1() {
                this.$router.push('/ArchivesPage')
            },
    drawChart(){
        let myChart = this.$echarts.init(document.getElementById("table1"));
        let option = {
        backgroundColor: "#0f375f",
        legend: {
            orient: 'vertical',
            top: "center",
            right: "5%",
            data: ['老师', '研究生', '教授', '博导', '本科'],
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '人员数量占比',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['32%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                normal: {
                    position: 'outside',
                    fontSize: 16
                }
            },
            labelLine: {
                length: 1,
                length2: 10,
                smooth: true
            },
            data: [{
                    value: 77,
                    name: '老师',
                    itemStyle: {
                        color: "rgba(50,123,250,0.7)",
                        borderColor: "rgba(50,123,250,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 137,
                    name: '研究生',
                    itemStyle: {
                        color: "rgba(244,201,7,0.7)",
                        borderColor: "rgba(244,201,7,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 123,
                    name: '教授',
                    itemStyle: {
                        color: "rgba(23,216,161,0.7)",
                        borderColor: "rgba(23,216,161,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 55,
                    name: '博导',
                    itemStyle: {
                        color: "rgba(122,60,235,0.7)",
                        borderColor: "rgba(122,60,235,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 98,
                    name: '本科',
                    itemStyle: {
                        color: "rgba(15,197,243,0.7)",
                        borderColor: "rgba(15,197,243,1)",
                        borderWidth: 3
                    }
                }
            ]
            }]
        }//option
        myChart.setOption(option);
        },//drawchart
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
            {"value":"周成虎"},
            {"value":"许闲"},
            {"value":"许伟麟"},
            {"value":"许珺"},
            {"value":"许亚婷"},
            {"value":"许明星"},
            {"value":"许宪春"},
            {"value":"许风国"},
            {"value":"许耀桐"},
            {"value":"张庭伟"},
            {"value":"张夏恒"},
            {"value":"张航"},
            {"value":"张晓宇"},
            {"value":"张明源"},
            {"value":"张芬"},
            {"value":"张策"},
            {"value":"张青"},
            {"value":"张海冰"},
            {"value":"张蕾"},
            {"value":"张彩霞"},
            {"value":"郑健雄"},
            {"value":"郑蕊"},
            {"value":"郑鑫"},
            {"value":"郑晓南"},
            {"value":"郑方辉"},
            {"value":"李学保"},
            {"value":"李欣海"},
            {"value":"李娜"},
            {"value":"李鸿阶"},
            {"value":"李彦熙"},
            {"value":"李春江"},
            {"value":"李维安"},
            {"value":"李宗敏"},
            ];
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.drawChart();
        this.restaurants = this.loadAll();
    },
    data()
    {
        return {
            form: {
                searchname: ""
            },
            restaurants: [],
            state2: '',
            pageTitle:'人立方',
            queryInfo:{
                    query: '',
                    pagenum: 1,
                    pagesize: 10
                },
            "config6":{
                data:
                [
                    {
                        name: '老师',
                        value: 77
                    },
                    {
                        name: '研究生',
                        value: 137
                    },
                    {
                        name: '教授',
                        value: 123
                    },
                    {
                        name: '博导',
                        value: 55
                    },
                    {
                        name: '本科',
                        value: 98
                    },
                ],
                unit:'人数'
            },
            "config2":{
                data:[
                    ['<span style="color:#37a2da;">老师</span>', '77', '15%'],
                    ['研究生', '<span style="color:#32c5e9;">137</span>', '28%'],
                    ['教授', '123', '<span style="color:#67e0e3;">25%</span>'],
                    ['博导', '<span style="color:#9fe6b8;">55</span>', '11%'],
                    ['<span style="color:#ffdb5c;">本科</span>', '98', '21%'],
                    ['总人数', '<span style="color:#ff9f7f;">490</span>', '100%'],
                ],
                index: true,
                columnWidth: [50],
                align: ['center']
            }
        }
    },
    created()
    {
        this.getGoodsList();
        this.$router.go(0);
    },
    components: {
        'Demo1': demo1,
        'Demo2': demo2,
        // EmHeader
    }
}
</script>>
<style>
    @charset "utf-8";

    /********** Global **********/
    /*
    *常用背景色： #0b0f34 (6,64,102) (29,45,57) (7,33,58) (8,13,28) (15,43,36)
    */
    html, body {
        width:100%;
        height:100%;
        min-height:635px;
        font-family:"microsoft yahei", arial, sans-serif;
        background-color:#0f1c30;
        background-repeat:no-repeat;
        background-position:center;
        background-size:100% 100%;
        overflow-x:hidden;
        overflow-y:auto;
    }
    body.bg01 {background-image:url("../img/bg01.png");}
    body.bg02 {background-image:url("../img/bg02.png");}
    body.bg03 {background-image:url("../img/bg03.png");}
    body.bg04 {background-image:url("../img/bg04.png");}
    .header {
        margin:0 auto;
        width:100%;
        height:65px;
        max-width:1920px;
        background:url("../img/header.png") center no-repeat;
    }
    .header h3 {
        margin:0;
        padding:0;
        line-height:50px;
        text-align:center;
        font-size:36px;
        color:#5dc2fe;
    }
    .wrapper {position:absolute;top:80px;bottom:0;left:0;right:0;min-height:555px;box-sizing:border-box;}
    .container-fluid {height:100%;min-height:100%;}
    .row {margin-left:10px;margin-right:10px;}
    .row>div {padding-left:7px;padding-right:8px;}
    .coll{
        float:right;
        height: 100%;
        width: 33%;
    }
    .coll1{
        float:left;
        height: 100%;
        width: 25%;
    }
    .coll2{
        float:left;
        height: 100%;
        width: 50%;
    }
    .coll3{
        float:left;
        height: 100%;
        width: 25%;
    }
    .xpanel-wrapper {padding-bottom:15px;box-sizing:border-box;}
    .xpanel-wrapper-1 {height:100%;width: 100%;}
    .xpanel-wrapper-2 {height:50%; width: 100%;}
    .xpanel-wrapper-3 {height:33.33333%;width:100%;}
    .xpanel {
        padding:15px;
        height:100%;
        min-height:170px;
        background:url("../img/panel.png") center no-repeat;
        background-size:100% 100%;
        box-sizing:border-box;
    }

    /* tool */
    .fill-h {height:100%;min-height:100%;}
    .no-margin {margin:0 !important;}
    .no-padding {padding:0 !important;}

    /* scrollbar */
    ::-webkit-scrollbar {width:0;height:0;}
    ::-webkit-scrollbar-track {background-color:transparent;}
    ::-webkit-scrollbar-thumb {border-radius:5px;background-color:rgba(0, 0, 0, 0.3);}
</style>