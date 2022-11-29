// type with any
function sum(a:number , b:number): number{
    let result:number;
    result= a+b;
    return result;
}
console.log(sum(2,5));


// arrays in types script
let number:number[]=[];

// tuples is like an array but use when you need fixed length of array

let studentData: [number,string]=[1,"shehryar"];
console.log(studentData);



//enum is use to store list of related constant like your store the size of shirt like (small, large ,medium)

//PascalCase notation
enum Size {Small =1,Medium, large}

let mySize:Size = Size.Medium;
console.log(mySize);

