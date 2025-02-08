console.log("Hey this is tutorial of 55")

//var is used for global scope where as let is used as block scope
//const is also gloabal scope but its value can't be changed

let a=5;
a=a+1;
let b=6;
let c="Nav";
let _q="fckgvjhbkj";
// var 123name="Navneet"; NOT ALLOWED

// console.log(a+b+8)
// console.log(typeof a,typeof b, typeof c);

{
    let a=69;
    console.log(a);
}
console.log(a);

// const a1=6;
// a1=a1+1;
// NOT ALLOWED bcoz a1 is constant


let x="NNNNNN";
let y=79;
let z=3.33;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let o={
    name:"Navneet",
    "job code":"1234"
}
console.log(o);
o.salary="$11111111";
console.log(o);
