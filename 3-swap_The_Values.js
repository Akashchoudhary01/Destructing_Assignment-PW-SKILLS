let x = 6.9;
let y = 9.6;

function swap(x,y){
    [x, y] = [y ,x];
    return [x,y];
}
[x,y] = swap(x,y)
console.log(x,y);