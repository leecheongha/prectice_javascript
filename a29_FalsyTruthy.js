/*
    조건문 : Conditional Statements 에서

    거짓(Falsy) 으로 평가될때-
        false, 0, '', null, undefined, NaN   <-- 'Falsy 한 값'이라 한다

    참(Truthy) 으로 평가될때
        true, 37, 'Mark', {}, [], Infinity   <-- 'Truthy 한 값' 이라 한다
        0이 아닌 값들이나 글자가 하나라도 있거나 비어있는 리스트나 오브젝트는 참이다. (파이썬에선는 비어있는 리스트나 오브젝트는 거짓으로 나온다. )

    https://developer.mozilla.org/ko/docs/Glossary/Truthy
    https://developer.mozilla.org/ko/docs/Glossary/Falsy

*/

//Truthy, Falsy 판정 하는법 - if문이나 삼항 연산자나 !연산자로도 가능하다.
function print(data){
    if(data) 
        console.log(data, '-- Truthy 판정');
    else
        console.log(data, '-- Falsy 판정');
}

print(false);
print(0);
print('');
print(null);
print(undefined);
print(NaN);

print(true);
print(37);
print(-37);
print('Mark');
print({a: 10, b: 20});
print(' '); //공백이 있기 때문에 true이다.
print([10, 20, 30]);
print([]);
print({});
print(Infinity);


// Truthy, Falsy 판정을 위와 같이 if 를 사용할수도 있지만 삼항 연산자나 !연산자로도 가능하다.

let value = {a: 1};
// 1. 삼항연산자 사용
let truthy = value ? true : false;
console.log(truthy);

// 2. ! 연산자 사용
console.log(value);
console.log(!value); // false  자바스크립트는 모든 타입에 not 을 붙일 수 있다. 자주 보는 것들 중 하나이다.
console.log(!!value); //true


console.log("\n[프로그램 종료]", '\n'.repeat(20));












