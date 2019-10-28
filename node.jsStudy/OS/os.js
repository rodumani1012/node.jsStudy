/**
 * OS모듈 : node.js가 실행되고 있는 서버 컴퓨터의 정보를 제공하는 모듈
 * arch : CPU 아키텍쳐(CPU의 밑바탕) 정보
 * cpus : CPU 정보
 * totalmem : 총 메모리 양을 반환
 * freemem : 여유 메모리 양을 반환
 * hostname : 컴퓨터 호스트의 이름 반환
 * networkInterfaces : 컴퓨터에 장착된 통신 장비 정보를 반환
 * platform : 실행 플랫폼의 정보를 반환
 * release : 버전 정보를 반환
 * temdir : 컴퓨터의 임시 폴더 경로를 반환
 * type : OS 이름을 반환
 * uptime : OS 동작 시간을 반환
 * userinfo : 사용자 정보를 반환
 */

var os = require("os");

console.log("CPU 아키텍처 : ", os.arch());
// 코어별로 정보가 나온다.
console.log("CPU 정보 -----------------------------------");
console.log(os.cpus());
console.log("총 메모리 양 : ", os.totalmem());
console.log("여유 메모리 : ", os.freemem());
console.log("호스트 명 :", os.hostname());
console.log("네트워크 인터페이스 ----------------------------------");
console.log(os.networkInterfaces());
console.log("실행 플랫폼 :", os.platform());
console.log("버전 : ", os.release());
console.log("임시폴더 :", os.tmpdir());
console.log("실행 OS 이름 :", os.type());
console.log("OS 동작 시간 : ", os.uptime(), "초");
console.log("사용자 정보 -------------------------------");
console.log(os.userInfo());
