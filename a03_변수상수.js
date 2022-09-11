/*
    변수 (variable)
        값을 담는 공간.  변수이름(variable name)을 부여해서 관리    
 
    변수는 사용하기 전에 먼저 '선언(declaration)' 해야 한다
   
     변수 선언 구문 방법 4가지:
        ● let 변수이름    ← let 으로 선언된 변수는 값 변경 가능
        ● const 변수이름  ← const 로 선언된 변수는 값 변경 불가. 이는 상수(constant) 라 한다. 반드시 선언시 초기화 해야 한다
        ● var 변수이름    ← var 키워드는 오늘날 JS 에서는 가급적 사용하지 않음.  값 변경 가능
        ● 걍 변수이름..
 
    변수에 값을 대입 (assign)
         =  대입연산자 (assignment operator) 사용
 
    변수의 초기화 (initialization)
        변수에 최초로 값(value) 을 대입 (assignment) 하는 것.
 
    타입 확인
        모든 값이나 변수는 타입(type) 과 값(value) 을 갖고 있다.
        typeof 연산자를 통해 타입 확인 가능.
 
    변수 이름
        변수 이름은 고유한 식별자 (identifier)로 작명해야 한다
        - 문자, 숫자, _, $ 사용 가능
        - 숫자로 시작하면 안된다
        - 대소문자 구분한다  (case sensitive)
        - 예약어 (reserved word), 키워드는 변수명으로 사용 불가
 
   
    가급적 코드에서 사용하는 모든 변수들은 코드의 상단에서 선언해두자.
*/  
 
let num1; //num1 이라는 이름의 변수를 선언
num1 = 20; //변수 num1에 숫자 20 값을 대입. 대입 연산자 사용
console.log('num1=', num1);

num1 = 30*2; //변수가 담고 있는 값은 변할 수 있다.
console.log('num1=', num1);

let num2; // 한번도 대입하지 않은 (초기화되지 않은 )변수는 undefined 값이다.
console.log('num2 = ', num2);

//데이터는 '값'과 '타입'으로 이루어져 있다.
//typeof 연산자 : 변수가 값의 차입을 확인
console.log('-'.repeat(20));
console.log('-'.repeat(20));
console.log(typeof 10);
console.log(typeof "10");
console.log(typeof "10", typeof (10)); // 함수처럼 사용해도 된다.

console.log('num1 =>', num1, typeof(num1));
console.log('num2 =>', num2, typeof(num2));

let a, b, c;
a=5;
b=6;
c=a+b;
console.log('a =',a,'b =',b,'c =',c);

// let 9monkeys; // 숫자로 시작하면 x
// let my name; //띄어쓰기 x

var k = 10;
console.log('k = ', k);
var k = 10;
console.log('k = ', k);

//키워드 없이 변수 선언 -- > global
//이는 delete를 사용하여 삭제 가능.
myValue = 200;
console.log('myValue =', myValue, typeof myValue);
delete myValue; //변수 삭제
// console.log('myValue =', myValue, typeof myValue);
