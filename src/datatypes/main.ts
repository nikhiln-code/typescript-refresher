let sales: number = 123_456_789; // we can use underscores to make large numbers more readable
let course: string = "TypeScript"; // string type
let is_published: boolean = true;
let level;

level = 1;
level = 2;

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [2, 3, 4];

numbers.forEach((n) => console.log(n));

//tuple
let user: [number, string] = [1, "Nikhil"]; //this is a tuple, it can only have two element, the first is a number and the second is a string

//enum
enum Size {
  Small = 1,
  Medium,
  Large,
}

const mySize: Size = Size.Medium;
console.log(mySize); //2
