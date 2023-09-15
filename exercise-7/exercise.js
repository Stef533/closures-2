function printName() {
    let helloName = "Hello John";

    function inner() {
        return helloName;
    }

    return inner;
}
const getName = printName();
console.log(getName());
setTimeout(function() {
    console.log(getName());
}, 1000);