const arr1 = [1, 2, 3, 4, 5, 6, 7];
function rendomEle(arr) {
    let [ firstNum , secondNum , , , , , lastNum] = arr;
    return[firstNum , secondNum , lastNum];
}
console.log(arr1);
console.log(rendomEle(arr1));