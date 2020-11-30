
function max(arr) {
    return Math.max(...array);
}

function min(arr) {
    return Math.min(...array);
}

function mean(arr, numbers) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length
}

//const array = [3, 5, 7, 4, 3, 6, 2]
//console.log(mean())
//console.log(min())
//console.log(max())