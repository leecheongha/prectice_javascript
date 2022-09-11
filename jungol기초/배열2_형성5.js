//호석이네 학교는 6학년이 네 반이 있는데 각 반의 대표를 세 명씩 선발하여 제기차기 시합을 하였다. 

//반별로 세 명이 제기를 찬 개수를 입력받아 각 반별로 제기를 찬 개수의 합계를 출력하는 프로그램을 작성하시오.

/* 1class? 15 2 35
2class? 33 1 6
3class? 5 10 19
4class? 1 8 55 */

const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []  // 배열 준비
const NUM_CLASS = 4;

process.stdout.write(`${input.length + 1}class? `);

rl.on("line", function(line){
    input.push(line.trim().split(/\s+/).map((e) => parseInt(e)));
    if(input.length == NUM_CLASS)
        rl.close();
    else
        process.stdout.write(`${input.length + 1}class? `);
})
 
rl.on("close", function(){
    input.forEach((e, i) => {
        let total = input[i].reduce((a, b) => a + b);
        console.log(`${i + 1}class : ${total}`);
    })
})