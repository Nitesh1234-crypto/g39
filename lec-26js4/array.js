// let arr=[]
// console.log(arr[0]);
// //1 . in javascript arrays are resizable;
// //2. in js you can add mix data type value;
// //3 in js array are 0-indexed
// //4 in js arrays are object

// let val=[1,2,"abc","banana","tomato",true];
// console.log(val);

// let firstElement= val[0];
// let someElement=val[99];
// console.log(firstElement);
// console.log(someElement);


// //array methods;
// //1. length
// console.log(val.length)

// //2.push --> insert value in array at last;
// val.push("xyz");
// // val.push(undefined);
// console.log(val.length);
// //3.pop --> remove last index value and return that value
// let res=val.pop(); 
// console.log(val);
// console.log(res);
// let last= val[val.length-1];
// console.log(last);
// console.log(val);

// val.unshift(8);
// console.log(val);
// val.unshift(9,5,3);
// console.log(val);


//copy an array
//1. shallow copy; --> it copy an array with reference of the previous one
let arr1=[1,2,3];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
// console.log(arr1==arr2);
arr2[0]=10
console.log(arr1);
console.log(arr2);
// deep copy; --> create a new array and copy the element of previous array;
// --> spread operator -------> ...

let fruits=["orange", "pineapple", "banana"];
console.log(...fruits);

let arr3=[1,2,3];
let arr4=[...arr3];
arr4[0]=10;
console.log(arr3);
console.log(arr4);
console.log(arr3==arr4);

//slice

const animals = ["ant", "bison", "camel", "duck", "elephant"];


// let output = animals.slice(2,4); // index-2 and index-4 , index-4 will be skiped
// output.push("orange");
// console.log(output);
// console.log(animals);

//splice --> first argument is index and second argument is length
let out= animals.splice(1,4);
console.log(out);
console.log(animals);


