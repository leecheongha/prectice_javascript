/*******************************
 * isogram : 중복글자 없는 단어
 * isogram 여부 판단하기 (true/false)
 * 순환문 조건문 참고
 * 
 * *  includes() : 찾으면 true, 아니면 false 리턴, ES7(ES2016) 에 등장 
 *console.log(str.includes("locate"))
 
*/


const input = [
    "Dermatoglyphics", // -> true
    "programmer",      // -> false
    "Correct",         // -> false
    "isogram",         // -> true
]



//    // 배열로 만들자

// //    str.split(' ');

//    str1 = input[0].split(',');//문자열요소를 쪼개서 배열로 만든다.
//    str2 = input[1].split(',');
//    str3 = input[2].split(',');
//    str4 = input[3].split(',');

//    arr1=str1.join(',').split("");//문자열 요소를 배열로 만든후 다시 split으로 문자열 요소를 쪼갠다.
//    arr2=str2.join(',').split("");
//    arr3=str3.join(',').split("");
//    arr4=str4.join(',').split("");

// console.log(arr1[3])

// for(i=0; i<arr1.length; i++){
//    a= str1.includes(arr1[i])

//    if(a=true){
//     return true;
//    }else{
//     return false;
//    }
// }

function isIsogram(str){

    str1 = input[0].split(',');//문자열요소를 쪼개서 배열로 만든다.
    str2 = input[1].split(',');
    str3 = input[2].split(',');
    str4 = input[3].split(',');
 
    arr1=str1.join(',').split("");//문자열 요소를 배열로 만든후 다시 split으로 문자열 요소를 쪼갠다.
    arr2=str2.join(',').split("");
    arr3=str3.join(',').split("");
    arr4=str4.join(',').split("");
 
 for(i=0; i<arr1.length; i++){
    a= str1.includes(arr1[i])
 
    if(a=true){
     return true;
    }else{
     return false;
    }
 }

}
input.forEach(e => console.log(isIsogram(e)));

