const fetch = require("fetch").fetchUrl;

fetch(
  "https://tiyu.baidu.com/api/match/LPL/live/date/2021-08-19/direction/after?from=self",
  (error, meta, body) => {
    console.log(error, "error"); // error为空 则请求成功
    console.log(meta, "meta"); // 返回一些请 response 参数
    let stringBody = body.toString(); // body 接口返回体数据为十六进制数据
    console.log(stringBody, "body"); // 通过toString()方法转化成可识别信息
  }
);
