/**
 * DNS : url의 ip가 뭔지 알려주는 역할.(알려주기 위해 dns 서버로 접속한다.)
 * 지정된 도메인에 대한 다양한 정보를 파악할 수 있다.
 * dns로부터 정보가 도착하면 function(err, address, family){}이 실행됨.
 * 받아오는데 실패하게 되면 undefined로 표시된다.
 * 정보가 도착하면 함수를 실행하기 때문에 결과의 순서가 일정하지 않다.
 */
var dns = require("dns");

// lookup(url, [family: 4 / family: 6], function(err, address, family){})
// 오류시 정보를 담는 객체(err), ip주소(address), IPV4인지 IPV6인지 판별(family).
dns.lookup("google.com", function(err, address, family) {
  console.log("IP 주소 : ", address);
  console.log("IP 버전 : ", family);
});

// 받아올 ip의 버전이 정해져 있다면 옵션으로 직접 써줄 수 있다.
var op1 = {
  family: 4
};
dns.lookup("google.com", op1, function(err, address, family) {
  console.log("IP 주소 v4 : ", address);
});

var op2 = {
  family: 6
};
dns.lookup("google.com", op2, function(err, address, family) {
  console.log("IP 주소 v6 : ", address);
});
