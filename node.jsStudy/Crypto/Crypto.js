/**
 * Crypto
 * - 데이터 암호화 기능을 제공하는 모듈.
 * - getCiphers : 지원하는 암호화 알고리즘 종류를 반환함.
 * - createCipher : 암호화용 객체 생성
 * - createDecipher : 복호화용 객체 생성
 * - update : 데이터를 암호화 하거나 복호화 함.
 * - final : 암호화된 데이터에 마지막 종료 블럭을 추가함.
 */

var crypto = require('crypto');

var ciphers = crypto.getCiphers();

for(var x of ciphers) {
    console.log(x);
}

var key = 'test key';
var data = '암호화 할 데이터';

//암호화
// utf-8 양식의 데이터를 aes-256-cbc알고리즘에 의해 base64비트 형태로 암호화하는 것.
var cipher = crypto.createCipher('aes-256-cbc', key);
var result = cipher.update(data, 'utf8', 'base64');
// 암호화된 문자열값 담기
result += cipher.final('base64');

console.log('암호화 된 문자열 :', result);

// 복호화
// base64형태의 문자열값을 utf8로 변환하겠다.
var decipher = crypto.createDecipher('aes-256-cbc', key);
var result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');

console.log('복호화 된 문자열 :', result2);

