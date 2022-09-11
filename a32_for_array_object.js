/****************************************
 * JS 는 for 가 복잡하게 많다.
 * 
 * 배열, object, string 과 for
 *  for, for~in, for~of, forEach
 */
console.log("[for, for~in, for~of, forEach]");

const points = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const cars = ["Saab", "Volvo", "BMW"];

let arr1, arr2;


/***********************************
 * for 사용
 * object 의 property 에 대한 접근 횟수를 줄이는게
 * 성능에 유리하다.
 */
 let i;
 for(i = 0; i < cars.length; i++){
     console.log(cars[i]); //도는 횟수는 총 4번이다.
 }
//자바스크립트는 .이 연산의 과정이 다른 언어에 비해서 몇가지 과정이 더 있다.
//옵젝트 프라퍼티에 접근하는 횟수를 줄이는 것이 js 성능을 올릴 수 있다.
let len = cars.length;
for(i = 0; i < len; i++){ //일반적으로 cars.length 대신 따로 변수를 받아서 사용한다.
    console.log(cars[i]);
}

/*************************************
 * for ( .. in .. ) 
 *   'property(key/인덱스)' 를 반복한다.  
 *    주로 '객체(object)' 에 대해 사용
 */
 console.log("-".repeat(20));
 console.log('[for(  in  )');
 
 for(x in cars){ //배열의 인덱스에 대해 순한하는 것이 for in 문이다.
    console.log(`cars[${x}] = ${cars[x]}`);
}
 

/************************************
 * for (  of   )  
 *   value 에 대해 순환
 *   ES6 에 등장
 *   iterable 한 객체에 사용가능  (아래 추가 설명)
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of
 */
console.log("-".repeat(20));
console.log('[for(  of  )]');

for(e of fruits){ // of 다음에 올수 있는 것은 배열, 문자열, iterable 한 객체가 올 수 있다. 자주 쓰인다.
    console.log(e);
};


/***********************************
 * 배열.forEach(함수)
 *  배열원소를 하나하나 뽑아내면서 내부적으로 함수가 호출되어 실행 (이런식으로 되호출되는 함수를 callback 함수라 한다) 
 *  이때의 callback 함수
 * 		매개변수는 (value, index, array)
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
console.log("-".repeat(20));
console.log('[배열.forEach(함수)]');

function myFunction(value){
    console.log(value, '호출됬어요~'); //데이터의 개수가 4개 이기때문에 4번 출력된다.
}

cars.forEach(myFunction);

fruits.forEach(function(value){ //이름 없는 함수 객체 사용
    console.log(value)
});
console.log('-'.repeat(20));

fruits.forEach(value => {// forEach는 화살표함수와 궁합이 좋다.
    console.log(value);
})

fruits.forEach(function(value, index, array){
    console.log(index, value, array);
});

console.log('-'.repeat(20));
console.log('points =', points);

//주어진 배열의 값을 x2 한 배열 구하기

function times2(n){
    return n * 2;
}

result = [];
for(i = 0; i < points.length; i++){
    result.push(times2(points[i]));
}
console.log(result);

arr1 = [];
points.forEach(e => arr1.push(e * 2));
console.log('x2 =', arr1);

// 주어진 배열중 '짝수'만 담긴 배열 만들기
arr1 = [];
points.forEach(e => e % 2 || arr1.push(e));
console.log('짝수 =', arr1);

//매번 이름을 정의해서 함수를 만들면 내가 정의한 것들은 모두 유지 보수 관리 대상이 된다. 물론 만들어서 여러곳에 쓰이는 거면 이름을 붙여서 만든다.



/********************************
 * for~in 과 object
 *  for(property in object)
 * 
 * 	object 에서 for~of 는 사용 못함
 * 	
 * 	for~of 는 iterable 한 객체에 대해서만 사용 가능.
 */
// console.log("-".repeat(20));
// console.log('[object 와 for~in]');
 
const person = {
	firstname : "John",
	lastname : "Doe",
	age : 50,
	eyecolor : "blue"
};

for(prop in person){
    console.log(prop, ':', person[prop]);
}
//for in의 단점
for(const i in{a:1,  b:2, c:3}){//i값에는 a , b,c가 담긴다. 1,2,3이 담기지 않는다.
    console.log(`i = ${i}`);
}

// for .. in 의 단점
for(const i in {a: 1, b: 2, c: 3}){
    console.log(`i = ${i}`);
}

// 마치 {a: 1, b: 2, c: 3} 안에 있는 a,b,c 만 나오는 듯하지만

// prototype 에 있는 것도 나올수 있기 때문에
// 의도치 않은 결과를 내뱉을수도 있다.
// (런타임 환경에 따라서 for..in.. 은 다르게 동작할수 있다)

Object.prototype.test = function(){};
console.log();
for(const i in {a: 1, b: 2, c: 3}){
    console.log(`i = ${i}`);   // 헉? a,b,c,test 까지?
}

// object 관련 기억해둘만한것 3가지
// 위 object 의 key 들만 뽑아내려면?

console.log(Object.keys(person));//[ 'firstname', 'lastname', 'age', 'eyecolor' ]


// 위 object 의 value 들만 뽑아내려면?

console.log(Object.values(person));
 
// [key, value] 를 있는 배열 형태
console.log(Object.entries(person));//배열로 나왔으니 for of나 for in으로도 돌리 수 있고 for in은 좀 위험해서 차라리 오브잭트. 형태로 쓰는게 낫다


/****************************************
 * string 도 for문을 돌릴 수 있다.
 * 	 for, for~in, for~of, 
 * 
 * 	 string 은 iterable 하기 때문에 for~of 사용 가능
 */
console.log("-".repeat(20));
console.log('[string 과 for]');
const str = "Hello";
{
let result = [];
for(i = 0; i < str.length; i++){
    result.push(str[i]);
}
console.log(result.join(','));

for(i in str){
    console.log(i, str[i]);
}

for(ch of str){
    console.log(ch);
}
}//test [Function (anonymous)] for in의 문제이다.
//스트링은 forEach문 안된다 forEach는 배열의 메소드이기 때문이다.


    // str.forEach();   // 에러. forEach 는 배열의 메소드

    str.split("").forEach(ch => process.stdout.write(ch + ","));
    // split은 배열을 만들어 주는 메소드이기 때문에 split을 통해 배열로 받은 다음 forEach를 사용하면 된다.

    //배열 사용할때는 for in이나 forEach를 사용하는 것이 좋다.


/***********************************************
 * iterable
 * 
 * JS 에서 배열과 같이 for ~ of 로 순환할수 있는 객체를 iterable 이라 한다.
 * 
 * JS 의 기본 내장 iterable 은 
 *  String, Array, TypedArray, Map, Set
 * 
 * ★DOM 객체에 대해서도 얼마든지 사용 가능.
 *   ex) getElementsByTagName()-돔객체를 다루는 메소드이다.
 * 
 * 그 밖에도 얼마든지 사용자 정의 iterable 객체 정의 가능
 * 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols
 * 
 * (이는 고급 주제이므로 기회가 되면 다루겠습니다)
 */
 console.log("\n[프로그램 종료]", '\n'.repeat(20));








































