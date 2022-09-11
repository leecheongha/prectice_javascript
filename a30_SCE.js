let result ;

result = true && false;
result = true || false;

result = true && 'hello';
console.log(result); //hello

//엔드는 왼쪽이 트루면 오른쪽 값이 나온다.
//엔드 연산자는 왼쪽이 false면 왼쪽값이 나온다.

result = false && 'hello';
console.log(result);

/*****************************************************
 * Short Circuit Evaluation (단축평가)  (혹은 Lazy Evalutaion 이라고도 한다)
 * 
 * 표현식1 && 표현식2
 *  표현식1 이 Falsy 이면 && 의 결과값은 표현식1
 *  표현식1 이 Truthy 이면 && 의 결과값은 표현식2
 * 
 * 수행을 하고 결과값이 나온다.
 * 
 * 표현식1 || 표현식2
 *  표현식1 이 Falsy 이면 && 의 결과값은 표현식2
 *  표현식1 이 Truthy 이면 && 의 결과값은 표현식1
 *
 * //오아는 왼쪽이 트루면 왼쪽이 수행되고 엔드는 왼쪽이 트루면 오른쪽이 수행된다.
 * 
//모든 프로그래밍에 나오는 공통사항이다.

result = 'hello' || 'byte';
console.log(result);

result = 0 || 200;
console.log(result);
//엔드와 오아 연산자는 항상 결과가 트루 false인 것이 아니다.

result = null || 'good';
console.log(result);

let n = 5;

if(n % 5 == 0)
    console.log('5의 배수');

 (n % 5 == 0)&& console.log('5의 배수');
 //엔드는 왼쪽이 참이면 오른쪽이 수행된다.
 
 n = 3;
(n % 5 == 0) || console.log('5의 배수가 아닙니다');
//오아는 왼쪽이 참이면 왼쪽을 수행한다.

/*****************************************
 * SCE 는 
 * React 등에서 '조건부 렌더링' 등을 할때 많이 사용하는 문법이다
 * 특정 값이 유효할때만 수행해야 하는 상황
 */
 let getName = function(animal){
    return animal.name;
}
let dog = {name: "흰둥이"};

dog = null;
// console.log(getName(dog)); //null은 .을 붙일 수 없다. 따라서 혹시나 null값이 넘어올 경우 검사를 해야 한다.

getName = function(animal){
    return animal && animal.name;
} // 이렇게 하면 널 값이더라도 에러가 나진 않는다.

dog = {age: 5};
console.log(getName(dog)); //undefined 에러가 나진 않는다.
//두개를 체크해야 하는데 값이 널인지 그리고 값이 존재하는지 확인해야 한다.

/*********************************
 * || or 연산의 경우
 * 
 * || 연산자로 코드 단축시키기
 * || 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있습니다.
 */
 dog = {name: ""};
 
 getName = function(animal){
    const name = animal && animal.name; //animal의 널 체크
    return name || "이름이 없는 동물입니다." // .name 값이 있는지 체크
    
 }

 console.log(getName({age: 34}));
//오아는 왼쪽이 트루면 왼쪽이 수행되고 엔드는 왼쪽이 트루면 오른쪽이 수행된다.

// 함수 기본 parameter와 같은 동작도 sce로 구현 가능하다.

// const calcCircleArea = function(r){
//     let radius = r || 1;
//     return Math.PI * r* r;
// }

// console.log(calcCircleArea(10));
// console.log(calcCircleArea());//NaN


const calcCircleArea = function(r){
    let radius = r || 1; //추가해준 부분
    return Math.PI * radius * radius;
}; //이렇게 하면 nan은 나오지 않는다.

 
console.log("\n[프로그램 종료]", '\n'.repeat(15));



























