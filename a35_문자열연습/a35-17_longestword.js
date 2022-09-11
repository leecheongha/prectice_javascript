/*******************************
 * 가장 긴 단어 찾기
 * 
 * 
 * 
 * join 배열의 모든 요소를 연결해 문자열로 만든다.
 */

const { Console } = require("console");

const input = [
    "I am a Student",     // ->  Student
    "That elephant is big",  // -> elephant
]


// str1 = input[0]

// let arr = str1.split(' ');//문자열을 쪼개서 배열에 넣는다.

// let arr2 = []

// c = arr.map( n => n.length); //문자열 길이 구하는 함수
// console.log(c);


// function maxOfArray(arr) { //최대값 구하는 함수
//     let max =0;
//     for (let i = 0; i < arr.length; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//     }
//     return max;
// }

// return maxOfArray(c); //최대값을 반환한다.




// function longestWord(str){

    str1 = input[0]

    let arr = str1.split(' ');//문자열을 쪼개서 배열에 넣는다.
    
    let arr2 = []
    
    c = arr.map( n => n.length); //문자열 길이 구하는 함수
    console.log(c);
    
    
    function maxOfArray(arr) { //최대값 구하는 함수
        let max =0;
        for (let i = 0; i < arr.length; i++) {
          if (max < arr[i]) {
            max = arr[i];
          }
        }
        return max;
    }
    
    return maxOfArray(c); //최대값을 반환한다.




// }

// input.forEach(e => console.log(longestWord(e)));