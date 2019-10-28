/**
 * 라우팅 : 사용자의 요청에 따라 응답된 결과를 달리 전달하는 것(요청한 페이지에 따라 화면이 바뀌는 것)
 */

var express = require("express");
var app = express();
// 요청이 발생하면 app객체가 controller1.js에 만들어 둔 함수에 전달되고 호출이 됨.
var controller1 = require("./router/controller1")(app);
var controller2 = require("./router/controller2")(app);

/* 한 파일안에 라우팅 코드를 너무 많이 넣으면 유지보수가 어렵기 때문에
    controller1, controller2.js 를 만들어 깔끔하게 관리한다.

app.get("/", function(req, res) {
  res.send("ROOT");
});

app.get("/test1", function(req, res) {
  res.send("TEST1");
});

app.get("/test2", function(req, res) {
  res.send("TEST2");
});

app.get("/test3", function(req, res) {
  res.send("TEST3");
});
*/

var server = app.listen(2000, function(req, res) {
  console.log("서버 가동");
});
