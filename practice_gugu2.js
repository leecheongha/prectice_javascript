//조건문 순환문 다 적용하기
//월요일 시험도 조건문 순환문 관련된 것
//오늘 저녁 11시까지

//구구단이 n개 열로 출력될수 있도록 작성해보세요


// for(i=0; i<=9; i++){
//  spread[0]=3;
// //     for(i=1; i<=9; i++){
// //     for(j=1; j<=9; j++){
// //     console.log(`${i}x${j}=${i*j}`);
// // }
// // }



// console.log(spread[0]);
// for (let i = 0; i <=9 ; i++) {
//   squared.push(array[i] * array[i]);
// }




let x = [

    a= function(){
        for(i=1; i<=9; i++){
       console.log(`2x${i}=${2*i}`);
   }
},
    b= function(){
    for(i=1; i<=9; i++){
   console.log(`3x${i}=${3*i}`);
}
},
    c= function(){
    for(i=1; i<=9; i++){
   console.log(`4x${i}=${4*i}`);
}
},
    d= function(){
    for(i=1; i<=9; i++){
   console.log(`5x${i}=${5*i}`);
}
},
    e= function(){
    for(i=1; i<=9; i++){
   console.log(`6x${i}=${6*i}`);
}
},
    f= function(){
    for(i=1; i<=9; i++){
   console.log(`7x${i}=${7*i}`);
}
},
    g= function(){
    for(i=1; i<=9; i++){
   console.log(`8x${i}=${8*i}`);
}
},
    h= function(){
    for(i=1; i<=9; i++){
   console.log(`9x${i}=${9*i}`);
}
},

];

const spread = [];
for (var i = 0; i <= 7; i++) { // 배열 x의 모든 요소의 인덱스(index)를 출력함.
    spread[i]=x[i];
} 


const ROW = 3;
const COLUMN = 3;

const arr = new Array(ROW);  // [empty x ROW]

// 이차원 배열의 열을 COLUMN으로 지정 

for (var i = 0; i <= COLUMN; i++) {
    arr[i] = new Array(ROW);

    if(i=0){
    for(var j =0; j<= 3; j++){
    arr[i][j] = spread[j];
    }
    } else if(i=1){
        for(var j =0; j<= 3; j++){
        arr[i][j] = spread[4+j];
        }
    } else(i=2)
        for(var j =0; j<= 3; j++){
        arr[i][j] = spread[7+j];
        
}
}




console.log(arr);

console.log("arr[0][0]",arr[1][3]);

// console.log(spread);







