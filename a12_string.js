// /* string 문자열 데이터
//  *
//  * string reference
//  *  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//  *  https://www.w3schools.com/jsref/jsref_obj_string.asp
//  */
// let str, str1, str2, str3;

// /*******************************
//  * 문자열 생성 
//  * 
//  * 방법1. 문자열 리터럴.  "~" 혹은 '~' 으로 생성
//  * 방법2. new String() 으로 정의 (비추)
//  */
// console.log("[문자열 생성]");

// str = "Volvo";
// str = 'Volvo';

// //new 사용

// str1 = "John";
// console.log(str1, typeof str1);
// str2 = new String("John");   
// str3 = new String("John");
// console.log(str2, typeof str2);

// console.log(str1 == str2); //true
// console.log(str1 === str2); //false
// console.log(str2 == str3); // false (JS 에선 object 끼리의 비교는 언제나 false)

// console.log('-'.repeat(20));

// str = "Hello Web\
// Application"; // 중간에 문자열을 끊어야 할 경우 역슬래시를 써주면 되지만 추천하지 않는다. 브라우저마다 다르게 작동한다.

// str = "Hello Web Appli" + 
//         "cation"; //차라리 이 방법이나 혹은 템플릿 리터럴을 사용하는 것을 추천한다.
// console.log(str);

// console.log("length: 문자개수");
// str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(str.length); //26
// str = "가나다라";
// console.log(str.length);//4
// //문자열은 워낙 자주 다루기 때문에 자유자재로 다룰 수 있어야 한다.
// /******************************************
//  * String 의 메소드들
//  * 기본적으로 string 의 대부분의 메소드들은 immutable 하다. 
//  * 즉 원본을 변화시키기 않고, 새로운 string 을 만들어 리턴한다.
//  * 
//  * immutable : 데이터를 변경할 수 없는 특성을 말한다.
//  * mutable : 데이터를 변경할 수 있는 특성이다.
 
//  * 
//  * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EB%A9%94%EC%84%9C%EB%93%9C
//  */
	
// /******************************************
//  *  문자열 안에서 문자열 찾기
//  *  indexOf(), lastIndexOf(), search()
//  *    찾은 위치 인덱스 리턴, 못찾으면 -1 리턴
//  * 
//  *  includes() : 찾으면 true 리턴
//  *  startsWith(searchValue, start) : 주어진 문자열로 시작하면 true 리턴
//  *  endsWith(searchValue, length): 주어진 문자열로 끝나면 true 리턴
//  */
// console.log('-'.repeat(20));
// console.log("[문자열 검색 indexOf(), lastIndexOf(), search(), includes()]");
// str = "Please locate where 'locate' occurs!";

// console.log(str.indexOf("locate")); //7 공백도 하나의 문자에 해당한다.
// console.log(str.lastIndexOf("locate")); //21 공백도 하나의 문자에 해당한다.
// console.log(str.lastIndexOf("John")); //-1 없는 글자는 -1을 반환한다. 이거 조건문에서 마이너스 값으로 조건식 적용하면 괜찮을거 같다.

// console.log(str.IndexOf("locate",15)); //7  15번째 부터 검색한다.
// console.log(str.lastIndexOf("locate",15)); //7  15번째 부터 역방향으로 검색한다.

// // search() : 문자열 안에서 문자열 찾기
// console.log(str.search("locate"));  // 7

// // search() vs indexOf() : 둘은 다르다!
// // 	search() : 두번째 매개변수 없다, regexp 사용가능
// // 	indexOf() : regexp 사용 불가
// //두번째 매개변수가 필요할 때는 search는 사용할 수 없다.

// //정규표현식 : 문자열 패턴을 정할수 있는 것

// console.log(str.includes("locate"))
// console.log(str.includes("abc"));

// console.log(str.startsWith("Please")); //true
// console.log(str.startsWith("please")); //false
// // startsWith는 대소문자를 구분한다.

// console.log(str.endsWith("occurs"));
// console.log(str.endsWith("occurs!"));


// /***********************************************
//  *  문자열 추출
//  *  slice(start, end) : start 부터 'end직전'까지 문자열 추출
//  *  substring(start, end)
//  *  substr(start, length) : start 부터 length 개의 문자 추출
//  */
// console.log('-'.repeat(20));
// console.log("[문자열 추출 slice(), substring(), substr()]");
// str = "Apple, Banana, Kiwi";

// console.log(str.slice(7, 13)); 
// //slice 문자열의 일부분을 추출한다.
// console.log(str) //원본 변화가 없다.  immutable하다.

// console.log(str.slice(-12, -6));  // 음수 인덱싱 가능하다.
// console.log(str.slice(7));  // 음수 인덱싱 가능하다.


/*******************************
 * 문자열 치환
 *  replace() : 치환한 결과 문자열 리턴, 정규표현식 사용 가능
 *  기본적으로 첫번째 '매칭된 문자열 만 치환
 */
console.log('-'.repeat(20));
console.log("[문자열 치환 replace()]");
str = "Please visit Japan!";

console.log(str.replace("Japan", "Korea"));
console.log(str); //  변경되지 않는다 immutable
//자바스크립트에서는 정규표현식 리터럴이 있다.
console.log(str.replace(/JAPAN/i, "Korea")); //  /JAPAN/-자바스크립트 정규표현식

str = "Please visit Japan! Go Japan";
console.log(str.replace("Japan", "Korea")); // Please visit Korea! Go Japan 바뀌긴 했는데 첫번째 것만 바뀐다.
console.log(str.replace(/JAPAN/g, "Korea")); // Please visit Japan! Go Japan / / g는 글로벌 매칭 - 전체를 다 뒤져서 바꿔준다. 


/*********************************
 * 대소문자 전환
 *  toUpperCase(), toLowerCase() //자주 사용되는 메소드
 */
console.log('-'.repeat(20));
console.log("[대소문자 전환 toUpperCase(), toLowerCase()]");
str = "Hello World!";



/*********************************
 * 문자열 연결 
 *  concat()
 */
console.log('-'.repeat(20));
console.log("문자열 연결 concat()");
str1 = "Hello";
str2 = "World";
 
console.log(str1 + " " + str2);
console.log(str1.concat(" ", str2));
console.log("a".concat("b"+"c"+"d"));


/**********************************
 * 좌우 공백 제거 
 *  trim()
 */
console.log('-'.repeat(20));
console.log("좌우 공백 제거 trim()");
str = "       Hello World!        ";

console.log(`[${str}]`);
console.log(`[${str.trim()}]`);


/************************************
 * 문자열 앞/뒤로 패딩문자 추가
 *  padStart(), padEnd()
 *  ECMA2017 에서 추가 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */
console.log('-'.repeat(20));
console.log('[문자열 앞/뒤로 패딩문자 추가]');
str = "5";

console.log(str);
console.log(str.padStart(4)); //   5
console.log(str.padStart(4,"x")); //  xxx5
console.log(str.padEnd(4)); // 뒤쪽에 공백이 붙는다.
console.log(str.padEnd(4,"x")); //두번째 매개변수에 문자를 지정해주면 5xxx 뒤쪽에 붙는다.
console.log(str.padStart(10, "*-"));


// number 를 5자리 + 우측정렬로 표시하기
let num1 = 11, num2 = 2345, num3 = 761;
// -----
//    11
//  2345
//   76

const str3 = String(num1);
console.log(str3.padStart(5));

const str4 = String(num2);
console.log(str4.padStart(5));

const str5 = String(num3);
console.log(str5.padStart(5));

// 실수 number 를 소숫점2자리 + 총7자리 + 우측정렬 표시하기
num1 = 3.141592, num2 = 1234.2, num3 = 65.548
// -------
//    3.14
// 1234.20
//   65.55
//소수점 맞춰서 출력하는 것은 중요하다.

console.log(num1.toFixed(2).toString().padStart(7));

console.log(num2.toFixed(2).toString().padStart(7));

console.log(num3.toFixed(2).toString().padStart(7));





/***********************
 * 문자 코드
 *  charAt(position)
 *  charCodeAt(position)
 *  Property access [ ] 
 */
console.log('-'.repeat(20));
console.log("[문자 코드 [ ], charAt(), charCodeAt()]");
str = "HELLO WORLD";

console.log(str.charAt(0)); // H
console.log(str.charAt(100)); //범위를 벗어나면 아무것도 출력하지 않는다.
console.log(str.charCodeAt());// 72  대문자 H의 유니코드값이다.

console.log(str[0]);  // "H"
console.log(str[100]);  // undefined

str[0] = 'Y'; //다른 언어에서는 에러가 나지만 자바스크립트에서는 에러가 나지 않고 변경되지도 않는다. 문자열은 immutable이라 변경되지 않는다.
console.log(str);

/************************
 * 문자열 대소 비교
 */

 console.log("a" < "b");
 console.log("a" > "b");

 //1. bible 
//2. cable
//3. table
//4. able
// => 4 - 1 - 2 - 3


//1. AaAa
//2. aaAA
//3. AAaa
//4. aAaA 대문자 a가 65, 대문자 A가 97이라 소문자 a가 더 값이 작다.


/*********************************
 * string ↔ array 문자열과 배열간의 변환도 자주 사용한다.
 *   string -> array : split()  str의 메소드,  정규표현식(regexp) 사용 가능
 * 문자열을 쪼개서 그 쪼갠 문자열들을 배열로 만든다.
 *   array -> string : join()   array 의 메소드
 */
 console.log('-'.repeat(20));
 console.log("[string ↔ array]");
str = "2022-11-23"; 


let arr = str.split("-"); //split은 배열로 반환한다. split으로 쪼개서 디비에 나눠서 담는다.
console.log(arr);
console.log(arr.length);
console.log(arr[0]);


str = "Hello";
console.log(str.split("")); // [ 'Hello', 'My', 'World' ] 하나씩 쪼갠다.

str = "Hello    My      World";
console.log(str.split(" "));//공백으로 쪼갠다. 공백의 의미가 빈칸만이 아니라 탭이나 개행문자 엔터도 공백으로 친다. 이러한 문제를 해결하기 위해 정규표현식을 사용한다.
console.log(str.trim().split(/\s+/)); //[ 'Hello', 'My', 'World' ]  문장을 공백기분으로 단어 쪼갤때 trim().split(/\s+/)을 사용한다. 

arr = ["2022", "07", "28"];
console.log(arr.join("-"));//2022-07-28  join은 배열을 문자열로 만든다. 조인과 스플릿은 자주 사용하는 매서드이다.

arr = ["H", "e", "l", "l", "o"];
console.log(arr.join(""));

// 응용: 문자열 뒤집기. 

str = "자바스크립트";
console.log(str);
console.log(str.split("")); //[ '자', '바', '스', '크', '립', '트' ]
console.log(str.split("").reverse()); //[ '트', '립', '크', '스', '바', '자' ]
console.log(str.split("").reverse().join("")); //트립크스바자



// 응용: 문자열 뒤집기.  

// TODO

console.log("\n[프로그램 종료]", '\n'.repeat(20));


























