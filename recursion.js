console.log("fibonacci:");


// if recursive is supposed to be doing the SAME thing as iterative, recursive should be
// returning a total [], but that seems uh. WAY MORE OBNOXIOUSly difficult without passing
// one in along with n, so.

function fib1(n){
    if(n <= 1){
        return n;
    }
    else{
        return fib1(n - 1) + fib1(n - 2);
    }
}

console.log(fib1(7));

function fib2(n){
    let result = [0,1];

    for(let i = 3; i <= n; i++){
        result.push(result[i-2] + result[i-3]);
    }

    return result;
}

console.log(fib2(8));






console.log('sorting:')

function mergeSort(arr){

    if(arr.length == 1){
        return arr;
    }


    const split = splits(arr);
    let leftHalf = split[0];
    let rightHalf = split[1];

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);




    let result = merge(leftHalf, rightHalf);
    return result;
}




function splits(arr){

    let half = Math.ceil(arr.length/2);

    let leftHalf = [];
    let rightHalf = arr;

    for(half; half > 0; half--){
        leftHalf.push(rightHalf.shift());
    }

    let result = [leftHalf,rightHalf];

    return result;
}

// console.log(splits([1,2]));
// console.log(splits([1,2,3,4]));
// console.log(splits([1,2,3,4,5,6,7,8,9]));



function merge(leftHalf, rightHalf){
    let result = [];

    while(leftHalf.length > 0 || rightHalf.length > 0){
        if(rightHalf.length == 0){ 
            result.push(leftHalf.shift()); 
        }
        else if(leftHalf.length == 0){
            result.push(rightHalf.shift());
        }
        else if(leftHalf[0] < rightHalf[0]){
            result.push(leftHalf.shift());
        }
        else{
            result.push(rightHalf.shift());
        }
    }

    return result;
}

// console.log(merge([1,3,4,8],[2,5,6,7]));
// console.log(merge([1,3,4,8],[2,5,6]));
// console.log(merge([1],[2,3,4]))







console.log(mergeSort([3,2,1,13,8,5,0,1]));
console.log(mergeSort([105,79,100,110]));

console.log(mergeSort([1,4,3,5,2]));
console.log(mergeSort([1,4,3,2]));
// console.log(mergeSort([1,2,3,4]));
// console.log(mergeSort([1,2,3,4,5,6,7,8]));



