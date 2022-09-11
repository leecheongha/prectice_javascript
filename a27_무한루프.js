// 무한루프 (infinite loop)
// while(참){ ... } 항상 순환한다.
// for(;;){ ... } 무한루프가 된다

//프로그램이 무한히 돌면 안되기 때문에 반드시 어떤 조건이 되면 종료 되어야 한다.  (break, return 사용해서 종료시킨다.)

num= 1;
while(true) {
    console.log(num);
    num++;

    if(num == 5) break;
}

console.log("\n[프로그램 종료]", '\n'.repeat(20));
































