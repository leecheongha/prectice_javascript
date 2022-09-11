/*
    화살표 함수 Arrow function (ES6 도입)
    함수를 정의하는 또 다른 방법

    [구문]
        (param1, param2, …, paramN) => { statements }
        (param1, param2, …, paramN) => expression
        // 다음과 동일함:  => { return expression; }
    
    [공식]    
        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98

    ★ 화살표 함수는 this 가 바인딩(binding) 되지 않는다
      그래서, arrow function 은 생성자 함수로 사용 할수 없습니다.
      화살표 함수에서는 this를 사용하지 못한다.
*/
let add, sum;

add = function(a, b){
    return a + b;
}
console.log(add(10, 20));

// 화살표 함수로 바꾸면

add= (a,b) => {
    return a + b;
};

sum = add(1,2);
console.log(`sum = ${sum}`);

console.log(add);
console.log(add.toString());//[Function: add]
console.log(typeof add);

//매개변수가 하나면 괄호 생략이 가능하다.
const hello1 = name => {
    console.log(`hello1: ${name}!`);
};
hello1("아이언맨");

const hello2 = (name, age) => {
    console.log('hello2: ', name, age);
};
hello2('Susan', 23);

//매개변수가 없으면 빈가로만 적는다.
//리턴값이 있는 화살표 함수는 리턴 생략 가능
const add2 = (a, b) => {return a + b;};
const add3 = (a, b) => a + b;   // {return a + b;} 와 동일
sum = add3(10, 20);
console.log(`sum = ${sum}`);


console.log("\n[프로그램 종료]", '\n'.repeat(20));


























