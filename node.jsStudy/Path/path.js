/**
 * Path : 경로에 관련된 기능을 제공.
 * 경로에 대해 여러 작업이 필요할 경우 사용.
 *
 * basename() : 파일이름을 가져옴(파일 유무에 상관하지 않는다.)
 * dirname() : 파일이름을 제외한 경로 반환
 * extname() : 파일 확장자를 반환
 * isAbsolute() : 경로가 절대경로인지 아닌지 true, false로 반환
 * join() : 주어진 문자를 합쳐서 경로로 표현해 줌
 * nomalize() : 경로를 정리해서 다시 표현해 줌
 *
 */
var path = require("path");

/* \\는 윈도우식 경로. /는 unix식 경로 */
// 절대경로
var basename1 = path.basename("c:\\abc\\abc.txt");
console.log("basename1 :", basename1);
// 절대경로
var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 :", basename2);
// 상대 경로
var basename3 = path.basename("abc.txt");
console.log("basename3 :", basename3);

var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname 1 :", dirname1);

// 상대경로로 입력시 현재 경로인 ./ 이 반환됨.
var dirname2 = path.dirname("abc.txt");
console.log("dirname 2 :", dirname2);

// 파일 확장자 반환
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 :", extname1);

var extname2 = path.extname("abc.txt");
console.log("extname2 :", extname2);

// 경로가 절대경로인지 아닌지 판단함
var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");
var isAbsolute2 = path.isAbsolute("abc.txt");
var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute1 :", isAbsolute1);
console.log("isAbsolute2 :", isAbsolute2);
console.log("isAbsolute3 :", isAbsolute3);

var join = path.join("aaa", "bbb", "ccc.txt");
console.log("join :", join);

// C 밑에 aaa폴더 위(다시 C) 밑에 bbb 폴더 안에 ccc.txt
var normalize = path.normalize("c:/aaa/../bbb/ccc.txt");
console.log(normalize);
