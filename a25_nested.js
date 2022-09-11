// 중첩 순환문 

console.log("중첩 for 문 nested for");

// 구구단 2단 ~ 9단

// 2 x 1 = 2
// ..
// 2 x 9 = 18
// 3 x 1 = 3
// ..
// 3 x 9 = 27
// ...
// 9 x 1 = 9
// ..
// 9 x 9 = 81

// for(i=1; i<=9; i++){

   
//     for(j=1; j<=9; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
    
// }


let i=2;
let j=1;
while(i<=9){

    console.log(`   ${i} 단`);

    while(j<=9){
        console.log(`${i} x ${j} = ${i*j}`);
        j++;
    }
    i++;
    j=1;
    console.log();
}



console.log("\n[프로그램 종료]", '\n'.repeat(20));
































