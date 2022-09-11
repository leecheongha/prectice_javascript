/**********************************************
* switch - case 조건문
* 
* switch(조건값) 
* {
* case 값1: //참이냐 거짓이냐가 아니라 값이 들어온다. 브레이크문을 만나면 빠져나온다.
*	...
*	break;
* case 값2:
*	...
*	break;
*
* ...
* default:
*	...
*	break;
*}
* 	해당 조건값의 case문을 찾아서 거기서부터 break를 만날 때까지 실행을 함.
*  break를 만나게 되면 switch 문장을 종료.
*  해당하는 case가 없으면 default 문장을 실행함.
*  
*  	※ 모든 switch 조건문은 if - else if - else로 바꿀 수 있다. (할수 있어야 한다)
***************************************************/
let n=2;

switch(n){  //switch문은 차례로 다 체크하는 것이 아니라 바로 해당 케이스로 넘어간다.
    case 1:
        console.log("하나");
        console.log("ONE");
        break; //<- switch문 종료 없으면 아래쪽까지 다 나온다.
    case 2:
        console.log("둘");
        console.log("TWO");
        break; 
    
    case 3:
        console.log("셋");
        console.log("THREE");
        break; 
    
        default:
            console.log("몰라요");

}
// TODO :  n값이 짝수이면 "짝수입니다" 출력
// 홀수이면 "홀수입니다 " 출력
n = 34;

switch( n % 2 ) {
    case 0: 
    console.log("짝수입니다.");
    break;

    default: 
    console.log("홀수입니다.");
}

let point = 3.4;

switch(parseInt(point)){
    case 4:
        console.log("A학점");
        break;
    case 3:
        console.log("B학점");
        break;
    
    case 3:
        console.log("C학점");
        break;
    
    case 1:
        console.log("D학점");
        break;
    
    default:
        console.log('이번학기는 글렀군..'); 


}


/*********************
 * 중첩 switch 문
***********************/
// console.log('-'.repeat(20))






console.log("\n[프로그램 종료]", '\n'.repeat(20));






























