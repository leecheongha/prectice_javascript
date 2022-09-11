/* 정규표현식 에 사용하는 각종 표현식들
 * 	정규표현식		설명
 * 	^			문자열 시작
 * 	$			문자열 종료
 * 	.			임의의 문자 [단 ‘'는 넣을 수 없습니다.]
 * 	*			앞 문자가 0개 이상의 개수가 존재할 수 있습니다.
 * 	+			앞 문자가 1개 이상의 개수가 존재할 수 있습니다.
 * 	?			앞 문자가 없거나 하나 있을 수 있습니다.
 * []			문자의 집합이나 범위를 표현합니다. -기호를 통해 범위를 나타낼 수 있습니다. ^가 존재하면 not을 나타냅니다.
 * {}			횟수 또는 범위를 나타냅니다.
 * ()			괄호안의 문자를 하나의 문자로 인식합니다. (그룹)
 * |			패턴을 OR 연산을 수행할 때 사용합니다.
 * \s			공백 문자
 * \S			공백 문자가 아닌 나머지 문자
 * \w			알파벳이나 숫자
 * \W			알파벳이나 숫자를 제외한 문자
 * \d			[0-9] 숫자
 * \D			숫자를 제외한 모든 문자
 * 
 * 
 * 정규표현식에 사용되는 escaped character 들
 *    \.[]{}()<>*+-=!?^$|
 */

// 도우미 메소드
function regExpTest(regex, input){
    console.log("[정규표현식 매칭 테스트]-----------------");
    console.log("정규표현식:", regex);
    console.log("입력문자열:", input);

    let matches = input.matchAll(regex);  // 매칭 수행

    let matchCount = 0;
    for(let match of matches){
        matchCount++;
        console.log(`    매치${matchCount}: ${match[0]} {${match.index}~${match.index + match[0].length}}`);
        // 그룹이 있다면 그룹도 출력        
        if(match.length > 1){
            let start = match.index;
            for(let i = 1; i < match.length; i++){
                if(match[i]){  // group 결과가 undefine 가 아닌 경우
                    console.log(`\t group(${i}): ${match[i]} {${start}~${start + match[i].length}}`);
                    start += match[i].length;
                }
            }
        }
    }
    
    (matchCount == 0) && console.log(" X매치 없슴X");
    
    console.log();
}

function test(regex, arrInput){
    for(input of arrInput) regExpTest(regex, input);
}

//--------------------------------------------------
let title, regex, arrInput;

{
    //─────────────────────────────────────────
    title = "^ : 바로 문자뒤의 문자열로 시작됨";
    regex = "^The"; // The로 시작하는 패턴 /^The/g; 이렇게 해도 된다.
    arrInput = [
        "The Things", //The로 시작하므로 매칭이 된다.
        "On The Things",////The로 시작하지 안흥므로 안된다 매칭이 된다.
        " The The The", //앞에 공백이 있어서 실행 안된다

        "There you go",


        
    ];

    //─────────────────────────────────────────
    title = "$ : 문자열의 마지막이 이 문자열로 마무리 됨";
    regex = "Man$"; //Man으로 끝나는 패턴 
    arrInput = [
        "SuperMan",  // 1
        "AquaMan",   // 2
        "WonderWoman",  // 3
        "WonderWoMan",  // 4
        "PostMan ",   // 5
        
    ];

    //─────────────────────────────────────────
    // title = "^표현식$ : 입력 문자열 전체가 정확하게 전체패턴매칭되는 문자열을 원할경우 앞에는 ^ 뒤에는 $을쓰는 경우가 많다.;
    regex = "^SuperMan$"; //슈퍼맨으로 시작해서 슈퍼맨으로 끝나야 한다.
    arrInput = [
        "SuperMan",
        "Super Man",
        " SuperMan",
        "SuperMan ",
    ];

    //─────────────────────────────────────────
    title = " . : 어떤 문자든지 임의의 '한문자'를 말한다.꼭 하나의 문자와 매칭"; //숫자, 언더스코어도 포함된다.
    regex = "x.z"; 
    arrInput = [
        "xyz", 
        "xxzdfdk",
        "aa10x9zbxbz",
        "xz",
        "90x zxx_zdf",  
        "xbz",				
        "xyyz",
    ];

    //─────────────────────────────────────────
    title = " * : 바로 앞의 문자가 없어도 되고 한개 이상의 경우를 매칭";
    regex = "ab*";//a로 시작 b는 없어도 되거나 여러개 와도 된다.
    arrInput = [
        "a",  // 1
        "abc", // 2 ab까지만 매칭 된다.
        "ab", // 3
        "abbbaaaabababbab", // a하나짜리도 포함해야 하므로 8개 이다. a는 반드시 있어야 하고 b는 없어도 되거나 여러개가 와도 된다.
        "bbba",  // 5
        "cdef",  // 6
    ];

    //─────────────────────────────────────────
    // title = " + : 바로 앞의 문자가 한개 혹은 그 이상이면 매칭이 된다.";
    regex = "ab+"; //a로 시작하고 b는 반드시 한개 이상이 와야 한다.
    arrInput = [
        "a",  // 1
        "abc", // 2 //ab까지만 된다.
        "ab", // 3
        "abbbaaaabababbab", // 4
        "bbba",  // 5
        "cdef",  // 6
    ];
    //─────────────────────────────────────────
    // title = " ? : 바로 앞의 문자가 한개 있거나 없는것을 매칭";
    regex = "ab?";//a로 시작하고 b는 하나 있어나 없어야 한다.
    arrInput = [
        "a",  // 1
        "abc",  // 2
        "kkabcc",  // 3
        "abbbaaaabababbab", // 4
        "bbba"  // 5
    ];

    //─────────────────────────────────────────
    title = " [] : 안에 존재하는 문자들중 한 문자만을 매칭이 된다.";
    regex = "[abc]";
    arrInput = [

        "able", // 1
        "bible",  // 2
        "cable",  // 3
        "xenosys", // 4	
    ];
    regex = "[abc]+";

    regex = "[a-z]+";    // 

    arrInput = [
        "abc100",
        "abcDefGHIUJ-KLM123opQrstuz",
        "가나abc다힣",
    ];
    regex = "[a-zA-Z]+";
    regex = "[a-zA-Z0-9]+";
    regex = "[a-zA-Z0-9-]+";
    regex = "[가-힣]+";
    


    //─────────────────────────────────────────
    title = " {} : 앞에 있는 문자나 문자열의 등장개수를 정함";
    regex = "ab{2}"; //a로 시작하고b는 두개가 뒤따라오는 패턴
    arrInput = [
        "abb",
        "abbb",
        "abbbabbbbbbbbabaabab",
    ];

    regex = "ab{2,}"//b의 개수가 두개 이상이면 매칭이 된다.
    regex = "ab{3,5}";//뒤따라 오는 b의 개수가 3~5개 까지

    //─────────────────────────────────────────
    title = " () : ()안에 있는 글자들을 그룹화 ";
    regex = "a(bc)*"; //(bc)가 없거나 하나 이상
    arrInput = [

        "abc",
        "abcbcbbac",
        "abcabcabc",
    ];

    //─────────────────────────────────────────
    title = " | : OR 연산자  역할";
    regex = "a | b";// a 또는 b 둘중 하나
    arrInput = [
        "a",
        "b",
        "ab",
        "xyz"
    ];		

    regex = "(a|b)+"; // a 또는 b가 한개 이상 +는 한개 이상이라는 으미

    //─────────────────────────────────────────
    title = "i옵션 : 대소문자 구분안하고 매칭 ";  // 타 언어 정규표현식과 다름
    regex = "/abc/ig";
    arrInput = [
        "abc", "Abc", "ABC", //다 매칭 된다.
    ];

    //─────────────────────────────────────────
    title = "\\s : 공백,  \\S : 공백아닌 문자";   // 공백 : 띄어쓰기, \n, \t, \r ... 역슬래시 두개 쓴 이유는 문자열 안에서 역슬래시 출력하려면 역슬래시를 두개 써야 한다. 이스케이프문자이다.
    regex = /\s+/g;
    arrInput = [
        "Hello My World",
        "He \tllo My World",
        "\n\t Hello My World\n\n",
    ];

    regex = /\S+/g;

    //─────────────────────────────────────────
    title = "\\w : 알파벳이나 숫자, \\W 알파벳이나 숫자를 제외한 문자";
    regex =/\w+/;
    arrInput = [
        "This is 2022-08-03 !!",
    ];
    regex = /\W+/g; //"\W+";이렇게 하면 안된다. 문자열 할때는 이스케이프문자가 들어가서 역슬래시를 두개 써줘야 한다. 문자열 안에서 이스케이프문자는 역슬래시를 의미한다.

    regex = "\\W+";
    regex = `\\W+`;

    //─────────────────────────────────────────
    title = "\\d : [0-9] 숫자, \\D 숫자를 제외한 모든 문자";
    regex = /\d+/g; //  \d  \D
    arrInput = [
        "This is 2022-08-03 !!",
    ];
    regex = /\D+/g;//숫자를 제외하고 매칭된다.

    //─────────────────────────────────────────
    title = "escaped character 매칭 시키기";
    regex = ".+";// .은 모든 문자를 의미하기 때문에 다 나온다.

    regex = "[.]+";//[]안에서는 .을 이스케이프 문자가 아니라 .으로 인식한다.
    regex = /\.+/g; // / /안에 역슬래시 \.을 넣으면 .만 나온다.
    arrInput = [
        "My name is ..",
    ];

}

//검색기능에서 별표 키고 찾으면 더 잘 찾을 수 있다.
//정규표현식은 읽기가 좀 힘들지만 대안이 없다.

//*****************************************
// 패턴매칭 수행
console.log(title);
test(regex, arrInput);

console.log("\n[프로그램 종료]", '\n'.repeat(10));


