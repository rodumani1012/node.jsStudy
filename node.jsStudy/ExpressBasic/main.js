/**
 * express : 웹 애플리케이션 개발을 손쉽게 하도록 지원하는 모듈, express 모듈에서 제공하는 기능을 사용할 수 있는 객체를 반환하는 함수
 * get : get 방식으로 요청 됐을때 호출될 함수를 등록.
 * post : post 〃
 * listen : 서버를 가동시킴.
 */

var express = require("express");
var app = express();

app.get("/", function(req, res) {
  // 클라이언트에게 해당 문자를 반환.
  res.send("나는 반환될 문자");
});

app.get("/test", function(req, res) {
  res.send("TEST");
});

var server = app.listen(2000, function() {
  console.log("서버 가동");
});
