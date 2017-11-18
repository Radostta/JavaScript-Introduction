function solution(arr) {
    let n = +arr[0];

    let symmetricArr = [];
    for(let i = 1; i <= n; i++){
        if (isSymmetric(i.toString())){
            symmetricArr.push(i);
        }
    }

    console.log(symmetricArr.join(' '));

    function isSymmetric(numAsStr) {
        let reversedArr = numAsStr.split('').reverse();
        let reversedArrToStr = reversedArr.join('');

        return reversedArrToStr === numAsStr;
    }
}

//solution(['750']);