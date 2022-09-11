// map. filter, reduce 이 세개는 중요하다. 데이터 동작의 기본이다.

// mapping : n(개수를 의미한다.) -> n : n개를 입력해서 뭔가를 적용해서 n개가 나온다
// ex) 주어진 데이터의 값들을 x2 한 결과 만들기
// [11, 12, 13, 14, 15]  n개의 데이터
//  ↓   ↓   ↓   ↓   ↓        x 2
// [22, 24, 26, 28, 30]  n개의 데이터

// filter :  n -> n>= : 걸러낸다.
// ex) 주어진 데이터에서 3의 배수로만 구성된 결과 만들기
// [11, 12, 13, 14, 15]  n개의 데이터
//       ↓           ↓
// [    12,         15]

// reduce : n -> 1 : n개가 입력되서 데이터를 조작해서 1개를 출력한다.
// ex) 주어진 데이터의 합을 구하세요
// [11, 12, 13, 14, 15]  n개의 데이터
//           ↓
//          65

/* 배열의 map(callback) 메소드
  배열 안의 원소들을 변환할때 사용

  ES5 등장
  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squared = []; // 비어있는 배열을 준비한다.

//for 사용
for(let i = 0; i < array.length; i++){
  squared.push(array[i]**2);
}
console.log(squared);//[  1,  4,  9, 16, 25,36, 49, 64, 81]

//2. forEach();
array.forEach(n => squared.push(n ** 2));
console.log(squared);//[  1,  4,  9, 16, 25,36, 49, 64, 81]

// 3. map(함수) 사용
squared = array.map( n => (n ** 2))// 어레이에서 모든 원소가 뽑아져 나와서 그것을 제곱한 것을 담은 새로운 배열을 리턴한다.

console.log(squared); // [  1,  4,  9, 16, 25,36, 49, 64, 81]

// => [ 'hello', 'bye' ]
let items = [
  {
    id: 1,
    text: "hello"
  },
  {
    id: 2,
    text: "bye"
  }
]

b = items.map(e => e.text);
console.log(b);

// result = items.map(e => e.text);
// console.log(result);

console.log('주어진 string 숫자를 number 로 변환하기');
array = ['1', '2', '3'];

c= array.map( n => parseInt(n));
console.log(c);

// 아래와 같이 하면 제대로 동작하지 않는다...
console.log(array.map(parseInt));  // [ 1, NaN, NaN ]
// 이유는, parseInt 는 매개변수 하나짜리 함수가 아니기에..

console.log("\n[프로그램 종료]", '\n'.repeat(20));