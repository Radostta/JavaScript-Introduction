function printNumbersBackwards(arr){
    let startCycle = arr[0];

    for (let i = startCycle; i >= 1; i--){
        console.log(i);
    }
}

printNumbersBackwards(['5']);