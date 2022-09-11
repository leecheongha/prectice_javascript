const { Console } = require("console");

console.log("hello JavaScript"); 

const person = {
        firstName: "John", //관례로 이름다음에 :을 붙이고 한칸 띄는것이 가독성이 좋다.
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
}


let key = 'age';
console.log(person[key]);

console.log(person.address);
console.log(person);

person.firstName = "Jane";
console.log('변경후' , person);

person.email = 'Jane@mail.com';
console.log('추가후', person);

delete(person.email);
console.log('삭제후', person);

obj1 = {
    score: 100,
    'score': 200,   // property 는 문자열로 표기해도 동작.
    'score': 300,
    Score: 400,  // property name 은 대소문자 구분
};
console.log(obj1);

// 템플릿리터럴-백택(``)을 사용하고 그 안의 문장에 변수와 식에 ${}를 붙여서 표현한다.

var a = 10;
var b = 12;
var c = "그림";

var str = "저는"+ (a+b) + "살이고" + c + "를 좋아합니다.";

var str2 = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;

console.log(str);
console.log(str2);

console.log("*******");

num1 =  "Apple";
num2 = 10; 


// const array = [0,1,2,3,3,4,5,6,7];

// array2= array.map((e)=>e * e)

// console.log(array.map((e)=>e * e));

// const evenNumbers = array.filter(e => e%2 === 0
// )

// Console.log(evenNumbers);

const numbers = [1,4,9] ;

const roots = numbers.map(item => Math.sqrt(item));

console.log(roots);

console.log(numbers);

const number = [ 1,2,3,4,5];

const odds = number.filter(item =>  item % 2); // 1은 true로 평가한다.
console.log(odds);
//공백으로 문자열을 쪼갤때는 split(/\s+/)를 사용한다.

[1,2,3,].filter((item, index, arr)=> {
    console.log(`요소값: ${item}, 인덱스${index}, this:${JSON.stringify(arr)}`)
})

function add(x,y) {
    return x+y;
}
console.log(add(2,5));

function add( x, y) {
    return x+y;
}
console.log(add(2,5)); 


arr = [1,2,3,4]
arr.forEach(e => { if(e=='number') {
    e+10
;}
 console.log(arr)   
});