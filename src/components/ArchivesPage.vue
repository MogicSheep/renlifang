
<template>
<div class="ass">
  <el-header style="color:skyblue; background:white;contentcolor:skyblue; margin-left: 10px">
    <div @click="back">回退 | 档案中心</div>
    
  <div class="parent">
        <el-dropdown style="background: white;">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="margin-right: 20px">管理者姓名</span>
        
  </div>
      </el-header>
 

  <template>
  <!--单位->管控单位
    户籍地->学位
    住址->论文
    已掌握落脚地->导师
    手机号->专业
  -->
  <el-container style="height: 600px; background: green; border: 20px solid #eee">
    <el-aside width="250px" style="background-color: white">
      <!--el-menu :default-openeds="['1', '3']"-->
      <el-main>
        <template style="height: 30px">姓名</template>
        <el-input v-model="input1" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
        <template>单位</template>
        <el-input v-model="input2" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
        <template>学位</template>
        <el-input v-model="input3" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
        <template>论文</template>
        <el-input v-model="input4" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
        <template>关系</template>
        <el-input v-model="input5" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
        <template>专业</template>
        <el-input v-model="input6" placeholder="请输入内容" style="width: 200px;border: 10px solid #eee; background-color: white; border-color: white;"></el-input>
      </el-main>
      <el-footer style="text-align: right; font-size: 12px; top: 1">
          <button @click="clear">重置</button>
          <button style="margin-left: 20px">查询</button>
      </el-footer>    
    <!--/el-menu-->
    </el-aside>
    
    <el-container style="background-color: grey; border-color: lightgrey">
      
      <el-main style="background-color: lightgrey;  border-color: lightgrey">
        <el-header style="top: 0;background-color: white;text-align:left">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-left: 15px;margin-right: 15px;"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><button @click="cNo" style="width: 200px; edge-color: white">序号</button></el-dropdown-item>
              <el-dropdown-item><button @click="cName" style="width: 200px">姓名</button></el-dropdown-item>
              <el-dropdown-item><button @click="cCharge" style="width: 200px">单位</button></el-dropdown-item>
              <el-dropdown-item><button @click="cAddr" style="width: 200px">学位</button></el-dropdown-item>
              <el-dropdown-item><button @click="cLiving" style="width: 200px">论文</button></el-dropdown-item>
              <el-dropdown-item><button @click="cTele" style="width: 200px">专业</button></el-dropdown-item>
              <el-dropdown-item><button @click="cIden" style="width: 200px">关系</button></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="right:0;">{{searchRange}}</span>
           <el-input v-model="input7" placeholder="请输入内容" style="width: 200px;margin-left:10px;background-color: white; border-color: white;">
             
           </el-input>
        </el-header>
        <el-body class = 'aa'>
        <el-table :data="tableData" header-cell-style="background-color: lightgrey">
          <el-table-column prop="No" label="序号" width="100">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="uint" label="单位">
          </el-table-column>
          <el-table-column prop="relation" label="关系">
          </el-table-column>
          <el-table-column prop="academicdegree" label="学位">
          </el-table-column>
          <el-table-column prop="address" label="论文">
          </el-table-column>
          <el-table-column prop="major" label="专业">
          </el-table-column>
          <!-- <el-table-column prop="behave" label="近期表现">
          </el-table-column> -->
          <el-table-column label="操作" width="250"><button style="border:none;background: orange; color: white; margin-left:10px;height: 20px">
            <i class="el-icon-star-on"></i>收藏</button>
          <button style="border:none;background: lightblue; color: white; margin-left:10px;height: 20px;">
            <i class="el-icon-document"></i>详情</button>
          <button style="border:none;background: lightgreen; color: white; margin-left:10px;height: 20px;">
            <i class="el-icon-remove-outline"></i>隐藏</button>
          </el-table-column>
        </el-table>
      </el-body>
      </el-main>
    </el-container>
    
  </el-container>
  
  </template>

</div>
</template>

<style lang="scss" scoped>
  .ass{
    background-color:grey;
    height: 10px;
    
  }
  .parent{
  z-index: 9999;   //保证界面里层级显示最高
  position: fixed;   //配合left:0;(居左)    top：0；（居顶部）其他类推
  right: 0;
  top:0;
  
 }
 .aa{
   border: 20px;
   width: 1200px;
   
   background: white;
 }
 .ss{
   height: 20px;
 }
  
</style>



<style>
  .el-header {
    background-color: lightgrey;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: lightgrey;
    color: #333;
    height: 750px;
    width: 200px;

  }
  
  
</style>

<script>

  
  export default {
    data() {
      const item = {
        No: '01',
        name: '周成虎',
        uint: '南京大学',
        relation: '学生：刘海江',
        academicdegree: '博士',
        address: '新冠肺炎疫情大数据分析与区域防控政策建议',
        major: '地图学与地理信息系统',
        // behave: '近期表现',
        operation:'',
        
      };
      //shearchRange: '全部字段'
      return {
        searchRange: '全部字段',
        tableData: Array(50).fill(item),
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        defaultHeight: {
          height: ""
        },
      }
    },
    
    
    
    methods: {
      cNo() {
        this.searchRange = '序号'
      },
      cName() {
        this.searchRange = '姓名'
      },
      cCharge() {
        this.searchRange = '单位'
      },
      cAddr() {
        this.searchRange = '学位'
      },
      cTele(){
        this.searchRange = '专业'
      },
      cLiving() {
        this.searchRange = '论文'
      },
      cIden() {
        this.searchRange = '关系'
      },
      clear() {
        this.input1 = '';
        this.input2 = '';
        this.input3 = '';
        this.input4 = '';
        this.input5 = '';
        this.input6 = '';
      },
      back(){
        this.$router.go(-1);
      },
      getHeight() {
      this.defaultHeight.height = window.innerHeight - 90 + "px";
    },
  
    created() {
    //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
      window.addEventListener("resize", this.getHeight);
     this.getHeight();
    }
    }
  }
  
</script>

