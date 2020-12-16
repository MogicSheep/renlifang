/**
 * http基本配置
 */
//请求基本url，根据实际进行设置
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://124.70.5.177:8080/"////////////
    : "http://124.70.5.177:8080/";////////////
//图片请求基本url
export const IMAGE_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://114.116.23.43:9090/download/"
    : "http://114.116.23.43:9090/download/";

//浏览器下载路径
export const CHROME_DOWNLOAD_URL = IMAGE_BASE_URL + "collect/chrome/chrome.exe";
