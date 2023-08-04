const arr1 = [12 , 13 , -35 ,2 ,5 , 69 ,9]
function minMax (arr){
    return{
        max: Math.max(...arr),
        min: Math.min(...arr)
    }
}
console.log(minMax(arr1));