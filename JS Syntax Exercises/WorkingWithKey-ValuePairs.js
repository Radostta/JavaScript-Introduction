function solution(arr){
    let resultKey = arr.pop();
    //let resultKey = arr.splice(arr.length-1, 1)[0];

    let dict = {};

    arr.forEach(element => {
        let tokens = element.split(' ');
        let key = tokens[0];
        let value = tokens[1];

        dict[key] = value;
    });

    if (dict.hasOwnProperty(resultKey)){  //equivalent to .Contains in c#
        console.log(dict[resultKey]);
    }
    else{
        console.log("None");
    }
}

solution(['3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4']);