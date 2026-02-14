var sales = 123456789; // we can use underscores to make large numbers more readable
var course = "TypeScript"; // string type
var is_published = true;
var level;
level = 1;
level = 2;
function render(document) {
    console.log(document);
}
var numbers = [2, 3, 4];
numbers.forEach(function (n) { return console.log(n); });
//tuple
var user = [1, "Nikhil"]; //this is a tuple, it can only have two element, the first is a number and the second is a string
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var mySize = Size.Medium;
console.log(mySize); //2
