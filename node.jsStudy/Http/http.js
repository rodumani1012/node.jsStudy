/**
 * http : 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈.
 * 일반적인 웹서버와 동일하게 동작함.
 * http 모듈은 웹서버의 기능을 사용할 수 있는 모듈이다.
 * createServer : 웹 서버개체를 만든다.
 * listen : 웹 서버를 동작시킨다.
 * 클라이언트가 전달하는 파라미터는 url 모듈을 이용하면 코드로 받아낼 수 있다.
 */

var http = require("http");
// 파라미터를 분석하는 모듈
var url = require("url");

var server = http.createServer(function(req, res) {
  //응답 결과를 클라이언트에게 전달
  //   res.write("Hello World");

  // url모듈로 분석하여 q 변수에 담음
  var q = url.parse(req.url, true);
  console.log(q);

  // 헤더 정보 셋팅(기본값은 text/html)
  //   res.writeHead(200, { "content-type": "audio/mp3" });
  res.writeHead(200, { "content-type": "text/html" });

  // 요청된 url 값을 담음
  // console.log(req.url);

  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write("<meta charset='utf-8'/>");
  res.write("<head/>");

  // 요청된 url에 따라 분개
  switch (q.pathname) {
    case "/":
      res.write("<body><h1>root 입니다.</h1></body>");
      res.write("<a href='test1'>test1</a><br/>");
      res.write("<a href='test2'>test2</a><br/>");
      res.write("<a href='test1?data1=111'>파라미터 있는 test1</a><br/>");
      res.write("<a href='test2?data1=222'>파라미터 있는 test2</a><br/>");
      break;
    case "/test1":
      res.write("<body><h1>test1 입니다.</h1></body>");
      res.write("<h1>data1 :" + q.query.data1 + "<br/>");
      break;
    case "/test2":
      res.write("<body><h1>test2 입니다.</h1></body>");
      res.write("<h1>data1 :" + q.query.data1 + "<br/>");
      break;
  }

  res.write("</body>");
  res.write("</html>");

  res.end();
});

// listen(포트번호 아무거나)
server.listen(1234);
console.log("서버 가동");
