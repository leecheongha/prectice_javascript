/*******************************
 * 단어의 앞 글자로만 만들어진 문자열
 * 
 * const strArr = ['hello', 'my', 'name', 'is'];
console.log(strArr.join('')); //조인 배열을 문자열로 반환한다.
 */

const input = [
    "The community at Code States might be the biggest asset", // -> TcaCSmbtba
    "i am a PROGRAMMER",     // -> iaaP
    "THAT ELEPHANT IS BIG",  // -> TEIB
]

// arr1= input[0];
// arr2= input[1];
// arr3= input[2];
 
// let str = input.join(); //배열을 하나의 문자열로 만든다.
// console.log(str.split());

// str1 = arr1.split(' ');

// console.log(str1);

// console.log(str1[1].slice(0,1));


// const bind=[];

// for(i=0; i<str1.length; i++){

//  bind.push(str1[i].slice(0,1));

// }
// console.log(bind);

// console.log(bind.join('')); 



function makeString(str){

    str1 = input[0].split(' ');
    str2 = input[1].split(' ');
    str3 = input[2].split(' ');


    const bind1=[];

    for(i=0; i<str1.length; i++){
    
     bind1.push(str1[i].slice(0,1));
    
    }
    
    console.log(bind1.join('')); 

    const bind2=[];

    for(i=0; i<str1.length; i++){
    
     bind2.push(str1[i].slice(0,1));
    
    }
    
    console.log(bind3.join('')); 

    const bind3=[];

    for(i=0; i<str1.length; i++){
    
     bind3.push(str1[i].slice(0,1));
    
    }
    
    console.log(bind3.join('')); 
}


input.forEach(e => console.log(makeString(e)));