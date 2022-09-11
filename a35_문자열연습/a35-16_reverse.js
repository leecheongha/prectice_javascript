/*******************************
 * 문자열 좌우 반전
 * var array=[1,2,3]
array.forEach(x=>{
    console.log(x)

})

push는 마지막에 요소를 집어넣고 배열의 크기를 리턴하는 메소드이다.
 */

const input = [
    "abcde",            // edcba
    "I am a Student",   // tnedutS a ma I
]
//문자열에 포이치 못 붙인다. 리버스는 배열의 메소드이다.

// const result = [];

// let str = input[0].split('').reverse().join('');
// result.push(str)
// console.log(result)

//문자열을 매개 변수로 받는다.

console.log(input[0].split('').reverse());

const result = [];

function reverse(str){
    

    for(i=0; i<=input.length; i++){
        
    result[i]=input[i].split('').reverse().join(" ");
    
   
    }  
    
    return result.toString()
 
}

input.forEach(e => console.log(reverse(e)));