function solution(arr){
    let resultKey = arr.pop();
    let dict = [{}];

    arr.forEach(element => {
        let tokens = element.split(' ');
        let key = tokens[0];
        let value = tokens[1];

        if (!dict.hasOwnProperty(key)){
            dict[key] = [value];
        }
        else{
            dict[key].push(value);
        }
    });

    if (dict.hasOwnProperty(resultKey)){
        dict[resultKey].forEach(element => {
            console.log(element);
        });
    }
    else{
        console.log("None");
    }
}

solution(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);