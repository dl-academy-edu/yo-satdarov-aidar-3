//1
let usernum = prompt();
if (usernum === 0) {
    console.log ('неверно введен 0');
}
else if (usernum < 0) {
    console.log ('неврно введеноменьше ноля');
}
else if (isNaN(usernum)) {
    console.log ('некоректные данные');
}

for(let i = 1; i < usernum; i++) {
    if (i%4===0) continue;
    console.log(i);
}
//2
let usernum = prompt();
if (usernum === 0) {
    console.log('неверно введен 0');
}
else if (usernum < 0) {
    console.log('неврно введеноменьше ноля');
}
else if (isNaN(usernum)) {
    console.log ('некоректные данные');
}

let usernumFactorial = 1;
while (usernum > 1) {
    usernumFatorial = usernumFactorial * usernum;
    usernum  usernum-1;
}

if (isNaN(usernum)) {
    console.log ();
}
else if (usernum === 0) {
    console.log ();
}
else if (usernum < 0) {
console.log ();
}
else {
    console.log (usernumFactorial);
}
//3
let usernum = prompt("Введите число");

if (usernum === 0) {
    console.log('неверно вели 0');
}
else if (usernum < 0) {
    console.log('неверно число меньшн чем 0');
}

else if (isNaN(usernum)) {
    console.log ('некоректные данные');
}

let usernumDegree = prompt('введите степень числа');

if (usernumDegree === 0) {
    console.log('неверно вели 0');
}
else if (usernumDegree < 0) {
    console.log('неверно число меньшн чем 0');
}

else if (isNaN(usernumDegree)) {
    console.log ('некоректные данные');
}

let result = 1;

for (i = 0; usernumDegree > i; i++) {
    result*=usernum;
}

if (isNaN(usernum)) {
    console.log();
}
else if (usernum === 0) {
    console.log();
}
else if (usernum < 0) {
    console.log();
}
else {
    console.log(result);
}
//4
let rand = Math.floor(1 + Math.random() * 10);
let i = 1;
while (i != rand) {
    let i = prompt();
    if(i == rand) {
        break;
    }
}