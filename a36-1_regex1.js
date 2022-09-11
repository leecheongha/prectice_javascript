const { match } = require("assert");

/* 정규표현식 (reqular expresson)
 *
 * 문자열 검색, 치환  등의 동작에 있어서 단순한 '문자열 비교' 를 하는 것이 아니라 특정 '패턴'과 비교하고자 할때 이를 단 몇줄의 코드로 구현 가능하다
 * 주어진 문자열에서 패턴을 찾아내는 것을 '패턴 매칭(pattern matching)' 이라 한다.
 * 
 * 정규 표현식은 패턴을 정의한 것이다.
 * 
 * 사용자가 입력한 문자열 패턴 유효성 체크 등에 많이 사용한다
 * 		ex) 주민등록번호, URL, email, 비밀번호, 
 * 			날짜포맷(yyyy-mm-dd) 
 * 			전화번호(010-xxxx-xxxx) ... 
 *
 *  JavaScript 는 정규표현식 객체 (RegExp)를 사용하여 정규표현식을 다룬다
 *  
 *  정규표현식 객체 리터럴 구문 / /이거를 말한다.
 *     /pattern/modifiers  이렇게 만들면 정규 표현식이 된다.
 *
 * 정규표현식을 사용하는 주요 string 메소드
 * 주로 검색, 치환 등의 동작을 수행할때 사용된다.
 *    search(), replace(), split() 문자열 메소드이지만 정규 표현식을 쓸 수 있는 메소드이다.
 * 
 * RegExp 의 주요 메소드
 *   exec() : 패턴매칭 수행후 '첫번째 매치' 리턴 (object 로 리턴)
 *            매칭이 없으면 null 리턴
 *   test() : 패턴매칭 결과 리턴 true / false
 *   toString() : 정규표현식 문자열 리턴
 *   compile()  <-  v1.5 에서 deprecated 됨
 * 
 * string 의 정규표현식 패턴매치 메소드- match(), matchAll()
 * 
 * 정규 표현식은 JS뿐만이 아니라 모든 언어에서 사용하는 것이다.
 *
 * RegExp 공식
 *   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 *
 * 참조
 *  https://www.w3schools.com/js/js_regexp.asp
 *  https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 *
 * 정규표현식 연습 사이트 추천
 * : https://regexr.com/    (정규식 , 문자열 매칭 연습)
 * : https://regexone.com/  ( step by step 으로 연습 하기 좋음)
 * : https://regexper.com/  (특징: 시각화, 정규식을 이미지로 다운가능)
 */
let text, n, pattern, result;

console.log('[정규표현식을 사용하는 string 메소드 예]');
text = "Hello JavaScript";

// search(string)  <- 해당 'string' 을 문자열에서 찾는다.

//매개변수가 스트링이면 스트링 찾는 것이다.

console.log(text.search('JavaScript'));   // 6
console.log(text.search('javaScript'));   // -1

// search(RegExp) <- 이면 문자열이 아니라 해당 정규표현식 패턴(RegExp) 을 문자열에서 찾는다

console.log(text.search(/JavaScript/)); // 결과는 동의하지만 아래의 것은 /JavaScript/라는 패턴을 찾는 것이다.
console.log(text.search(/JavaScript/));
console.log(text.search(/javaScript/));
console.log(text.search(/javaScript/i)); //정규식은 소문자라도 매칭 시킨다.


// str1 을 문자열에서 찾아 str2 로 치환
console.log(text.replace('JavaScript', 'RegularExpression')); 
console.log(text.replace('javascript', 'RegularExpression'));

// replace(RegExp, str2)
// 정규표현식 패턴(RegExp) 을 문자열에서 찾아 str2 로 치환

//문자열이 아니라 패턴을 찾는다.

console.log(text.replace(/JavaScript/, 'RegularExpression'));
console.log(text.replace(/javascript/i, 'RegularExpression'));

//정규표현식 // 뒤에 i를 붙여주면 대소문자 구분없이 찾는다.


/**********************************************
 * JavaScript RegExp 리터럴의 modifier 들
 * 
 * / /뒤에 모디파이어들을 붙인다.
 *
 * i : case-insensitive matching  (대소문자 구분 X)
 * g : global matching 수행  (첫번째 매칭뿐 아니라 전체 매칭 수행)
 * m:  multiline matching 수행
 */

/* 정규표현식 메소드
 *
 *   exec() : 패턴매칭 수행후 '첫번째로 발견된 매치' 리턴 (object 로 리턴)
 *            매칭이 없으면 null 리턴
 *   test() : 패턴매칭 결과에 따라 true / false 를 리턴한다.
 */
console.log('-'.repeat(20));
console.log('[정규표현식 메소드 예]');
text = 'The best things in life are free!';

pattern = /e/; //문자열 아니고 정규표현식이다.

console.log(pattern.test(text)); // text 안에서 pattern 매칭 결과에 따라 true / false를 반환한다.
//text에 e가 있으므로 트루를 반환한다.

console.log(/x/.test(text));// 

console.log(pattern.exec(text));// exec는 오브젝트를 반환한다. pattetn = e 이다.

console.log(pattern.exec(text)[0]);// 이것도 동작한다.
//찾을거.exec(찾으려는 대상)->오브젝트를 반환한다.
//찾을거의 인덱스와 찾으려는 대상까지 나오게 한다.

/************************************
 * 그룹이 지정된 경우
 */
console.log('-'.repeat(20));
console.log('[그룹]')
text = "-My98KK-myABCD--My1234567--MyZZ---My789";

//그룹이 없는 정규표현식 패턴

pattern = /My..../; //정규 표현식에서 .은 문자 하나에 해당한다.
//대문자 엠과 소문자 Y로 시작하고 뒤에 문자가 4개 오는것.
//정규표현식에서 -이나 공백도 문자 하나로 인정된다.
//그래서 MyZZ--도 포함된다.
//<<exec는 매치된것 첫번째만 반환해준다.>>
console.log(pattern.exec(text));

pattern = /(My)(....)/; //정규표현시에서 패턴그룹을 지정해 주려면 ()를 해준다
//위는 그룹이 두개가 있다는 뜻이다.

console.log(pattern.exec(text));
//일단 전체 매칭된것 하나 나오고 그 밑으로 부분 매칭된것이 나온다.
console.log(pattern.exec(text).length); // 3: length 값이 1보타 크면 그룹이 지정되어 있다는 뜻이다. 'My98KK','My''98KK'이거 세개라서 3개이다.
pattern = /(My)..(..)/; // 그룹은 두개이다.
console.log(pattern.exec(text));
console.log(pattern.exec(text).length); 




/***************************
 * match(), matchAll() 
 *   string 의 메소드 string 안에서 정규표현식
 * 
 *   match() 는 매칭되는 문자열(들)의 배열을 리턴한다.
 *   matchAll() 은 전체 매칭결과(들)에 대한 for문을 돌릴 수 있는 iterator 리턴한다.
 *       <<- RegExp 는 반드시 g 옵션(글로벌 옵션)이 있어야 한다.>>
 */
console.log('-'.repeat(20));
console.log('[string 의 match(), matchAll()]')
const str = '-My98KK-myABCD--My1234567--MyZZ---My789';

const regexp = /(My)(....)/g;
console.log(regexp);
console.log(regexp.toString());

result = str.match(regexp); //매치는 문자열들의 배열을 리턴한다.

console.log(result.length);
console.log(result);//[ 'My98KK', 'My1234', 'MyZZ--' ]

result = str.matchAll(regexp);  // 매칭된 결과(들)의 iterator 리턴
//문자열이나 배열은 이터러블하기때문에 이터레이터를 돌릴수 있다.
console.log(result.length);//undefined
console.log(result);//Object [RegExp String Iterator] {}
//배열이 아니고 이터레이터객체이기 때문에 랭스가 안나온다.

// for(match of result){
//     console.log(match);
// };
//랭스값 쓸 수 없기 때문에 일반적인 for문 안되고 for of로 돌려야 한다.




//-----------------------------------
//도우미 함수
console.log('-'.repeat());
console.log('[도우미 함수]');

function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);

    let matches = input.matchAll(regex);  // 매칭 수행

    let matchCount = 0;
    for(let match of matches){
        matchCount++;
        console.log(`    매치${matchCount}: ${match[0]} {${match.index}~${match.index + match[0].length}}`);

        // 그룹이 있었다면 그룹도 출력
        if(match.length > 1){
            let start = match.index;
            for(let i = 1; i < match.length; i++){
                if(match[i]){   // group 의 결과가 undefined 가 아닌 경우
                    console.log(`\t group(${i}): ${match[i]} {${start}~${start + match[i].length}}`);
                    start += match[i].length;
                }
            }
        } // end if
    }  // end for



}


regExpTest(/My..../g, str);//그룹이 없는 경우
regExpTest(/My(....)/g, str);
regExpTest(/(My)(....)/g, str);

//그냥 문자열로 정규표현식식을 주면 글로벌로 동작한다.

   // 그룹이 있었다면 그룹도 출력
      // 1보다 크다면 그룹이 있다는 뜻이다. 간혹 그룹의 괄과가 언디파인드가 나오는 경우가 있다.

console.log("\n[프로그램 종료]", '\n'.repeat(20));