/**
 * FS : node.js에서 파일에 데이터를 쓰고 읽어 올 수 있는 기능
 * writeFile : 비동기식으로 파일에 데이터를 씀. 없으면 새 파일에 만듦.
 * 			있으면 기존 데이터 삭제 후 씀(덮어쓰기)
 * appendFile: 〃. 기존 데이터 뒤에 추가로 씀
 * readFile: 비동기식으로 파일 데이터 읽어옴.
 *
 * writeFileSync: 동기식으로 파일에 데이터를 씀. 없으면 새 파일에 만듦.
 * 			있으면 기존 데이터 삭제 후 씀(덮어쓰기)
 * appendFileSync: 〃. 기존 데이터 뒤에 추가로 씀
 *
 * 여러 파일에 같은 작업을 시킬 경우 빨리 끝낼 수 있어 비동기식이 좋지만
 * 한 파일에 작업을 할 경우 동기식이 좋다.
 */

var fs = require("fs");

/*
// writeFile(파일명, 내용, 콜백함수)
fs.writeFile("data1.txt", "Hello node.js", function(error) {
  console.log("비 동기식 저장1");
});

fs.writeFile("data2.txt", "Hello node.js", function(error) {
  console.log("비 동기식 저장2");
});
*/

/*
// appendFile(파일명, 추가할 내용, 콜백함수)
fs.appendFile("data1.txt", "안녕하세요", function(err) {
  console.log("비 동기식 추가 1");
});
fs.appendFile("data2.txt", "반갑습니다", function(err) {
  console.log("비 동기식 추가 2");
});

// readFile(읽을 파일, function(err, 읽어온 데이터){})
// 버퍼에 담아 읽어오기 때문에 toString() 해줘야 문자 그대로 나옴
fs.readFile("data1.txt", function(err, data) {
  console.log("data1 : ", data.toString());
});
fs.readFile("data2.txt", function(err, data) {
  console.log("data2 : ", data.toString());
});
*/

/*
// 동기식이기 때문에 콜백함수가 필요하지 않음.
fs.writeFileSync("data3.txt", "Hello node.js");
console.log("동기식 저장1");

fs.writeFileSync("data4.txt", "Hello node.js");
console.log("동기식 저장2");
*/

fs.appendFileSync("data3.txt", "안녕하세요");
console.log("파일 내용 추가 1");

fs.appendFileSync("data4.txt", "반갑습니다");
console.log("파일 내용 추가 2");

// 콜백함수로 내용을 받는것이 아닌 변수에 담아 읽음
var data3 = fs.readFileSync("data3.txt");
console.log("data3 :", data3.toString());

var data4 = fs.readFileSync("data4.txt");
console.log("data4 :", data4.toString());
