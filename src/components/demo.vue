<template>
  <div>
    <div style="height:110px;padding-top:6px;padding-left: 30px;padding-right:30px;border-bottom: #efefef solid 1px;color: #555555;font-size: 12px;background-color: rgba(0,0,0,0);">
      <div style="">
        <div style="line-height: 20px;">节点筛选：</div>
        <el-radio-group v-model="checked_sex" size="mini" @change="doFilter">
          <el-radio-button label="">全部</el-radio-button>
          <el-radio-button label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button>
        </el-radio-group>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <el-radio-group v-model="checked_isgoodman" size="mini" style="margin-left:50px;" @change="doFilter">
          <el-radio-button label="">全部</el-radio-button>
          <el-radio-button :label="true">导师</el-radio-button>
          <el-radio-button :label="false">学生</el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <div style="line-height: 20px;">关系筛选：</div>
        <el-checkbox-group v-model="rel_checkList" @change="doFilter">
          <el-checkbox v-for="thisItem in all_rel_type" :key="thisItem" :label="thisItem" />
        </el-checkbox-group>
      </div>
    </div>
    <div style="margin-top:0px;width: calc(100% - 10px);height:calc(100vh - 250px);">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" />
    </div>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'SeeksRelationGraphDemo',
  components: { SeeksRelationGraph },
  data() {
    return {
      g_loading: true,
      demoname: '---',
      checked_sex: '',
      checked_isgoodman: '',
      rel_checkList: ['师生','合作作者', '作者单位', '支持基金', '学位', '导师类型'],
      all_rel_type: ['师生','合作作者', '作者单位', '支持基金', '学位', '导师类型'],
      graphOptions: {
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultLineShape: 1,
        'layouts': [
          {
            'label': '自动布局',
            'layoutName': 'force',
            'layoutClassName': 'seeks-layout-force'
          }
        ],
        defaultJunctionPoint: 'border'

        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  created() {
    //this.$router.go(0);
  },
  mounted() {
    this.setGraphData()
  },
  methods: {
    setGraphData() {
      var __graph_json_data = { 'rootId': 'N1', 'nodes': 
      [{ 'id': 'N1', 'text': '学生', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': false, 'sexType': '男' },
      'innerHTML': 
      '<div class="c-my-node" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=324943589,1694646028&fm=26&gp=0.jpg);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">学生1</div></div>' },
      { 'id': 'N3', 'text': '学生', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': false, 'sexType': '男' },
      'innerHTML': 
      '<div class="c-my-node" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=324943589,1694646028&fm=26&gp=0.jpg);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">学生2</div></div>' },
      { 'id': 'N4', 'text': '学校', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': false, 'sexType': 'null' },
      'innerHTML': 
      '<div class="c-my-node" style="background-image: url(https://www.sdust.edu.cn/images/logo.png);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">山东科技大学</div></div>' },
      { 'id': 'N5', 'text': '学校', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': false, 'sexType': 'null' },
      'innerHTML': 
      '<div class="c-my-node" style="background-image: url(http://www.igsnrr.cas.cn/images/gb2020-logo.png);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">中国科学院地理科学与资源研究所</div></div>' },
      { 'id': 'N6', 'text': '导师', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': false, 'sexType': 'null' },
      'innerHTML': 
      '<div class="c-my-node" style="background-image: url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=324943589,1694646028&fm=26&gp=0.jpg);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">刘海江</div></div>' },
      { 'id': 'N2', 'text': '导师', 'color': '#ec6941', 'borderColor': '#ff875e',
      'data': { 'isGoodMan': true, 'sexType': '男' }, 
      'innerHTML': '<div class="c-my-node" style="background-image: url(https://www.sdust.edu.cn/__local/A/F7/1F/7BFCC671B3241474D287FEAACDE_5C608556_262F1.jpg?e=.jpg);border:#ff875e solid 3px;"><div class="c-node-name" style="color:#ff875e">周成虎</div></div>' }],
        
      'links': [
        { 'from': 'N1', 'to': 'N2', 'text': '师生', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '师生' }},
        { 'from': 'N3', 'to': 'N2', 'text': '师生', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '师生' }},
        { 'from': 'N4', 'to': 'N2', 'text': '作者单位', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '作者单位' }},
        { 'from': 'N5', 'to': 'N2', 'text': '作者单位', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '作者单位' }},
        { 'from': 'N6', 'to': 'N2', 'text': '合作作者', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '合作作者' }},
        { 'from': 'N5', 'to': 'N6', 'text': '作者单位', 'color': '#d2c0a5', 'fontColor': '#d2c0a5', 'data': { 'type': '作者单位' }},
        ] }

      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    },
    back(){
        this.$router.go(-1);
      },
    doFilter() {
      var _all_nodes = this.$refs.seeksRelationGraph.getNodes()
      var _all_lines = this.$refs.seeksRelationGraph.getLines()
      _all_nodes.forEach(thisNode => {
        var _isHideThisLine = false
        if (this.checked_sex !== '') {
          if (thisNode.data['sexType'] !== this.checked_sex) {
            _isHideThisLine = true
          }
        }
        if (this.checked_isgoodman !== '') {
          if (thisNode.data['isGoodMan'] !== this.checked_isgoodman) {
            _isHideThisLine = true
          }
        }
        thisNode.opacity = _isHideThisLine ? 0.1 : 1
      })
      _all_lines.forEach(thisLine => {
        // 注意这里的line和json数据中link不一样，一条线（line）上可以附着多条关系(link),可以通过line.relations获取到这条线上所有的关系数据(link)
        var _isHideThisLine = true
        thisLine.relations.forEach(thisLink => {
          if (this.rel_checkList.indexOf(thisLink.data['type']) === -1) {
            thisLink.isHide = true
          } else {
            _isHideThisLine = false
            thisLink.isHide = false
          }
        })
        // thisNode.opacity = _isShowThisNode ? 1 : 0.1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .c-my-node{
    background-color: rgba(0,0,0,0);
    background-position: center center;
    background-size: 100%;
    border:#008c00 solid 2px;
    height:80px;
    width:80px;
    border-radius: 40px;
  }
  .c-node-name{
    width:160px;margin-left:-40px;text-align:center;margin-top:85px;
  }
</style>
