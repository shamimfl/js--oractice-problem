// problem 1 ................

const moomGives = 1000; // tk

const applePrice = 350;
const orangePrice = 350;

const totalCost = applePrice + orangePrice;

const harryGetBack = moomGives - totalCost;
// console.log(harryGetBack); // ans




// problem 2 .............

const math = 77 ;
const biology = 55;
const chemistry = 53 ;
const physics = 76 ;
const bangla = 86 ;

const totalMarks =  math + biology + chemistry + physics + bangla ;

const avarageMarks = totalMarks / 5 ;

// console.log(Math.floor(avarageMarks)) ; // ans

// {
// useFunction 

function avaragearesult (totalResult){
    const AvarageResult = totalResult / 5 ;
    // console.log(AvarageResult)
    return totalResult ;
}

avaragearesult(totalMarks)
// }





// problem 3 ...............................


const frist = 'I am going to be a' ;
const secend = ' a aswome web developer'

const oneLine = frist + 'and' + secend ;

// console.log(oneLine);



// problem 4 ...............................

function remainderNumber(number, devider){
    const remainder = number % devider ;
    // console.log(remainder);
    return number, remainder ;
}

remainderNumber(119 , 5)



// problem 5 .................

var price = 33 ;
var name = "Shabana" ;
var boxName = 'Cocola';
var price_88 = 34;
var enu = -1;
var _$box78 = 'Monika';
var home_address = "kochu khet";




// problem 6 ........
// 6) You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelo

var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
var newFruts = fruits[1]='Mango'
fruits.pop()
fruits.push('watermelon')
// console.log(fruits);


// 7) You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using
// if-else.


const me = 85 ;
const Tom = 66 ;
const Jane = 95 ;
const Petter = 56 ;
const Jhon = 40 ;

function studentResult(number){
   
    if(number >= 80){
      console.log(number , 'A')  
    }
    else if(number >= 60){
        console.log(number, 'B')
    }
    else if(number >= 50){
        console.log(number, 'c')
    }
    else if(number >= 40){
        console.log(number, 'c')
    }
    else{
        console.log(number, 'F')
    }

    
    return number ;
}


// studentResult(80)



// problem 8 ...........................

// const arr = [13, 79, 45];

// function maxNumber(array) {
//     let biggest = array[0]
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if(biggest > i){
//             return 
//         }
        
//     }
//     // return array ;
// }

// maxNumber(arr);



// function largestNumber(number){
//     let max = number[0];
//     for(let i = 0; i < number.length; i++){
//         let element = number[i];
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// let arrayNum= [22,25,40,60,80,100];
// let result = largestNumber(arrayNum);
// console.log('The Highest Number is: ',result);

function biggestNumber(num){
    let largest = num[0];
    for(let i = 0; i < num.length; i++){
                let element = num[i];
                if(element > largest){
                    largest = element;
                }
            }
            return largest;
        }
const arr = [13, 45, 77]
const result =biggestNumber(arr)

// console.log(result);



// problem 9 ..............

const a = 6 ;
const b = 8 ;
const c = 6 ;

function isIsosceles(num1, num2, num3){
    // if(num1 == num2 || num2 == num3 || num1 == num3){
    //     console.log('Isosceles')
    // }
    // else{
    //     console.log('not isIsosceles')
    // }

    // return num1, num2, num3 ;
}

isIsosceles(a, b, c)



// problem 10 ..................

const aliya = 90 ;
const daliya = 95 ;
const saliya =  60;
const maliya = 77 ;
const jalaiya = 99 ;
const khalaiya = 54 ;

const results = [aliya , daliya, saliya, maliya, jalaiya, khalaiya]

// console.log(results)

function gradResult(result){

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        // if(element >= 90){
        //     console.log("A+")
        // }
        // else if(element >= 80){
        //     console.log('A')
        // }
        // else if(element >= 70){
        //     console.log('B')
        // }
        // else if(element >= 60){
        //     console.log('C')
        // }
        // else if(element >= 50){
        //     console.log('D')
        // }
        // else if(element <  50){
        //     console.log('F')
        // }
    }
    return result;
}

gradResult(results);


// problem 11 .................


function traficSignal(signal) {
    if(signal == 'red'){
        console.log('Danger')
    }
    else if(signal == 'yellow'){
        console.log('stop')
    }
    else if(signal == 'green'){
        console.log('you can go now...')
    }
    else{
        console.log(signal, 'is not found any signal')
    }
}

// traficSignal('gree');




// problem 17..........................

const jooks = 'aske amr mon balo nei.'

// for (let i = 0; i < 50; i++) {
//     const element = jooks[i];
//     console.log(element)
    
// }
function repeatStr(str, numOfTimes) {
    var repeatedStr = "";
   
    while (numOfTimes > 0) { 
      repeatedStr += str;
      numOfTimes--; 
    }
   
    return repeatedStr; 
  }
  
//   console.log(repeatStr(jooks, 50).split('.'));

// problem 19>>>>>>>>>>>>>>>>>>>

for (let i = 58; i <= 98; i++) {
    // console.log(i)
    
}


// problem 20 ................

for(let i = 412; i <= 456 ; i += 2){
    // console.log(i)
}


// problem 31 ..........

for(let i = 1; i <= 10 ; i++){
    console.log(13*i)
}