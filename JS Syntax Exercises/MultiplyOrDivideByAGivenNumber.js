function solution(arr){
    let firstNumber = arr[0];
    let secondNumber = arr[1];

    if (firstNumber <= secondNumber){
        return firstNumber * secondNumber;
    }
    else{
        return firstNumber / secondNumber;
    }
}

console.log(solution(['3', '2']));