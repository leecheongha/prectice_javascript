// 반지름은 입력받아
// 원의 둘레를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출

const calcCirclePerimeter = function(radius){
    return 2 * Math.PI * radius;
};

let r, p;

r = 10;
p = calcCirclePerimeter(r);
console.log(`반지름 ${r} 인 원의 둘레는 ${p.toFixed(2)}`); //TOFixed 소수점 둘째 자리까지

r = 8;
p = calcCirclePerimeter(r);
console.log(`반지름 ${r} 인 원의 둘레는 ${p.toFixed(2)}`);

// 반지름은 입력받아
// 원의 면적를 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 


const calcCircleArea = function(radius){
    return  Math.PI * radius* radius;
};

r=10;
p=calcCircleArea(r);
console.log(`반지름 ${r} 인 원의 넓이는 ${p.toFixed(0)}`)


// 직사각형의 '가로', '세로' 의 크기를 입력받아
// 직사각형의 넒이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출

let sw, sv;

const calSquareArea = function(sw, sv){
    return sw*sv;
};

sw=3;
sv=5;

sa=calSquareArea(sw, sv);
console.log(`가로가 ${sw} 세로가 ${sv} 인 사각형의 넓이는 ${sa}`)
// TODO

// 직각삼각형의 '밑변'과 '높이'가 주어졌을때
// 빗변의 길이를 구하여 리턴하는 함수를 작성하세요
// 정의, 호출

let tw, th;

const calSidePlain = function(tw, th){
    return Math.sqrt(Math.pow(tw,2)+ Math.pow(th,2)); //Math.pow 제곱 구하기
}; //math.sqrt() 제곱



tw=3;
th=4;

// ex=Math.pow(tw,2)
// console.log(`ex의 값은 ${ex}`);

// ex2 = Math.sqrt(4)
// console.log(`ex2의 값은 ${ex2}`);

// ex3 = Math.sqrt(25);
// console.log(`ex3의 값은 ${ex3}`);


tl=calSidePlain(tw, th);
console.log(`가로가 ${tw} 세로가 ${th} 인 직각삼각형의 빗변의 길이는 ${tl}`);

// TODO

// 반지름은 입력받아
// 원의 '둘레'와 '면적'을 계산하여 리턴하는 함수를 작성하세요
// 정의, 호출 

// TODO

console.log("\n[프로그램 종료]", '\n'.repeat(20));































