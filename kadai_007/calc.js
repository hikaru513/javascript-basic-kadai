let input = prompt("数値を入力してください:");
let num = parseInt(input);

console.log(num);
 

if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}
else if (num % 3 === 0) {
    console.log("3の倍数です");
}
else if (num % 5 === 0) {
    console.log("5の倍数です");
}
else {
    console.log(num);
}
