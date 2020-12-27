<template>
    <div class="header">
        <h3>{{headTitle}}</h3>
    </div>
    <!-- <div class="header">
        <el-row>
            <el-col span="10">
                <br>
                <el-button type="primary" @click="addRoutes1">档案中心</el-button>
            </el-col>
            <el-col span="4">
                <h3>{{headTitle}}</h3>
            </el-col>
            <el-col span="10">
                <el-row>
                    <el-col span="7">
                        <h3>按钮2</h3>
                    </el-col>
                    <el-col span="10">
                        <br>
                        <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @clear='getGoodsList'>
                            <el-button slot="append" icon="el-icon-search" @click="getGoodsList">搜索</el-button>
                        </el-input>
                    </el-col>
                    <el-col span="7">
                        <h3>登录栏3</h3>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>  -->
</template>
<script>
export default {
    name: 'header',
  data () {
    return {
    
    }
  },
  props: ['headTitle'],
}
</script>
<style>
.header {
        margin:0 auto;
        width:100%;
        height:65px;
        max-width:1920px;
        background:url("../img/header.png") center no-repeat;
    }
</style>