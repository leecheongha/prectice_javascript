
// 값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/);
    rl.close();  // 입력완료시 close!
});

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){

    gender = input[0];
    age = parseInt(input[1]);
   

    if(input[0] == "F") {

        if(input[1] >= 18) {
            console.log ("WOMAN");
        } else {
            console.log ("GIRL");
        }
    } else {
        if(input[1] >= 18 ){
            console.log ("MAN");
        } else {
            console.log ("BOY");
        }
    }
});

// 남자는 'M' 여자는 'F'로 나타내기로 하고 18세 이상을 성인이라고 하자.


// 성별('M', 'F')과 나이를 입력받아 "MAN"(성인남자), "WOMAN"(성인여자), "BOY"(미성년남자), "GIRL"(미성년여자)을 구분하여 출력하는 프로그램을 작성하시오.