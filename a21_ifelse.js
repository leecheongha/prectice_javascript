/****************************************
*	제어문 (Control) : 프로그램의 흐름을 제어한다.(변경)
*	1. 조건문(Conditional)
*	: if ~ else, switch ~ case
*
*	2. 순환문(loop)
*	: for, while,  do ~ while(오늘날 거의 쓰지 않는다.)
*****************************************/

let n = 21;

/**********************************
 * if(조건식) <-- 조건식이 '참'이면
 *   그 다음의 '한 문장' 혹은 '한 블럭' 을 실행시킨다
 *   '거짓'이면 실행하지 않고 넘어간다 
 * *********************************/

// n 이 짝수이면 "짝수입니다" 라고 출력
if(n % 2 == 0)
    console.log("짝수입니다");

// n 이 3의 배수이면 "3의 배수입니다" 라고 출력
if(n % 3 == 0){
    //위의 조건식이 참일때 수행하는 문장이다. if문은 참일때만 실행된다.
    console.log(`${n}`)
    console.log("3의 배수입니다");
}
   

/*********************************************
*	if(조건식)
*		'참'일때 수행
*	else
*		'거짓'일때 수행
*
*
*	if(조건식1)
*		조건식1 이 '참' 일때 수행
*	else if (조건식2)
*		조건식2 가 '참' 일때 수행
*	else if (조건식3)
*		조건식3 가 '참' 일때 수행
*	..
*	else
*		위 조건식들 모두 거짓일때 수행
************************************************/
console.log('-'.repeat(20));
n = 49;

if(n % 2 == 0){
    console.log("짝수입니다");
} else {
    //else는 위의 조건식이 거짓(false)일때 수행한다.
    console.log("홀수입니다");
}

/**************************
 * if .. else if .. else if...
 *************************/
let point = 2.8;

if(point >= 4.0) {
    console.log("A학점 입니다.");
} else if(point >= 3.0) {
    console.log("B학점 입니다.");
} else if(point >= 2.0) {
    console.log("C학점 입니다.");
} else if(point >= 1.0) {
    console.log("D학점 입니다.");
}else {
    console.log("F학점 입니다.");
}

/*****************************
 *  중첩 조건문 (nested - if, nested - switch)
 *****************************/
console.log("-".repeat(20));

/* 
* 정수 n 값에 대해
* 
*  1. n이 짝수이면 "짝수"라고 화면 출력, 
*  2. 아니면 "홀수"라고 화면 출력
*     
*     1-1. n이 짝수인 경우에, n이 8의 배수이면 "8의 배수"  출력
*     1-2. n이 짝수인 경우에, n이 8의 배수가 아니면 "짝수, but 8의 배수 아님" 출력
*     
*     2-1. n이 홀수인 경우에, n이 3의 배수이면 "3의 배수"  출력
*     2-2. n이 홀수인 경우에, n이 3의 배수 아이면  "홀수, but 3의 배수 아님"  출력
*/

n = 21;

if(n % 2 == 0) {
    console.log("짝수 입니다.");
if(n % 8 == 0) {
    console.log("8의 배수 입니다.");
} else {
    console.log("짝수이지만, 8의 배수는 아닙니다.");
}
} else { console.log("홀수입니다");
    if(n % 3 == 0) {
        console.log ("3의 배수 입니다.");
    }else {
        console.log ("홀수이지만, 3의 배수는 아닙니다");
    }

}






/* 실수값은 정밀도(precision) 의 문제가 있기 때문에
 * 산술계산 결과값 등의 '같은값 여부' 비교는 하지 말자 
 */


console.log("\n[프로그램 종료]", '\n'.repeat(20));





























