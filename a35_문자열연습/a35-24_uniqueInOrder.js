/*******************************
 * 연속되지 않은 글자 출력하기
 * //push 배열함수
 */

const input = [
    "all good tree", // a,l,g,o,d,,t,r,e
]

function uniqueInOrder(str){
    str1 = input[0].split(',');//문자열요소를 쪼개서 배열로 만든다.
    // str2 = input[1].split(',');
    // str3 = input[2].split(',');
 
 
    arr1=str1.join(',').split("");//문자열 요소를 배열로 만든후 다시 split으로 문자열 요소를 쪼갠다.
    // arr2=str2.join(',').split("");
    // arr3=str3.join(',').split("");
    

    // console.log(arr1);
    r=[]
    for(i=0; i<arr1.length; i++) {
        if(arr1[i]==arr1[i+1]){

            arr1.splice(i, i);//slice(잘릴 시작위치, 잘릴 끝위치) 잘라서 반환한다.
            // r =arr1.splice(1, 2); 
           
        }

    }
    console.log(arr1.join(''));
}

input.forEach(e => console.log(uniqueInOrder(e)));