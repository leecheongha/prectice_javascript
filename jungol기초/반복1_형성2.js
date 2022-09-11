

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e) => parseInt(e));
    rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
   
    let j = 0;
    let k = 0;
    let i = 0;

    console.log('입력하신 값은:', input[0]);

   if( input[i] == 0) {
     
     if (input[i] % 2 == 0){
        
            j++
        } else{
            k++
        }
     }
     console.log(`${j}, ${k}`);

});
// 0 이상의 정수들이 공백으로 구분되어 반복적으로 주어진다.

// 0이 입력되면 반복문을 멈추고 그 전까지 입력받은 수들에 대하여 홀수의 개수와 짝수의 개수를 출력하는 프로그램을 작성하시오.
