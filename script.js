function printOdds () {
    for (i = 0; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printOdds()

console.log("--------------------------------");

function divideByThree () {
    for (i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log (i);
        }
    }
}
divideByThree()

console.log("-------------------------------");

function printSequence() {
    arr = [4, 2.5, 1, -0.5, -2, -3.5];
    for (var i = 0; i< arr.length; i++) {
        console.log(arr[i]);
    }
}
printSequence()

console.log("-------------------------------");

function sigma () {
    let sum = 0;
    for ( var i = 0; i <= 100; i++) {
        sum += i;
        console.log(i + "+" + (i + 1));
    }
    console.log (sum)
}
sigma()

console.log("---------------------------------");

function factorial () {
    sum = 1;

    for (var i = 1; i <= 12; i++) {
        sum *= i;
        console.log(i + "*" + (i+1))
    }
    console.log (sum);
}
factorial()