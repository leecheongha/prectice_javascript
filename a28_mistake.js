if(10 < 4); // <-여기에 세미콜론이 있어서 실행이 됐다.
{
    console.log("실행되면 안되요");
}


let isGood = false;
if(isGood = true){ //비교 연산자가 아니라 대입 연산자라서 실행이 된다. 비교 연산자는 ==, 대입 연산자는 = 이다.
    console.log("착해요");
} else {
    console.log("나빠요");
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));



























