/*
    JS의 자료형(data type) : https://www.w3schools.com/js/js_datatypes.asp
	
    타입
    https://www.w3schools.com/js/js_typeof.asp

        값을 갖고 있는 5개 타입
            number : 숫자 타입
            string : 문자열 타입
            boolean : 논리 타입 (true, false)        
            object : 객체 타입
            function : 함수 타입

        6가지 object 타입
            Object : 객체
            Array : 배열
            Date
            String 
            Number
            Boolean

        값을 갖고 있지 않은 타입 2가지
            undefined : 타입이 지정되지 않음
            null : 데이터가 없는 object

        
    JS 는 dynamic type 을 지원하는 언어다.
*/

console.log('-'.repeat(20));
console.log('[number, string, undefined]');
let x;

// TODO

	
/*
 * 배열 (array)
 * 
 * [ .. ]  bracket 으로 감싸고
 * 그 안에 배열 원소(item) 들이 콤마로 나열됨. 
 */
// console.log('-'.repeat(20));
// console.log('arraqy (배열)');

// TODO

/*
 * 오브젝트, 객체 (object)
 * { .. }  curly brace 로 감싸고
 * name:value 쌍이 콤마로 구분되어 나열됨.
 * name:value 쌍 을 object 의 property 라고 한다.
 */
// console.log('-'.repeat(20))
// console.log(['object (오브젝트)]')

// TODO


console.log("\n[프로그램 종료]", '\n'.repeat(20));

const person = { firstName: "John", lastName: "Doe", age:50, eyeColor: "blue"};
console.log('person = ', person, typeof(person));

//property name 을 사용하여 value 접근
console.log(person['firstName']); //방법1
console.log(person.firstName); //방법2
console.log(person.address); // 없는 property name에 접근하면 undefined가 나온다.

//empty object

x= {}
console.log(x, typeof(x));

let lyric = `동해물과 백두산이
우리나라만세`;

console.log(lyric);
const myObject = {name: "John", age: 40};
console.log(myObject);
console.log(myObject);
console.log(`myObject = ${myObject}`);
console.log('myObject = ' + myObject);

//모든 object는 자신을 문자열로 표현하는 toString()메소드를 제공.
console.log(myObject.toString());
// 기본적으로 object 의 toString() 결과값은 "[object Object]" 
console.log(arr1, arr1.toString());

























