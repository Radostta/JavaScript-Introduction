function turnObjectIntoJSONString(arr){
    let result = {};

    arr.map(a => a.split(' -> ')).forEach(objectTokens => {
        let property = objectTokens[0];
        let value = isNaN(objectTokens[1]) ?
            objectTokens[1] : Number(objectTokens[1]);

        result[property] = value;
    });

    console.log(JSON.stringify(result));
}

console.log(turnObjectIntoJSONString(
    ['name -> Angel', 'surname -> Georgiev', 'age -> 20',
        'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']));