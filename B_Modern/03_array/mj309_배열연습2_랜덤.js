// 배열 shuffle 하기
let names = `김광민 
김병제
김선경
김수영
김인진
김형주
김희선
박윤수
백태인
봉지원
설현아
소홍섭
신성주
안서영
유율현
윤소현
윤아영
이준
이청하
임진욱
장상준
정범진
조영광
진윤석
조정현
한지윤
황인호`
//하나의 문자열이다.

let name_arr = names.trim().split(/\s+/);
console.log(name_arr) //통문자열에서 배열로 만들었다.

// console.log(Math.random());   // 0.0 <=   < 1.0

result = name_arr.map(a => [Math.random(), a]);
console.log(result);
result = result.sort((a, b) => a[0] - b[0])
console.log(result);
result = result.map(a => a[1])
console.log(result);