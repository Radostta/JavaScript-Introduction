function addOrRemoveElements(arr){
    let resultArr = [];

    arr.forEach(element => {
        let token = element.split(' ');
        let command = token[0];
        let value = Number(token[1]);

        if (command === "add"){
        resultArr.push(value);
         }
        else{
        resultArr.splice(value, 1);
        }
    });

    resultArr.forEach(element => {
        console.log(element)
    });
}

addOrRemoveElements(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);