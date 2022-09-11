/* 배열Array 의 메소드

    indexOf(v)  특정 항목(v)이 어디에 있는지 알아내기 (ES5)

    가령. 찾고자 하는 대상이 특정 조건의 object 이면.  어떻게 찾나?
    주어진 판별 함수를 매개변수로 주면
      findIndex(판별함수)  배열 인덱스를 리턴 (ES6) 매개변수가 함수이다.
      find(판별함수) : 배열 원소 자체를 리턴  (ES6) 매개변수가 함수이다.

    indexOf(), findIndex(), find() 는 
        가장 '첫번째'로 찾은 것으로 리턴한다.

    Array.findIndex : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.find : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/

//-----------------------------------------------
// indexOf(v)
let superheroes = ["아이언맨", "캡틴", "토르", "헐크"]
let index 

index = superheroes.indexOf('토르');
console.log('index =', index);

index = superheroes.indexOf('청하');
console.log('index =', index);
//----------------------------------------------
// findIndex(함수)

let todos = [ //원소는 오브젝트이며 개수는 4개이다. 
    {
      id: 1,
      text: "자바스크립트 입문",
      done: true
    },
    {
      id: 2,
      text: "함수 배우기",
      done: true
    },
    {
      id: 3,
      text: "객체와 배열 배우기",
      done: true
    },
    {
      id: 4,
      text: "배열 내장함수 배우기",
      done: false
    }
  ];

// id가 3인 것을 구하려면?

console.log(todos.indexOf(3)); // -1 

//findIndex(판별함수)  배열 인덱스를 리턴한다.  매개변수가 함수이다.

index = todos.findIndex(e => e.id === 3)// e는 객체이다.
console.log(index, todos[index]);


//---------------------
// find(판별함수) : 배열 원소 자체(값)를 리턴
console.log(todos.find(e => e.id === 3)) // value를 리턴한다.


