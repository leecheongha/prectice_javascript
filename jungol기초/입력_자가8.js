// 실수 2개와 한 개의 문자를 입력 받아 출력하되 실수는 반올림하여 소수 둘째자리까지 출력하는 프로그램을작성하시오.

// 12.2536
// 526.129535
// A

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

// 12.2536 526.129535 A

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){

    
    console.log('입력하신 값은:', input)
    console.log(parseFloat(input[0]).toFixed(2));
    console.log(parseFloat(input[1]).toFixed(2));
    console.log(input[2]);

    // for(let i=0;i<input.length-1;i++){
    //     console.log(parseFloat(input[i]).toFixed(2));
    // }
    // console.log(input[2]);


});