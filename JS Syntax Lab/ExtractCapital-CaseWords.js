function solution(arr){
    let arrAsStr = arr.join(",");
    let words = arrAsStr.split(/\W+/);

    //words = words.filter((x) => {
        //return x === x.toUpperCase()});

    let nonEmptyWords = words.filter(x => x.length > 0);
    let upWords = nonEmptyWords.filter(isUpperCase);

    console.log(upWords.join(", "));

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }
}

solution(['We start by HTML, CSS, JavaScript, JSON and REST.\n',
'Later we touch some PHP, MySQL and SQL.\n',
'Later we play with C#, EF, SQL Server and ASP.NET MVC.\n',
'Finally, we touch some Java, Hibernate and Spring.MVC.\n']);