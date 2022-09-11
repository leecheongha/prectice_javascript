// 세 개의 실수를 입력 받아 반올림하여 소수 셋째 자리까지 출력하는 프로그램을 작성하시오.
// 1.2568
// 95.21438
// 526.851364

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/); //split은 배열로 반환한다.
    rl.close();  // 입력완료시 close!
});


// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    
    console.log('입력하신 값은:', input)
    for(let i=0;i<input.length;i++){
        console.log(parseFloat(input[i]).toFixed(2));
    }

});
