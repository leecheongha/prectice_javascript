/* 배멸 array 타입
    여러개의 데이터를 담는 집합자료형
    
    array literal 은   [item1, item2, ...   ]  으로 만든다
    array 의 데이터(원소) 들은 , 콤마로 구분한다
    각 데이터(원소) 들은 어떠한 타입도 가능하다

    배열의 길이 (length)
 		배열 원소의 개수, 즉 배열에 담긴 데이터의 개수 
 		
 	배열 인덱스 (첨자, index)
 		배열의 인덱스는 0부터 시작해서, (배열의 길이 - 1)까지가 됨
 		배열인덱스를 사용하여 배열원소에 접근하여 사용


    배열변수는 일반적으로 const 로 선언한다.

    Array reference
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
    https://www.w3schools.com/jsref/jsref_obj_array.asp
*/

console.log('[왜 배열(array) 이 필요한가?]');

let kor1 = 77;
let kor2 = 93;
let kor3 = 23;

//동일타입 데이터들을 위해 매번 새로운 이름의 변수를 생성하는 것은 사실상 불가능하다.



/****************************************/
console.log('-'.repeat(20));
console.log("[배열생성]");


// 배열생성 방법
// 방법1
let points = [40, 100, 1, 5, 25, 10];
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// 방법2 : new 사용
let cars = new Array("Saab", "Volvo", "BMW");

// 일반적으로 배열변수는 const 로 선언한다
console.log(points);
console.log(points.toString()); //40,100,1,5,25,10
console.log(`points = ${points}`);

console.log(typeof points); //object 배열의 타입은 오브젝트이다.

arr1 = [10, 20, 30];
arr2 = [10, 20, 30];
console.log(arr1 == arr2); //false 오브젝트끼리 비교해서 false가 나온다.

const animals = [
    'tiger',
    'dog',
    'cat',    // 마지막 원소 뒤에 콤마 OK
];

/********************************************
 * 배열 여부 판단 하기
 * 현재 객체가 배열인지 아닌지 판단하는 방법
 * 
 * 방법1: Array.isArray() : 구 브라우저에서는 동작 안함  (ES5.1부터)
 * 방법2: constructor 사용 구 브라우저에서 동작시키려면 별도의 함수 만들어 사용(추천하지 않는다.)
 * 방법3: instanceof 연산자 사용
 */
console.log('-'.repeat(20));
console.log("[배열여부 판단]");

// 방법1 isArray()
console.log(Array.isArray(fruits)); //true
//isAraay() : ()안의 데이터가 배열이면 true 아니면 false를 반환한다.

// 방법3  instanceof 
console.log((fruits instanceof Array)); //true
//instanceof 데이터 : 데이터가 배열이면 true 아니면 false를 반환한다.

/*****************************************
 * 배열원소, index, length
 *  배열의 원소를 사용하기 위해 index 사용
 *  배열 index 는 0 부터 시작 (0-base index)
 */
 console.log('-'.repeat(20));
 console.log('[배열원소, index, length]');
 
 console.log(fruits);//[ 'Banana', 'Orange', 'Apple', 'Mango' ]
 console.log(fruits[0], typeof fruits[0]);//Banana string
 

 //없는 index를 반환하라 하면 undifiend를 반환하며 음수 인덱싱을 지원하지 않는다.
 console.log(fruits[100], fruits[-1]); //undefined undefined

 console.log(fruits.length, [10, 20, 30, 40, 50, 60].length); // 4 6

 //배열 원소 변경

 fruits[3] = 'Pineapple';//배열의 3번째 요소를 변경한다.
 console.log('변경후', fruits);// [ 'Banana', 'Orange', 'Apple' 'Pineapple' ]

 console.log("*******");

 fruits[100] = '학교'// 없는 인덱스를 바꾸라고 해도 빈 값이 생서변경후 [ 'Banana', 'Orange', 'Apple', 'Pineapple', <96 empty items>, 'Mango' ]
 console.log(fruits);



 //마지막 원소를 바꾸고 싶을때

 fruits[fruits.length - 1]= 'Mango';  // 마지막 원소 변경
 console.log('변경후', fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
 //string은 immutable하지만 배열은 안에 있는 내용이 변경이 되기 때문에 mutable하다. 문자열은 문자열[n]= "xx"; 형식으로 바꾸지 못한다.

// const 로 선언한 배열은 배열 변수를 더이상 변경 못한다는 뜻이지 배열 원소는 얼마든지 변경 가능하다.

console.log('animals:', animals);
// animals = [10, 20, 30];    // 에러!
animals[0] = 'Lion';
console.log('animals:', animals);

/**************************************
 * 배열원소 추가, 제거
 *  push() : 배열끝에 원소를 추가한다.
 *  pop() : 배열 끝 원소 추출한다. (빼고 배열에서 제거한다.). 추출할 원소가 없으면 undefined 리턴
 *  shift() : 배열 첫 원소 추출한다. (빼고 배열에서 제거한다.)
 *  unshift() : 배열앞에 원소 추가하고 새로운 length 리턴한다.
 * 
 *  shift, unshift 는 pop, push 보다 성능이 느리다!
 */
console.log('-'.repeat())
console.log("[push() pop() shift() unshift()]");
console.log(fruits);

fruits.push('Grape'); // push() : 배열끝에 원소를 추가한다.
console.log('push() 후', fruits);
console.log(fruits.length);

console.log('pop() 결과', fruits.pop());  //pop() : 배열 마지막원소 리턴하고 그 원소를 제거한다.
console.log('pop() 이후', fruits);

console.log('shift() 결과', fruits.shift());//shift() : 배열 첫 원소 추출한다. (빼고 배열에서 제거한다.)
console.log('shift() 이후', fruits); //[ 'Orange', 'Apple', 'Mango' ]

console.log('unshift() 결과', fruits.unshift('Grape'));//4 unshift() : 배열앞에 원소 추가하고 새로운 length 리턴한다. unshift()은 배열을 리턴하지는 않는다.
console.log('unshift() 이후', fruits);

//push와 pop을 많이 쓰고 시프트와 언시프트는 상대적으로 느려서 자주 쓰지는 않는다.

console.log([].pop(), [].shift());

/**************************************
 * 데이터 삭제, 삽입 splicing
 *  첫번째 매개변수 : 삭제할 데이터 위치 (start)
 *  두번째 매개변수 : 삭제될 데이터 개수 (deleteCount)
 *  세번째 이후 .. : 삽입될 데이터 들..
 *  리턴값: 삭제된 원소들의 배열
 */
console.log('-'.repeat(20));
console.log("데이터 삭제/삽입 splice()");
console.log(fruits); //[ 'Grape', 'Orange', 'Apple', 'Mango' ]
 
fruits.splice(1,1); //1번째 부터 1개 제거한다.
fruits.splice(1,2); //1번째 부터 2개 제거한다.
console.log(fruits); //

fruits.splice(1,2,"Peach"); //복숭아를 삽입한다.
console.log(fruits);
fruits.splice(1, 2, 'Peach', '수박', 'Melon');// 1번째부터 2개 제거, 제거된 위치에 Peach 수박 Melon을 삽입한다.
console.log(fruits);
fruits.splice(3, 0, '딸기');  // 3번째 위치에 딸기 삽입
console.log(fruits);

fruits.splice(3); //매개변수를 하나면 넣으면 그 숫자부터 끝까지 삭제된다.3번부터 끝까지 삭제된다.
console.log(fruits);

// delete fruits[1]; 
// console.log(fruits); //[ 'Grape', <1 empty item>, '수박' ] 구멍이 생긴다. 배열에는 delete를 사용하지 말자 더이상 배열이 아니게 된다.

// 주의! delete 를 사용하여 배열 원소 삭제 하지 말기
// 이는 배열에 구멍(undefined hole) 을 만들게 된다.
// delete 보다는 pop(), shift(), splice() 를 사용하자

/**************************
 *  concat() 
 */
console.log('-'.repeat(20));
console.log("concat()");

console.log(fruits.concat(['두리앙', '망고'])); //concat메소드는 원본을 변화시키지 않는다.
console.log(fruits); //원본은 그대로이다.

// concat으로 원본을 변화시키려면 새로운 변수를 하나 더 만들어 덮어씌우면 된다.
fruits = fruits.concat(['두리안','망고']);
console.log(fruits); //[ 'Grape', 'Peach', '수박', '두리안', '망고' ]


/*************************
 *  slice()
 * 배열의 일부분 추출, 원본에는 영향 안줌
 */
console.log('-'.repeat(20));
console.log("slice()");


/****************************
 * 원소 검색 indexOf(), includes()
 * 배열안에 특정 원소가 있는지 여부
 *  indexOf() : 찾으면 index 리턴, 못찾으면 -1 리턴
 *  includes() : 찾으면 true, 아니면 false 리턴, ES7(ES2016) 에 등장 
 */
 console.log('-'.repeat(20));
 console.log("indexOf(), includes()");
 console.log(fruits);

 console.log(fruits.indexOf("두리앙")); //3
 console.log(fruits.indexOf("Lemon")); // -1  indexOf() : 찾으면 index 리턴, 못찾으면 -1 리턴 




/*************************************
 *  join() 
 *    array → string  배열의 원소들을 주어진 문자열로 묶어서 하나의 문자열로 리턴
 */
console.log('-'.repeat(20));
console.log("[join()]");






/******************************************
 * JavaScript 에선 array 도 object 의 특별한 형태다
 *  차이점이라면 index 의 형태다.
 *  JS 의 array : numbered index 사용. 어레이가 숫자로 되어 있는 것이다.
 *  JS 의 object : names index 사용
 */
arr1 = [];   // 비어있는 배열

arr1[0] = 100;  //array는 numbered index
arr1[1] = 200;  
console.log(arr1);

arr1[4] = 300; //구멍 생긴다. [ 100, 200, <2 empty items>, 300 ]
console.log(arr1); 

arr1['name'] = "John"
console.log(arr1); //[ 100, 200, <2 empty items>, 300, name: 'John' ] 가능하다.
/********************************
 * 배열 역순 reverse()
 *  원본 변화 없다.
 */
console.log('-'.repeat(20));
console.log("reverse()");
console.log(cars);
//메소드마다 원본을 변경시키는 것인지 아닌지 잘 확인해야 한다.
 


/**********************************
 * 배열 정렬 sort()
 *  sort() 는 원본 변경 발생한다
 */
console.log('-'.repeat(20));
console.log("sort()");
console.log(fruits);
 
// 역정렬 하려면

console.log(cars);
console.log(cars.sort());//[ 'BMW', 'Saab', 'Volvo' ]
console.log(cars.sort().reverse());//[ 'Volvo', 'Saab', 'BMW' ]

//숫자 데이터 정렬


//배열에 구멍이 생기면 for문을 돌때 문제가 생긴다. 배열은 연달아서 붙어 있어야 하기 때문에 중간에 구멍이 생기면 안된다.

//sort메소드는 문자열로 정렬한다.


arr1.sort(function(a,b){return a-b}); //오름차순 리턴값이 음수이면 소트가 오른쪽보다 왼쪽이 작다고 판정하는 것이다.
arr1.sort(function(a,b){return b-a}); //내림차순


console.log("\n[프로그램 종료]", '\n'.repeat(20));





























