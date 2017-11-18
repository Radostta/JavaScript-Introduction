function solution(arr){
    let numbers = arr.map(Number);
    //arr.sort((a, b) => (a - b));
    let numbersSorted = numbers.sort((a, b) => (b - a));

    let count = Math.min(3, arr.length);

    for (let i = 0; i < count; i++){
        console.log(numbersSorted[i]);
    }

    //console.log(arr.pop());
    //console.log(arr.pop());
    //console.log(arr.pop());
}

solution(['10', '30', '15', '20', '50', '5']);