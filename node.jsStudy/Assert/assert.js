/**
 * Assert 모듈
- 코드 동작 전 검사를 하는 모듈이다.
  결과값이 0이거나 false인 경우 오류를 발생시킨다.
- equal : 값이 다르면 오류발생.
- strictEqual : 값, 타입이 다르면 오류발생.
- notEqual : 값이 같으면 오류발생.
- notStrictEqual : 값, 타입이 같으면 오류 발생.
 */

var assert = require("assert");

var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = '10';

assert(v1 < v3);
console.log("v1은 v3 보다 작습니다.");

// 수식의 값이 0이거나 false인 경우 오류가 발생한다.
//assert(v1 == v3);
//console.log("v1은 v3과 같습니다.");

//assert(v1 - v2);
//console.log("v1 - v2는 0입니다.");

assert(v1 == v2);
console.log("v1과 v2는 같습니다.");

assert(v1 - v3);
console.log("v1 - v3은 0이 아닙니다.");

assert.equal(v1, v2);
console.log("v1과 v2는 같습니다");

//assert.equal(v1, v3);
//console.log("v1과 v3는 같지않습니다.");

assert.equal(v1, v4);
console.log("v1과 v4는 같습니다.");

//assert.strictEqual(v1, v4);
//console.log('v1과 v4는 타입이 다릅니다.')

//assert.notEqual(v1,v2);
//console.log('v1과 v2는 다릅니다.');

assert.notEqual(v1, v3);
console.log('v1과 v3는 같지않습니다.');

//assert.notEqual(v1,v4);
//console.log('v1과 v4는 타입이 같지않습니다.');

assert.notStrictEqual(v1,v4);
console.log('v1과 v4는 타입이 같지않습니다.');

var obj1 = {
	a1 : 10,
	a2 : 20
};

var obj2 = {
	a1 : 10,
	a2 : 20
};

var obj3 = {
	a1 : 10,
	a2 : 30
};

var obj4 = {
	a1 : 10,
	a2 : '20'
};

assert.deepEqual(obj1, obj2);
console.log('서로 같은 객체입니다.');

//assert.deepEqual(obj1, obj3);
//console.log('서로 다른 객체입니다.');

assert.deepEqual(obj1, obj4);
console.log('값이 같은 객체입니다.');

//assert.deepStrictEqual(obj1, obj4);
//console.log('타입이 다른 객체입니다.');

//assert.notDeepEqual(obj1, obj2);
//console.log('obj1 과 obj2는 다릅니다.');

assert.notDeepEqual(obj1, obj3);
console.log('obj1과 obj3은 다릅니다.');

//assert.notDeepEqual(obj1, obj4);
//console.log('obj1과 obj4는 타입이 다릅니다.');

assert.notDeepStrictEqual(obj1, obj4);
console.log('타입이 같지 않습니다.');
