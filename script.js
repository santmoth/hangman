'use strict';
/*
    WEB230 Final Project Winter 2020
    {your name here}
*/
//  const word = ["camel", "stallion", "coati", "antelope", "coyote", "porpoise", "cheetah", "iguana", "fox", "hamster"];

//  const randomAnimal = (word) => {
//      return (word [Math.floor(Math.random() * word.length)].length)
//  }
// const randomAnimalGenerator = randomAnimal(word);

// console.log(randomAnimalGenerator);
// let str = '_'.repeat(randomAnimalGenerator)
// console.log(str);
// document.getElementsByClassName('word')[0].innerHTML = str;
//var is function level scope
//const , let is block scope
// var can be redclear and re-assinged value on it 
// var aa = 10;

// console.log(a)
// function test(a) {
//     var aa = 100;
//     //var b; //javascript hoisting 
//     if ( a > 10) {
//        let b =10;
//        if (b  == 10) {
//            var c = 20;
//        }
//         console.log(c)
//         //https://medium.com/@narayansharma91/javascript-hoisting-a8b0300fc58b
// //console
//     }
// console.log(aa) //?
//     console.log('b', b)
// }
// c = 10;
// test(11);
// console.log(aa)//? 

document.addEventListener("keypress", function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
        clickEvent(event.key.toUpperCase());
    }
})

const clickDiv = () => {
    let srtConcat = ""
    for (let i = 65; i < 91; i++) {
        let str = String.fromCharCode(i);
        srtConcat += '<span id="' + str + '" onclick = "clickEvent(\'' + str + '\')"> ' + str + '</span>'
    }
    document.getElementsByClassName("letters")[0].innerHTML = srtConcat;
}

let incorrectVal = 0;
const clickEvent = (paramValue) => {
    console.log(paramValue);
    if (incorrectVal <= 5) {
        if (randomName.includes(paramValue)) {
            randomWord(randomName, paramValue);
            colorPick(paramValue, 'green');
        } else {
            if (incorrectVal < 6 && randomName.length !== indexVal.length) {
                incorrectVal += 1
                document.getElementById("hangman").src = "images/hang" + incorrectVal + ".png"
                colorPick(paramValue, 'red');
            }
        }
    }
}

const colorPick = (paramValue, color) => {
    document.getElementById(paramValue).setAttribute('style', 'border:' + color + ' 1px solid !important;padding:5px; border-radius:5px');
}


let indexVal = [];
let keypressed = "";
const randomName = "SANTHOSH";
const randomWord = (randomName, eventKey = '') => {
    let random = "";
    if (eventKey == '' || !keypressed.includes(eventKey)) {
        keypressed += eventKey
        if (indexVal.length !== randomName.length) {
            for (let i = 0; i < randomName.length; i++) {
                if (randomName[i] == eventKey) {
                    random += randomName[i];
                    indexVal.push(i);
                } else {
                    if (indexVal.includes(i)) {
                        random += randomName[i];
                    } else {
                        random += '_';
                    }
                }
            }
            if (randomName.length == indexVal.length) {
                document.getElementById("hangman").src = "images/win.png"
                document.getElementsByClassName("win")[0].style.display = "block";
            }
            document.getElementsByClassName("word")[0].innerHTML = random;
        }
    }

}
randomWord(randomName);


const refreshClick = () => {
    indexVal = [];
    incorrectVal = 0;
    keypressed = "";
    clickDiv();
    randomWord(randomName);
    document.getElementById("hangman").src = "images/hang0.png"
    document.getElementsByClassName("win")[0].style.display = "none";
}
clickDiv();





// /*
/// Dependency Management tool
// npm (node packages management)
// composer (php)
// java (meaven)


// 1. function declration
// 2. function calling
// 3. function without parameters
// 4. function with parameters
// 5. function with default parameters
// 6. function with return
// 7. function without return statement
// */
// //1. function decleartion
// // start with function keyword
// //  const a = (a) => return a *2; 

// //function getName() {//function without parameters
//   //  console.log('narayan sharma')
// //}
// //getName();//function invocation

// //const getName = () => {
//   ///  console.log('narayan sharma');
// //    return 'narayan sharma'
// //}
// //getName();//invocation

// const firstName = 'santosh';
// const lastName = 'sharma'
// const age = 25;
// const getFullName = (firstName = 'suman', lName = 'paudel') => {
//     // if ((firstName === 'santosh' && lName === 'paudel') || (firstName !== 'narayan')) {
//     //     console.log('my name is santosh')
//     // } else {
//     //     return `${firstName} ${lName}`; 
//     // }

//      return `${firstName} ${lName} age ${age}`; 
// }
// //const myName = 
// const myname = getFullName(firstName, lastName,age )// santhosh sharma 25
// const myname1 = getFullName(firstName, 'thapa',) //suman thapa 23
// const myname2  = getFullName('sumithra');//sumithra paudel 25
// const myname3 = getFullName();//suman paudel 25

// //getFullName(firstName, 'paudel')

// console.log(myName);


// function myFunction(p1,p2){
//          return p1*p2;
// }

//         const myFunction = (p1,p2) =>{
//             return p1*p2;
//         }

//         let assignFunction = myFunction(4,2)
//         console.log('assignFunction',assignFunction);


// function toCelsius(f) {
//          return (5/9) * (f-32);
// }
// document.getElementById("demo").innerHTML = toCelsius;

function register(value) {
    return new Promise((resolve, reject) => {
        console.log('set timeout')
        setTimeout(function () {
            try {
                console.log('register success')
                const result = 10 / value;
                if (result == 'Infinity') {
                    throw 'infinity'
                } else {
                    return resolve(result);
                }

            } catch (error) {
                return reject("this is exception");
            }
        }, 5000);
    })

}
function sendemail() {
    return new Promise((resolve, reject) => {
        return resolve('true')
    })
}
function confirmationEmail() {
    console.log('confirmation email')
}

function notifyAdmin() {

}
//console.log('start here')
//new Promise((resolve, reject) => {
console.log('start')

    (async () => {
        const registerRespoinse = await register(1)
        const returnValue = await sendemail()
        confirmationEmail();
        console.log(registerRespoinse)
    })();

    /*
1. Promise (status, functions)
2. asyn await
23. self invoke function
4. destruciting
5. modules




    */

        // const registerRespoinse = register(1).then(async response => {
        //     console.log('succesfully regisered')
        //     const returnValue = await sendemail()
        //     console.log('hello')
        //     console.log(returnValue)

        // }).catch(err => {
        //     console.log(err)
        // })
        // confirmationEmail();

        // console.log(registerRespoinse)


//})

//sendemail();//
//bc(); // after 1 minutes