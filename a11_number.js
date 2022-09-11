/*
    Number 타입
    JavaScript 의 숫자타입은 Number 타입 '오직 한가지'뿐이다
    Number 는 소숫점이 있을수도(실수) / 없을수도(정수) 있다
    Number 는 항상 64bit floating point 데이터로 저장된다.
    Number의 정밀도(precision)
        - 정수는 15자리까지 정확도 유지
        - 소수점 이하 17자리 정확도 유지
        - 실수간의 연산은 언제나 100% 정확하지 않다 (정밀도 문제)
    Number가 가질 수 있는 가장 큰 값은 1.8E308
    
    일반적으로 리터럴(literal) 로 Number 생성
        ex) 176, 0b101, 013, 0x0A ...

    JavaScript 에선 Number 뿐 아니라 모든 데이터가 내부적으로 object 로 다루어지기 때문에
    property 나 method (함수) 사용이 가능하다.

    NaN (Not a Number) : Number 연산이 안되는 경우 NaN 이 결과값으로 나온다.
    Infinity : 무한대 값

    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

let num1, num2, num3;

num1=10;

num2=3.14;

console.log(num1);
console.log(num2);

num1 = 123e5; //123*10의 5승
num2 = 123e-5; //123*10의 마이너스 5승

console.log(num1);
console.log(num2);

// TODO

num1 = 999999999999999;
num2 = 99999999999999999;

console.log(num1);
console.log(num2);

//실수간의 연산은 100%정확하지 않다.

num1 = 0.2;
num2 = 0.1;

console.log(num1+num2==0.3); //false
console.log(`${num1} + ${num2} = ${num1 + num2}`);   0.30000000000000004
// 이렇게 비교연산 하면 안된다.

console.log(123 === 123.0); //true


// num1 = 100 / "Apple";
// num2 = 100 / "10"; 
// console.log(num1, num2);
// console.log(typeof(num1));
// console.log(isNaN(num1), isNaN(num2));

num1 = NaN;
num2 = Number.NaN;
console.log(num1, num2);
console.log(num1 + 5);
console.log(num1 + "5"); // Nan과 문자열의 산술연산을 문자열로 연결된다.
//숫자와 Nan하고의 연산 결과는 무조건 Nan이다.

console.log('-'.repeat(20))
console.log('[진법리터럴, toString]');
 
num1 = 0xFF;
console.log(num1);

/********************************** 
 * 진법 리터럴
 *  0x 로 시작 16진법(hexadecimal)
 *  0 으로 시작 8진법 (octal)
 *  0b 로 시작 2진법 (binary)
 */
//  console.log('-'.repeat(20))
//  console.log('[진법리터럴, toString]');
 
// TODO


//모든 object는 tostring을 갖고 있다.
num1 = 24;
let str = num1.toString();

console.log(num1, typeof(num1));
console.log(str, typeof(str));

//24.toString //숫자 리터럴에 메소드를 직접 붙이는건 불가능하다.
(24).toString();
(9.7).toString();

num1 = 76;
console.log(num1);
console.log(num1.toString(2)); //toString(n) n진법으로 변환해서 출력한다.
console.log(num1.toString(8));
console.log(num1.toString(16));




/*******************
 
 * 일반적으로 Number 는 숫자 literal 을 통해 생성되나,
 * object 로서 Number 를 생성할수 있다  (new 사용)  <-- 매우 비추함!  예측하지 못하는 동작과 성능 이슈
 *  
 */  
//  console.log('-'.repeat(20));
//  console.log('[Number() 로 생성하기]');


num1 = 123;
num2 = new Number(123); //비추한다. 예측하지 못한 동작을 할 수 있다.
num3 = new Number(123);
console.log(num1 + num2); 
console.log(typeof num1, typeof num2);// number object
console.log(num1 == num2); // true
console.log(num1 === num2); // false

console.log(num2 == num3);  //false 값도 안따진다. ★JS에선 object 끼리의 비교는 언제나 false!!
console.log(num2 === num3);  // false




/*********************************
 * Number 의 메소드(method) 들 
 */ 
//  console.log('-'.repeat(20));
//  console.log('[Number 의 메소드들]');
 

// toFixed(n)
//  소숫점 이하 n자리까지 표현한 '문자열' 결과  (이하 반올림)
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

num1 = Math.PI;
console.log(num1.toFixed(2));
console.log(num1.toFixed(3)); //3.142


// toPrecision(n)
//  Number 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.
//  n : 유효 자릿수

num1 = 123.456;
console.log(num1); //123.456
console.log(num1.toPrecision(4));

let pre = num1.toPrecision(4);

console.log(typeof pre);

num1 = 0.000123;
console.log(num1);
console.log(num1.toPrecision()); //0.000123
console.log(num1.toPrecision(5)); //0.00012300 숫자를 맞춰준다.


// toExponential() 메서드는 숫자를 지수 표기법으로 표기해 반환하고 문자열로 변환한다.
//  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential

// TODO

// toPrecision(n)
//  Number 객체를 지정된 정밀도로 나타내는 문자열을 반환한다.
//  n : 유효 자릿수
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision

// TODO

/****************************************
 * number로 변환하는 경우가 많으니 잘 알아두자
 * number 로 변환하는 방법 3가지 
 * 
 *  Number() '함수'
 *  parseInt()
 *  parseFloat()
 * 
 *  다양한 경우에서 사용자가 입력한 값은 문자열(string) 타입으로 입력된다
 * 이의 산술연산을 하거나 Number 메소드를 적용하려면 number로 변환해야 한다
 */
 console.log('-'.repeat(20));
 console.log('Number 변환하기');

 num1 = "3.142592"; //문자열
// console.log(num1.toFixed(2)); //TypeError난다. toFixed는 Number의 메소드이기 때문에 매개변수에 문자열을 사용해서 에러가 난다.
console.log(parseFloat(num1).toFixed(2)); //실수로 변환할때 parstFloat를 사용한다.

num2 = "hello";
console.log(parseFloat(num2)); //NaN 숫자로 변환할 수 없는 것은  parseFloat나 parseInt에 넣으면 NaN이 나온다. 그러나 에러는 안난다.

console.log(parseFloat(-10).toFixed(2));
console.log(parseInt("10, 20, 30")); // 정수 10 맨 앞의 토큰 문자가 변환된다.
//토큰 = 의미를 가진 문자열?

console.log(parseInt("55 years")); // int 55
console.log(parseInt("years 2002")); // NaN 왜 정수로 안변하지..?

//웹에서는 숫자로 변화하는 경우가 많이 생긴다.

// Number() '함수' 사용하여 Number 변환하기
console.log(Number("10")); //10
console.log(Number("        10")); //10 , 앞 뒤에 공백이 있어도  잘 변환된다.
console.log(Number("10.33")); // number는 실수도 변환 ok
console.log(Number("10   "));
console.log(Number("  10 "));
console.log(Number("10.33"));
console.log(Number("10 33"));
console.log(Number("10,33"));
console.log(Number("John"));

console.log(new Date()); //국제 표준시로 나온다. 한국시간 x
console.log(Number(new Date())); // 1970년 1월 1일 00:00:00.0000 이후에 경과된 시간 (ms)

console.log(Number(new Date("1970-01-02"))); //86400000

console.log(1/0); //Infinity
console.log(Number.POSITIVE_INFINITY);//Infinity
console.log(Number.NEGATIVE_INFINITY);//-Infinity

//숫자가 정수인지 아닌지 알고 싶을때
console.log(Number.isInteger(3)); //true
console.log(Number.isInteger(3.0)); // 3.0까지는 정수로 간주한다.
console.log(Number.isInteger(3)); //false






/***********************************  
 * Number 의 property
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties
 * 
 * Number 의 static 메소드
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#%EC%A0%95%EC%A0%81_%EB%A9%94%EC%86%8C%EB%93%9C
 */
//  console.log('-'.repeat(20));
//  console.log('Number 의 property, static 메소드');

// TODO




console.log("\n[프로그램 종료]", '\n'.repeat(20));






























