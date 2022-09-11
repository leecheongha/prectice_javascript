const arr1 = [//오브젝트들의 배열이다.
    {
        name: 'James',
        age: 34,
        score: [100, 89, 88],
    },
    {
        name: 'Amy',
        age: 41,
        score: [56, 13, 97],
    },
    {
        name: 'Kevin',
        age: 23,
        score: [96, 88, 59],
    },
]


console.log(arr1);
// 이름 오름 차순으로 정렬


console.log(arr1);

// 이름 내림 차순으로 정렬


// 나이 오름 차순 정렬
console.log('나이 오름차순 정렬');
arr1.sort(function(a, b){
    return a.age - b.age;
});
console.log(arr1);

// 이름 내림 차순으로 정렬



// 나이 내림 차순 정렬


// score 평균 오름차순 정렬
console.log('총점 오름차순 정렬');


let result, sum
sum = arr1.age.reduce((acc, cur) => acc + cur);
console.log('sum =', sum);

// score 평균 내림차순 정렬
