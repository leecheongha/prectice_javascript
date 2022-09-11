/******************************
 * 배열의 reduce : n개의 입력 => 1개의 값을 리턴한다.
 * reduce 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수입니다. 
 * 
 * reduce(callback함수)
 * reduce(callback함수, 초깃값)
 * 
 * reduce 함수를 누적계산결과'값'을 리턴한다
 * (acc, crr) => 누적계산결과
 * (acc, crr, index, array) => 누적계산결과
 *   - index: 현재 crr 가 몇번째 인지 
 *   - array: 함수를 실행하는 배열 자신 
 * 
 * ES5 등장
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
//화살표 함수 예
//  var numbers = [1, 2, 3, 4, 5]; 
//  var newArray = numbers.map(a => a + a);
 
//  console.log(newArray); //[2, 4, 6, 8, 10]


let numbers = [1, 2, 3, 4, 5]
let result, sum

// '총점'을 구하려면?

// 1. 기존의 방법
sum = 0;
for(e of numbers){
    sum += e;
}
console.log('sum =', sum);

// 2. reduce 를 사용
sum = numbers.reduce((acc, crr) => acc + crr);
console.log('sum =', sum);
//두개를 뽑아서 어커뮬레이터랑 커런트에 입력한다. 그리고 합산한다. 그리고 그 다음 두개가 전달된다. 반복해서 최종적으로 1개가 남을때까지 계속한다. 그리고 마지막으로 남은 하나의 값을 리턴한다.

// 초깃값 사용
sum = numbers.reduce((acc, crr) => acc + crr, 0);
//0은 초기값이다. 초기값이 주어지면 처음에 들어가는 수가 0이다. 그래서 최초에 들어가는 0과 1이 된다.

// [0, 1, 2, 3, 4, 5]   초깃값 0 부터 시작
//   ↘↓
// [   1, 2, 3, 4, 5]
//      ↘↓
// [      3, 3, 4, 5]
//         ↘↓
// [         6, 4, 5]
//            ↘↓
// [           10, 5]
//               ↘↓
// [              15]

numbers.reduce((acc, crr, index, array)=>{
    console.log(`${index} : ${acc} + ${crr}`);
    return acc + crr;
}, 0);  // <- 0은 초깃값 initializer

sum = numbers.reduce((acc, crr) => acc + crr, 0);


let avg = numbers.reduce((acc, crr, index, array)=>{
    let result = acc + crr;
    // 마지막 원소인 경우는 평균을 리턴하게 하자
    (index === array.length - 1) && (result /= array.length);
    return result;
}, 0);


console.log('avg =', avg);

//오브젝트에서 키만 뽑아내는것을 활용해서 sort()돌린다.
//오브젝트 자체는 순서가 있는 데이터가 아니기 때문에 정렬이 안되기 때문에 뽑을때 sort를 사용한다.
let alphabets = ["c", "a", "a", "b", "c", "a", "d", "e"];
let count = alphabets.reduce((acc, cur) => {
    if(acc[cur]){
        // 기존에 존재했다면 +1 증가
        acc[cur] += 1;
    } else {
        // 최초로 등장했다면
        acc[cur] = 1;
    }
    return acc;
}, {});  // 초깃값 {}
console.log(count);

/*
    {}, c, a, a, b, c, a, d, e
      
    {c:1}, a, a, b, c, a, d, e

   {c:1,a:1}, a, b, c, a, d, e

      {c:1,a:2}, b, c, a, d, e

      {c:1,a:2,b:1},c, a, d, e

        {c:2,a:2,b:1}, a, d, e

           {c:2,a:3,b:1}, d, e

           {c:2,a:3,b:1,d:1}, e
           
           {c:2,a:3,b:1,d:1,e:1}
*/

//reduce를 잘 다루면 생상성 향상에 도움이 된다.


console.log(Object.keys(count));//키만 나온다
console.log(Object.values(count));//벨류만 나온다.
console.log(Object.entries(count));//키와 벨류가 같이 있는 배열로 나온다.
// 알파벳 오름차순 정렬

let alphabets2 ={ a: 3, b: 1, c: 2, d: 1, e: 1 }

console.log(Object.entries(alphabets2))
// [ [ 'a', 3 ], [ 'b', 1 ], [ 'c', 2 ], [ 'd', 1 ], [ 'e', 1 ] ]


console.log(Object.entries(count).sort((a, b) => {
    if(a[0] > b[0]) return 1;
    if(a[0] < b[0]) return -1;
    return 0;
}));

console.log('빈도수 오름차순 정렬');
console.log(Object.entries(count).sort((a, b) => a[1] - b[1]));

// 빈도수 오름차순 정렬

console.log('빈도수 내림차순 정렬');
console.log(Object.entries(count).sort((a, b) => b[1] - a[1]));



// 빈도수 내림차순 정렬





console.log("\n[프로그램 종료]", '\n'.repeat(20));