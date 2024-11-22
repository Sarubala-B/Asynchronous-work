//Local scope
var d = 'Tom';
console.log(d);
function zeta() {
    // var d = 'Spike';
    // var d;
    // if (d === undefined) {
    //     d = 'Jerry';
    // }
    console.log(d);
}
zeta();
console.log(d);

// Global scope
var scope = "Global"; 
console.log(scope);
function access() {
    console.log(scope); 
}
access(); 


// Declare a variable using 'var'
var message = "Hello, World!";
console.log(message); 
message = "Hello, Node.js!";
console.log(message); 
