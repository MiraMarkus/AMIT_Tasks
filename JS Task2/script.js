
// ======================================== PART 2 

// ====================================== 1- print numbers from 1 to 10 ================================================
console.log("Q1")

function printNumbers(){
    for ( var i = 1 ; i <= 10 ; i++){
        console .log(i);
    }
}

printNumbers()



// ====================================== 2- print a 2D array ================================================
console.log("\n Q2");

function printArray(arr) {
    
    for (var i = 0 ; i < arr.length ; i++){
        for (var j = 0 ; j < arr[i].length ; j++){
            console.log(arr[i][j]);
        }
    }
}

var arr = [[1,2] , [3,4] , [5,6]]
printArray(arr) 



// ====================================== 3- print Even numbers in given array ================================================
console.log("\n Q3");

(function printEven(){
    var arr = [13 , 23 , 12 , 45 , 22 , 48 , 66 , 100]
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }
})  ()



// ====================================== 4- delete all occurrence of element in given array ================================================
console.log("\n Q4");

function deleteElement(arr , n){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] === n){
            //arr.splice(arr.indexOf(n) , 1)
            return arr.filter(i => i !==n)        }
    }
}

var arr = [23 , 56 , 4 , 78 , 5 , 63 , 45 , 210 , 56]
arr = deleteElement(arr , 56)
console.log(arr)



// ====================================== 5- find the power of a number using for loop ================================================
console.log("\n Q5");

function numPower(x , y){
    pow = 1
    for(var i = 0 ; i < y ; i++){
        pow = pow*x
    }
    return pow;
}
console.log(numPower(4,3));



// ====================================== 6- print a pattern using for loop ================================================
console.log("\n Q6");

function printPattern(n){
    for(var i = 1 ; i <= n ; i++){
        var str = ""
        for(var j = 1 ; j <= i ; j++){
            str += j + " "
        }
        console.log(str);
    }
}

printPattern(8)



// ====================================== 4- find the largest number in an array ================================================
console.log("\n Q7");

var arr = [2 , 45 , 3 , 67 , 34 , 567 , 34 , 345 , 123]
var largest = arr[0]
for (var i = 0 ; i < arr.length ; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
    else{
        largest = largest
    }
}

console.log(largest);







