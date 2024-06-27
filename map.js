// The map function in JavaScript is a powerful array method used to create a new array populated with the results of calling a provided function on every element in the calling array

let arr = [4,5,8,9]

let result = arr.map((value)=>{
    return value * value
});
console.log(result)  

let array = [2,4,6,7]
let resul2 = array.map((value,index)=>{
    return value * index
});
console.log(resul2)