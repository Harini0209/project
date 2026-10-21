const students = ["priya","arun","divya","rahul","sneha"];
//print the first and last student name
console.log(students[0]);
console.log(students[students.length - 1]);

//add karthi to the end of the array
students.push("karthi");
console.log(students);

//remove the last student
students.pop();
console.log(students);

//create a new array containing arun and divya
const newStudents = [students[1], students[2]];
console.log(newStudents);

//splice:remove "divya" from the original array
students.splice(2, 1);
console.log(students);

//includes: check whether priya exists
 console.log(students.includes("priya"));
 
//filter
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2000 }
];

const expensiveProducts = products.filter(product => product.price>=1000);
console.log(expensiveProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

//sort

let strong=[40,10,5,20,30]
let res=strong.sort((a,b)=>a-b)
console.log(res)

//reduce
let numbers=[10,20,30,40]
let res= numbers.reduce((total,num)=>{return total+ num},20);
console.log(res);

//slice splice
let number =[10,20,30,40,50]
let a= number.slice(1,3);
let b= number.splice(1,1);
console.log(a)
console.log(b)

//every
let number=[10,20,15,5];
let result= number.every((n)=>{return n<30});
console.log(result);

//some
let number=[10,20,15,5];
let result= number.some((n)=>{return n<30});
console.log(result);
   
