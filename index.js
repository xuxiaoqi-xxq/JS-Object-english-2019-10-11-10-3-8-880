// Create a null object and set its variable name as user
let obj = {};
// Add a name attribute and set its value as John
obj.name = 'Jonh';
// Add a surname attribute and set its value as Mike
obj.surname = 'Mike';
// Modify the value of name attribute as Peter
obj.name = 'Peter';
// Delete name attribute of user
delete obj.name;
console.log(obj);


// calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
let total = 0;
for (key in fruit) {
    total += fruit[key];
}
console.log(total);