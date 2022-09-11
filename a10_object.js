// /*
//     object

//     property : value 쌍으로 구성된 데이터

//     {property:value, property:value, ...}

//     property 는 중복될수 없다.
//     value 는 어떠한 타입도 될수 있다.
//         : number, string, array, function, object..

//     사실 JavaScript 의 모든 데이터의 실체는 object 이다.
    
//     ※일반적으로  object 변수는 는 const 로 선언한다
//     그러나 이번단원에서 진도 편의상 let 등을 사용하기도 하겠습니다
//  */

// let obj1, obj2, obj3, result;

// const car = {type: "Fiat", model: "500", color: "white"};

// console.log(car);
// console.log(car.toString());
// console.log(typeof car);

// console.log("제 자동차는 " + car); //  tostring값이 나온다.
// console.log("제 자동차는 ${car}"); //템플릿 리터럴로 해도 tostring값이 나온다. 
// obj1 = {}; //비어 있다고 해도 null이 아니다 
// // null은 휴지가 아예 없는거고 empty는 휴지심은 있는데 휴지 다 쓴것이다.

// console.log(obj1);

// console.log('-'.repeat(20));
// console.log('[object 의 property]');


// const person = {
//     firstName: "John", //관례로 이름다음에 :을 붙이고 한칸 띄는것이 가독성이 좋다.
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
    
// };
// console.log(person.firstName);
// console.log(person['firstName']);
// //console.log(person[firstName]); //refenceError가 난다.
// console.log(typeof person.firstName);
// console.log(person.age);

// let key = 'age';
// console.log(person[key]);

// let a = 'fitstName' , b ='age';
// console.log(`${person[a]} is ${person[b]} years old`);

// //없는 property로 접근하면 undefined가 나온다. (js에서는 에러는 아니다.)
// console.log(person.address);

// //프라퍼티값 변경하기
// console.log(person);
// person.firstName = "Jane";
// console.log('변경후' , person);

// // person 을 const 로 선언 했는데 property 변경 가능?  
// // person 을 바꾸지 못한다는 거지 person 의 property 를 변견 못한다는 게 아니다
// // person = {name: 'hello'};   <-- person 값 자체를 변경하려 하면 이게 에러다!

// // property 추가하기
// person.email = 'Jane@mail.com';
// console.log('추가후', person);

// // property 삭제하기  delete 연산자
// // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/delete

// delete(person.email);
// console.log('삭제후', person);

// // property 는 중복될수 없다!
// obj1 = {
//     score: 100,
//     'score': 200, // property 는 문자열로 표기해도 동작.
//     Score: 400, //대소문자를 구분하기 때문에 덮어쓰지 않고 따로 나온다.

// };
// console.log(obj1); //200 마지막에 쓴 것이 덮어 쓰게 된다.
// console.log('[object 의 value]');

// obj2 = {
//     name: 'John',
//     age: 34,
//     height: 172.3,
//     married: false,
//     score: [100, 97, 33],
//     family: {
//         spouser: 'Jane', //spouser: 배우자
//         children: ['Clark', 'Steve', 'Charlie'],
//     },
// };

// console.log(obj2);
// console.log(obj2.name); // 'John'
// console.log(obj2.age);  // 34
// console.log(obj2.married);  // false
// console.log(obj2.family.spouser); 
// console.log(obj2.family.children[2]);
// console.log(obj2['family']['children'][1]); //object 프라퍼티에 이런 방법으로도 접근이 가능하다.

// /* object 의 property 사용하기
//     방법1 : objectName.propertyName
//     방법2 : objectName["propertyName"] 
// */
// // console.log('-'.repeat(20));
// // console.log('[object 의 property]');

// 



// /****************************************************
//  *  object method 와 this
//  * object 의 value 는 어떠한 타입도 가능하다
//  * 즉, 함수도 object 의 property value 로 가능하다
//  * object 의 property 함수를 메소드(method) 라 부른다.
//  * object 안에서 this 는 '자기자신객체', 즉, 해당 object 가 참조(혹은 바인딩) 된 객체를 말한다
//  */
// console.log('-'.repeat(20));
// console.log('[object method 와 this]');

// obj2 = {
//     firstName: "John",
//     lastName: 'Doe',
//     id : 5566,

//     fullName: function(){
//         // return "Hello";
//         return `${this.id}] ${this.firstName} ${this.lastName}`;
//     },
// };

// console.log(obj2.fullName());
// //자바스크립트에서는 정확하게 자신의 오브젝트를 사용하고 싶으면 꼭 this를 명시해 주어야 한다.
// //그런데 이 this가 고정된 것이 아니고 호출된 시점에 따라 달라진다.

// / JavaScript 에서 this 는 '특정 object' 를 참조하게 되어 있다.
// // '어떤 object 를 참조?' 하냐는 this 가 사용(호출) 되는 시점마다 '다르다'.
// // (JS  위 this 가 다른 언어의 this에 비해 직관적으로 이해하기 어려운면이 있습니다)
// // 이후 진도 나가면서 this가 등장할때마다 this가 무엇을 참조하는지 눈여겨 봅시다. 
// // 참고: https://www.w3schools.com/js/js_this.asp

// console.log(obj2.fullName());

//--------------------------------------------------------------

console.log();
let x = {
    name: "kim",
    age: 34,
    height: 172.3,
    score: [94, 35, 79],

    getTotal: function(){
        let sum = this.score[0]+this.score[1]+this.score[2]

        return sum;
    },

    getAvg: function(){
        return this.getTotalsum/this.score.length // return sum/this.score.length
    }

    // let i =0;
    // for(this.score[i]; i <= score.length; i++) {
    // sum1 = sum1 + i;
    // }


};

// let i =0;
//     for(this.score[i]; i <= score.length; i++) {
//     sum1 = sum1 + i;
//     }

//성적의 총점, 평균 구하기

console.log(x.getTotal()); // 총점
console.log(x.getAvg());  // 평균
// console.log(sum1);

//배열도 어떠한 타입의 원소도 가능하다.

//x의 원소의 개수 5개
x = [
    "Kim", 34, 172.3,
    {kor: 94, eng: 35, math: 79},   // 3과목 점수
    [
        {
            address: "서울",
            year: 1998,
        },
        {
            address: "부산",
            year: 2012,
        },
    ],
    function(){
       return 'hello';
    },

    // function(){
    //     return this[3].kor + this[3].eng + this[3].math;
    // },

    // function(){
    //     return this[6]() / 3;
    // }

    function(){
        return this[3].kor + this[3].eng + this[3].math;
    },

    function(){
        return this[6]() /3;
    }


],

console.log('-'.repeat(20));
console.log(x.length);
console.log(x[0], x[1], x[2]);
console.log(x[3].kor);
console.log(x[4][0].year);
console.log(x[5]());

console.log(x[6]());  // 총점
console.log(x[7]());  // 평균


console.log("\n[프로그램 종료]", '\n'.repeat(20));






























