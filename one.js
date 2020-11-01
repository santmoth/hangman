

export const product = (a, b) => {

    return a * b;

}

export const add = (d, e) => {

    return d + e;

}

a=10; 
function codeHoist(){ 
  
    if ( a ==10) {
       a = 10;
   }
    a = 10; 
    let b = 50; 
//    co
} 
codeHoist(); 


console.log(a); 
console.log(b); 

console.log(users)//reference
const PI = 3.142;//if you assign the value with immutible data we van't change it
var  users = ['namearayan']//if you assign the value with mutible data you can add or remove on it

users.push('santhosh')

PI = 22/7;/// reasign the value 

console.log(PI);

function hoist() {
  console.log(message);
  var message='Hoisting is all the rage!'
}

hoist();

for (var i=0;i<3;i++){
    console.log(i);
}
console.log(i);



var add;
var a;
var b;


add =function (){
    console.log(a+b)
}
add();//c
a=10;
b=12;