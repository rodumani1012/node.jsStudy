/**
 * Global : 모듈 생성 없이 사용할 수 있는 것들을 가지고 있는 모듈.
 * 프로그램의 시작과 동시에 생성되어 어디서든 사용 가능하다.(대표적으로 Buffer 모듈)
 * Buffer : 메모리를 동적할당 할 수 있는 모듈
 *
 * __dirname : 현재 실행중인 파일 경로(위치)
 * __filename : 현재 실행중인 파일 경로 + 파일명
 *
 * setImmediate : 하나의 작업(파일에 있는 모든 내용)이 끝나면 동작할 코드를 등록한다.
 * clearImmediate : 등록된 immediate 를 제거함.
 *
 * setInterval : 주어진 함수를 주어진 시간마다 계속 호출함.
 * clearInterval : 등록된 Interval을 제거한다.
 *
 * setTimeout : 주어진 함수를 주어진 시간 후에 한번만 호출한다.
 * clearTimeout : 등록된 Timeout을 제거한다.
 *
 * console : 화면 출력을 위한 객체.
 * exports : 개발자가 모듈을 만들 때 사용하는 객체.
 * require : 모듈 객체를 만드는 함수이다.
 */

console.log("__dirname : ", __dirname);
console.log("__filename : ", __filename);
/*
console.log("node.js 코드 입니다.");
//끝나고 작동할 코드.
setImmediate(function() {
  console.log("immediate 동작 1");
});

console.log("node.js 코드 입니다.");
// 변수에 담아서 활용할 수 있다.
var a1 = setImmediate(function() {
  console.log("immediate 동작 2");
});

console.log("node.js 코드 입니다.");

// 변수에 담긴 immediate를 제거하여 실행되지 않도록 함.
clearImmediate(a1);
*/
/*
var a1 = 0;
var a2 = setInterval(function() {
  console.log("interval 동작");
  a1++;
  console.log("a1 : ", a1);
  if (a1 >= 5) {
    clearInterval(a2);
  }
}, 1000);
*/

var a1 = setTimeout(function() {
  console.log("Timeout 동작");
}, 1000);

// 1초가 되기전에 취소하였으므로 "Timeout 동작"이 출력되지 않음.
clearTimeout(a1);

console.log("작업이 모두 완료되었습니다.");
