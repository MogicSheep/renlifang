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
            <header class="header">
                <h3>人立方</h3>
            </header>
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
                                    <div class="fill-h" id="p1"></div>
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
                                        <Demo style="width:675px;height:600px"></Demo>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="coll3">
                            <div class="xpanel-wrapper xpanel-wrapper-3">
                                <div class="xpanel">
                                    <div class="fill-h" id="p4">
                                        <!-- 搜索框 -->
                                        <br><br><br><br>
                                        <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear='getGoodsList'>
                                            <el-button slot="append" icon="el-icon-search" @click="getGoodsList">搜索</el-button>
                                        </el-input>

                                        <dv-digital-flop :config="config4" style="width:200px;height:50px;" />
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
import demo from '@/components/demo.vue'
export default {
    name:"focus",
    header: ['列1', '列2', '列3'],
    methods:{
    drawChart(){
        let myChart = this.$echarts.init(document.getElementById("table1"));
        let option = {
        backgroundColor: "#0f375f",
        legend: {
            orient: 'vertical',
            top: "center",
            right: "5%",
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7'],
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
            name: '半径模式',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
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
                length2: 20,
                smooth: true
            },
            data: [{
                    value: 1,
                    name: 'rose1',
                    itemStyle: {
                        color: "rgba(50,123,250,0.7)",
                        borderColor: "rgba(50,123,250,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 2,
                    name: 'rose2',
                    itemStyle: {
                        color: "rgba(244,201,7,0.7)",
                        borderColor: "rgba(244,201,7,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 3,
                    name: 'rose3',
                    itemStyle: {
                        color: "rgba(23,216,161,0.7)",
                        borderColor: "rgba(23,216,161,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 4,
                    name: 'rose4',
                    itemStyle: {
                        color: "rgba(122,60,235,0.7)",
                        borderColor: "rgba(122,60,235,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 5,
                    name: 'rose5',
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
    },
    mounted() {
        this.drawChart();
    },
    data()
    {
        return {
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
                    ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
                    ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
                    ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
                    ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
                    ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
                    ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
                    ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
                    ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
                    ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
                    ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
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
    },
    components: {
        'Demo': demo
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
        font-size:24px;
        color:#5dc2fe;
    }
    .wrapper {position:absolute;top:80px;bottom:0;left:0;right:0;min-height:555px;box-sizing:border-box;}
    .container-fluid {height:100%;min-height:100%;}
    .row {margin-left:10px;margin-right:10px;}
    .row>div {padding-left:7px;padding-right:8px;}
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