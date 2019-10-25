/**
 * Buffer는 따로 모듈을 생성할 필요 없다.
 * 기억공간을 동적으로 만들 때 사용하는 모듈.
 * 데이터를 1바이트씩 분리해 저장함.
 * 
 * alloc : 지정된 바이트 만큼 기억공간 생성(0으로 초기화 됨.)
 * allocUnsafe : 지정된 바이트 만큼 기억공간이 만들어지고 0으로
 *  초기화되지 않는다. alloc에 비해 속도가 빠름. 공간 생성후 바로
 *  값을 넣을 경우 사용하는 것이 좋다.
 * 
 * byteLength : 버퍼의 용량 반환
 * length : 버퍼의 용량 반환
 * from : 지정된 값을 관리하는 기억공간이 만들어진다.
 * compare : 두 기억공간을 비교하여 같으면 0, 첫번째가 크면 1, 작으면 -1 반환
 * concat : 배열안에 있는 모든 버퍼를 하나로 합쳐 새로운 버퍼를 생성
 * copy : 버퍼의 내용을 다른 버퍼에 복사함
 * entries : 버퍼의 내용을 [인덱스, 값] 형태의 객체로 변환하여 배열을 반환.
 * equals : 두 버퍼의 내용이 같은지 비교함.
 * fill : 버퍼에 지정된 값을 채워준다.
 * includes : 버퍼에 지정된 값이 있는지 확인함.
 * indexOf : 버퍼의 지정된 값의 위치를 반환.(값이 없으면 -1 반환)
 * lastIndexOf : 버퍼에 지정된 값의 위치를 뒤에서 부터 검사해서 반환.(값이 없으면 -1 반환)
 * isBuffer : 지정된 객체가 버퍼 객체인지 확인한다.
 * keys : 버퍼에 저장된 객체의 인덱스를 가져온다.
 * toString : 버퍼에 저장된 값을 문자열로 가져온다.
 *      toString([인코딩타입, [시작인덱스, [종료인덱스]]])
 */

var buf1 = Buffer.alloc(10);
console.log(buf1);

var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

var size1 = Buffer.byteLength(buf1);
console.log("size1 :", size1);
console.log("bytes :", buf1.length);

var buf3 = Buffer.from('abcd');
var buf4 = Buffer.from('안녕하세요');
console.log(buf3);
console.log(buf4);

var buf5 = Buffer.from('cccc');
var buf6 = Buffer.from('cccc');
var buf7 = Buffer.from('aaaa');
var buf8 = Buffer.from('dddd');

var v1 = Buffer.compare(buf5, buf6);
console.log('v1 :', v1);

var v2 = Buffer.compare(buf5, buf7);
console.log('v2 :', v2);

var v3 = Buffer.compare(buf5, buf8);
console.log('v3 :', v3);

var array1 = [buf5, buf6, buf7, buf8];
console.log(array1);
var buf9 = Buffer.concat(array1);
console.log(buf9);

var buf10 = Buffer.from('123456789');
var buf11 = Buffer.alloc(10);
buf10.copy(buf11, 0, 2, 5); // .copy(복사해서 담을 버퍼, 담을 버퍼의 시작점, 복사할 버퍼의 시작 인덱스, 복사할 버퍼의 마지막 인덱스);
console.log(buf11);

var array2 = buf5.entries();
for(var str of array2){
    console.log(str);
}

var buf11 = Buffer.from('abcd');
var buf12 = Buffer.from('abcd');
var buf13 = Buffer.from('zzzz');

var v4 = buf11.equals(buf12);
console.log('v4 :', v4);

var v5 = buf11.equals(buf13);
console.log('v5 :', v5);

var buf14 = Buffer.from('aaaaa');
console.log(buf14);
buf14.fill('c');
console.log(buf14.toString('ascii'));
buf14.fill('abc');
console.log(buf14.toString());

var buf15 = Buffer.from('Hello Node.js Node.js');
var v6 = buf15.includes('Node');
console.log('v6 :', v6);

var v7 = buf15.includes('node');
console.log('v7 :', v7);

var v8 = buf15.indexOf('Node');
console.log('v8 :', v8);

var v9 = buf15.indexOf('JavaScript');
console.log('v9 :', v9);

var v10 = buf15.lastIndexOf('Node');
console.log('v10 :', v10);

var v11 = Buffer.isBuffer(buf15);
console.log('v11 :', v11);

var obj1 = {
    a1 : 10
};
var v12 = Buffer.isBuffer(obj1);
console.log('v12 :', v12);

var array3 = buf15.keys();
for(var i of array3) {
    console.log(i);
}

var v13 = buf15.toString();
console.log('v13 :', v13);