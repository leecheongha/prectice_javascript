/*
퀴즈
이제 지금까지 배운 것들을 활용하여 퀴즈를 풀어봅시다!
숫자 배열이 주어졌을 때 
10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
*/
const data = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];
// 결과 -> 5

{
  const countBiggerThanTen = function(arr, number) {

   let count = 0;

   let i=0
 data.forEach(arr => {
  arr > number && count++

  return count;
});

  }

////오아는 왼쪽이 트루면 왼쪽이 수행되고 엔드는 왼쪽이 트루면 오른쪽이 수행된다.


  console.log(countBiggerThanTen(data, 10)); // 5
}


{
  function countBiggerThanTen(arr, number) {
    // 방법2 : filter 사용

    let count= arr.filter(arr => arr > number ).length;
 
    return count;


  }
  //필터의 리턴값은 배열이다.

  console.log(countBiggerThanTen(data, 10)); // 5
}

{
  function countBiggerThanTen(arr, number) {
   

    let count = arr.reduce((arr, number) => {
      if(arr > number){
          count++;
      }
      return count;
  });
  console.log(count);


  }

  console.log(countBiggerThanTen(data, 10)); // 5
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));