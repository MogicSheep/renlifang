/**
 * 配置信息
 */

// const autoprefixer = require("autoprefixer");
// const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  publicPath: "/hcube-client/",
  outputDir: "hcube-client",
  // webpack配置
  configureWebpack: {
    // 关闭 webpack 的性能提示
    performance: {
      hints: false
    },
    //映射到源文件
    devtool: "source-map"
  },
  devServer: {
    //自动打开浏览器
    open: true,
    //端口
    port: 8080
  }
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         //自动添加不同浏览器支持的前缀
  //         autoprefixer(),
  //         // px转vw
  //         pxtoviewport({
  //           // 需要转换的单位，默认为"px"
  //           unitToConvert: "px",
  //           // 设计稿的视口宽度, 将根据视口做比例换算
  //           viewportWidth: 1920,
  //           viewportHeight: 1080,
  //           // 转化精度，转换后保留位数
  //           unitPrecision: 6,
  //           // 能转化为vw的属性列表
  //           propList: ["*"],
  //           // 希望使用的视口单位
  //           viewportUnit: "vw",
  //           // 字体使用的视口单位
  //           fontViewportUnit: "vw",
  //           // 需要忽略的CSS选择器 过滤掉.am-开头的class，不进行转换
  //           selectorBlackList: [".ignore-", ".maptalks-close"],
  //           // 最小的转换数值
  //           minPixelValue: 0,
  //           // 媒体查询里的单位是否需要转换单位
  //           mediaQuery: true,
  //           // 转换后是否添加备用单位
  //           replace: true,
  //           // 忽略文件目录
  //           // exclude: ["node_modules"],
  //           // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  //           landscape: false,
  //           // 横屏时使用的单位
  //           landscapeUnit: "vh",
  //           // 横屏时使用的视口宽度
  //           landscapeWidth: 1920
  //         })
  //       ]
  //     }
  //   }
  // }
};
