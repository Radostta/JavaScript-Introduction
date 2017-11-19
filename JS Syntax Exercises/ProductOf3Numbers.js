function posOrNegProduct(arr){
    let negativeNumsCount = 0;
    let isThereZero = false;

    for (let i = 0; i < arr.length; i++){
        if (Number(arr[i]) === 0){
            isThereZero = true;
        }
        if (Number(arr[i]) < 0){
            negativeNumsCount++;
        }
    }

    if (isThereZero === true){
        console.log("Positive");
    }
    else if (negativeNumsCount % 2 != 0){
        console.log("Negative");
    }
    else{
        console.log("Positive");
    }
}

posOrNegProduct(['-3', '-4', '5']);