/*
  JSON : JavaScript Object Notation
 	주로 data 를 담기 위한 용도의 JavaScript object 구문
 	오늘날 웹, 앱 등 애플리케이션 개발에서 데이터교환의 중요한 ★텍스트★포맷.
 	
 	JSON 구문에선 무조건 쌍따옴표이다.
 		name/value 쌍에서 name은 반드시 쌍따옴표로 감싸야 한다
 		문자열 데이터는 반드시 쌍따옴표로만 감싸야 한다.
 			ex) {"name":"John"}
 		
 	JavaScript에선
 		object 에서 property name에 쌍따옴표 사용안해도 되었다.
 		문자열 데이터는 쌍따옴표 혹은 홀따옴표로 감쌀수 있다.  	
 			ex) {name:'John'}
 			
 			
 	JSON 에서 담을수 있는 data type 들
 		string, number, object(JSON), array, boolean, null
 	
 	JSON 에서 담을수 없는 data type 들
 		function, date, undefined
 		
 
 [JS 의 관련 주요함수]	
    JSON.parse()  : string -> object
    JSON.stringify() : object -> string
		-> date object 는 허용되지 않는다. (문자열로 변환된다)
		-> function은 안된다. stringify() 하면 함수는 빠진다.

 JSON 파일명 : *.json
 JSON MIME type : application/json
	
   참조
   https://www.w3schools.com/js/js_json_syntax.asp
*/
let myObj, myJSON, arr;

myObj = { name: "John", age: 31, city: 'New York' };
console.log(myObj);  // 원래는 이런 모양
console.log(JSON.stringify(myObj));// object -> string

myJSON = '{"name":"John", "age":31, "city":"New York"}';
myObj = JSON.parse(myJSON);   // object <- string
//제이슨의 프라퍼티는 반드시 ""로 감싸져 있어야 한다.
//문자열이라고 홑따옴표로 감사도 에러가 난다.
//제이슨은 무조건 프라퍼티와 문자열 둘다 쌍따옴표로 감싸야 한다.



myJSON = '{"name":"John", "age":31, "city":"New York"}';//myJSON의 타입은 문자열이다 객체X


// TODO

arr = [ "John", 'Peter', 'Sally', "Jane" ];
console.log(JSON.stringify(arr));// 변환되면서 모든 문자열들을 쌍따옴표로 바뀐다.
// TODO

//JSON 으로 변환안되는 값들
myObj = { 
	name: "John", 
	today: new Date(),    // Date() 객체는 결국 JSON변환시 "문자열"로 변환된다.
	city : "New York", 
	place : undefined,    // JSON 변환안됨
	func1 : function(){}  // JSON 변환안됨
	};
	console.log(JSON.stringify(myObj));

	//제이쓴은 데이터를 전달하기 위한 용도로 쓰인다.

console.log("\n[프로그램 종료]", '\n'.repeat(20));

//개발자도구 네트워크 탭 - 서버에서 주고받은 리퀘스트를 볼 수 있다.
























