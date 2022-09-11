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
    
    let height = input[0];
    let weight = input[1];

    let obesity = weight+100-height;
    console.log(obesity);

    if(obesity > 0)
        console.log('Obesity');

});

// “몸무게+100-키”를 비만수치 공식이라고 하자.


// 키와 몸무게를 자연수로 입력받아 첫 번째 줄에 비만수치를 출력하고, 비만수치가 0보다 크면 다음줄에 비만("Obesity")이라는 메시지를 출력하는 프로그램을 작성하시오. (출력형식은 아래 출력 예를 참고하세요.)

