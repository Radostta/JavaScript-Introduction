function parseJSONObject(arr) {

    let objects = arr.map(JSON.parse);

    objects.forEach(object => {
        let objectStr = `Name: ${object.name}\n` +
            `Age: ${object.age}\n` +
            `Date: ${object.date}`;
        console.log(objectStr);
    });
}

parseJSONObject(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}']);