function solution([input]) {
    let arr;
    arr = input.split(' ');

    let num1 = Number(arr[0]);
    let num2 = Number(arr[1]);
    let num3 = Number(arr[2]);

    if (num1 + num2 == num3) {
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`);
    }
    else if (num1 + num3 == num2) {
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`);
    }
    else if (num3 + num2 == num1) {
        console.log(`${Math.min(num3, num2)} + ${Math.max(num3, num2)} = ${num1}`);
    }
    else {
        console.log('No');
    }
}

solution(['8 15 7']);

//Not working completely:
//function threeIntegersSum(arr){
//    let nums = arr[0].split(' ').map(Number);
//    console.log(
//        check(nums[0], nums[1], nums[2]) ||
//        check(nums[0], nums[2], nums[1]) ||
//        check(nums[1], nums[2], nums[0]) || 'No');
//
//    function check(num1, num2, sum){
//        if (num1 + num2 != sum){
//            return false;
//        }
//        if (num1 > num2){
//            [num1, num2] = [num2, num1]; //swap num1 and num2
//            return `${num1} + ${num2} = ${sum}`;
//        }
//    }
//}
//
//threeIntegersSum(['8 15 7']);

//function solution ([input]){
//let numbers = input.split(' ').map(x => Number(x));
//numbers.sort((a, b) => a - b); }