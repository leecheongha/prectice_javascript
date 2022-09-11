/* 대표적인 정규 표현식 
 *  구글링 하면 대표적인 정규표현식들이 많이 구할수 있습니다.
 *  각 정규표현식들을 작성해보고
 *	매칭되는 문자열과 그렇지 않은 것들을 출력해봅시다.   
 */

 
// 도우미 메소드
function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);

    if(regex.test(input)){
        console.log("   ⊙매칭⊙");
    } else {
        console.log(" X매치 없슴X");
    }
    console.log();
}

function test(regex, arrInput){
    for(input of arrInput) regExpTest(regex, input);
}

function repeat(n,f){
    for(let i=0; i< n; i++)
    f(i);
}

let logAll = function(i){
    if(i%2) console.log(i);
}
repeat(5, logAll);
//--------------------------------------------------
let title, regex, arrInput;
console.log('[많이 쓰는 정규표현식]')

{
    //─────────────────────────────────────────
    title = "URL";
    regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    
    arrInput = [

        "http://www.naver.com",
        "http://google.com"

        
    ];
    console.log(title);
    test(regex, arrInput);


    //─────────────────────────────────────────
    title = "email";
    regex = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/
    arrInput = [
        "cjdgh0012@gmail.com",
        "codlf00@naver.com"
    ];
    console.log(title);
    test(regex, arrInput);
    
    //─────────────────────────────────────────
    title = "주민등록번호";
    regex = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/
    arrInput = [
        "891029-127838",
        "000245-234890"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "날짜 YYYY-MM-DD";
    regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
    
    arrInput = [
        "2020-09-25",
        "2022-08-02"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "자연수";
    regex = /[^-\.0-9]/g;
    arrInput = [
        "100",
        "k"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "정수";
    regex = /^[0-9.]+$/;
    arrInput = [
        "234",
        "-234"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "소수";
    regex =/^(\d*)[\.]?(\d)?$/g;
    arrInput = [
        "0.1",
        "12234"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "소수점 둘째자리까지";
    regex = /^(\d*)[\.]?(\d{1,2})?$/g;
    arrInput = [
       "0.14",
       "1.23345"
    ];
    console.log(title);
    test(regex, arrInput);

    //─────────────────────────────────────────
    title = "1000 단위 콤마 자연수";
    regex = /^[+-]?[\d,]*(\.?\d*)$/;
    arrInput = [
        "123456789" 
    ];
    console.log(title);
    test(regex, arrInput);

}



console.log("\n[프로그램 종료]", '\n'.repeat(10));


