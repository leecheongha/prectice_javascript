// 정수값 여러개 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = undefined;

let arr1 = [];
let arr2 = [];
let linenum = 0;

console.log('first array')

// 입력시 줄바꿈이 입력될때 마다 수행되는 코드 등록
rl.on('line', function(line){  // 사용자가 입력한 line (string)
    input = line.trim().split(/\s+/).map((e)=>parseInt(e));
    if(linenum < 2){ //split이 배열로 반환되기 때문에 바로 push해서 배열 안에 split으로 만든 배열을 넣었다.
        arr1.push(input);
    } else if(lienum < 4){
        arr1.push(input);
    }
    linenum++;
    (linenum == 2) && console.log('second array');
    (linenum == 4) && rl.close();

}); //map 배열의 모든 요소에 어떤 동작을 시킬때 쓴다.

// 입력완료 close시 수행할 코드 등록
rl.on("close", function(){
    let row, col;
    for(row = 0; row < arr1.length; row++){

        result = [];
        for(col = 0; col < arr1[row].length; col++){
            result.push(arr1[row][col] * arr2[row][col])
        }
        console.log(result.join(' '));
    }
});

// 2행 4열의 배열 두 개를 만들어서 입력을 받고 두 배열의 곱을 구하여 출력하는 프로그램을 작성하시오.

