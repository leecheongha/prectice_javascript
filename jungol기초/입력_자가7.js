

// 정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e)=>parseInt(e));
    rl.close();  // 입력완료시 close!
}); //map 배열의 모든 요소에 어떤 동작을 시킬때 쓴다.

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    // TODO
    console.log('입력하신 값은:', input);
    console.log(input[0] + input[1] + input[2]);
});

 //두 개의 정수를 입력 받아 곱과 몫을 출력하시오.

// (먼저 입력 받는 수가 항상 크며 입력되는 두 정수는 1이상 500이하이다.)

// 입력 예복사됨!
// 16 5

// 16 * 5 = 80
// 16 / 5 = 3

// 과제 입력 4,5,8,9  다른데 작성하지 말기 4번 5번은 입력 없다.


