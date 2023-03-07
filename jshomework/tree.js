//1
function func() {
    const userAge = prompt("ведите ваш возраст");
    if (+userAge < 18) {
        alert(вы несовершеннолетний);
        func();
    } 
    else {
        alert(готово);
    }
};
func();
//2
function add(a,b) {
    return a+b;
}
add(1,2);
function subtract(a,b) {
    return a-b;
}
subtract(1,2);
function divide(a,b) {
    return a/b;
}
divide(5,1);
function multiply(a,b) {
    return a*b;
}
multiply(1,4);
//3
function addCreator(a) {
    return function(b) {
        return a+b;
    }
}

const add = addCreator(5);

console.log(add(5));
console.log(addCreator(1)(3));

//4
function counterCreater(step=2) {
    let index = 0;
    return function () {
        return index += step;
    }
}

let myCounter1 = counterCreater(-1);
console.log(myCounter1());
console.log(myCounter1());

let myCounter2 = counterCreater(-1);
console.log(myCounter2());
console.log(myCounter2());

let myCounter3 = counterCreater(-1);
console.log(myCounter3());
console.log(myCounter3());