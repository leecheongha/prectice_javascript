/*******************************
 * 문자열 시프팅 차이값
 * 함수에 두개의 매개변수가 주어지는데 앞의 문자열 기준으로 뒤의 문자열이 몇칸 이동한건지 알아보기
 */

const input = [
// [first, second]
    ["hello", "hello"],    // 0
    ["hello", "ohell"],    // 1
    ["hello", "lohel"],    // 2
    ["hello", "llohe"],    // 3
    ["hello", "elloh"],    // 4
    ["hello", "elohl"],    // -1

]

function shiftedDiff(first, second){
    
}

input.forEach(e => console.log(shiftedDiff(e[0], e[1])));