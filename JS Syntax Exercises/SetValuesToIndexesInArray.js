function setValuesToIndexes(arr){
    let resultLength = arr.splice(0,1); //1 element from the first index
    let resultArr = new Array(Number(resultLength));

    for (let i = 0; i < arr.length; i++){
        let token = arr[i].split(' - ');
        let key = token[0];
        let value = token[1];

        resultArr[key] = value;
    }
    //result.forEach(element => {console.log(element)});

    for (let i = 0; i < resultLength; i++){
        if (resultArr[i] === undefined){
            console.log(0);
        }
        else{
            console.log(resultArr[i]);
        }
    }
}

setValuesToIndexes(['5', '0 - 3', '3 - -1', '4 - 2']);