//값 하나 입력받기
const readline = require('readlind');

const r1 = readline.creatInterface({
    input: process.stdin,
    output: process.stdout,
}); 

// 입력시 줄바꿈이 입력될 때마다 수행되는 코드 등록
r1.on('line', function(line){ //사용자가 입력한 line 문자열
    input = line.trim();
    r1.close(); //입력완료
});

//입력완료 close시 수행할 코드 등록
r1.on("close", function() {
    console.log('입력하신 값은: ', input);
});
