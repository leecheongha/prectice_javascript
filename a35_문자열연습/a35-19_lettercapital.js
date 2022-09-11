/*******************************
 * 영어문장에서 각 단어 첫글자만 대문자 만들기
 * 
 * join() 함수는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
arr.join([separator]) 

 var str = "chatAt"; // str.chatAt(2) : a

 arr.slice([begin[, end]])

 */

const input = [
    "i am a PROGRAMMER",     // -> I Am A Programmer
    "THAT ELEPHANT IS BIG",  // -> That Elephant Is Big
]

//방법 1
// function letterCapitalize(str){
// //문자열은 이뮤터블이라 원본을 덮어쓰기 해야 한다.
//     str = input.toLowerCase();
//     str.trim().split(/\s+/); //공백으로 단어 쪼개기

//     for(let i = 0; i < arr.length; i++){  // 각 단어별로
//         let first = arr[i].chatAt(0);   // 첫글자
//         let rest = arr[i].slice(1);     // 두번째 글자부터 (나머지)
//         first = first.toUpperCase();    // 첫글자만 대문자로

//         result.push(first + rest);    // 단어 합치기
//     }

//     return result.join(" ");
// }

    

    // 방법2
    const result = [];
    str.split(/\s+/).forEach(e => {
        e[0].toUpperCase() + e.slice(1).toLowerCase()
    });
    return result.join(" ");

    
 input.forEach(e => console.log(letterCapitalize(e)));