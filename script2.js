let myNumber = Math.floor(Math.random() * 100);

console.log(myNumber);

let ans = prompt("Угадайте число");

while (true) {
   
    if (ans == null) { 
        break; 
    }
    if (Number(ans) == myNumber) {
        alert("Вы угадали!");
        break;
    } else if (Number(ans) < myNumber) {
        alert("Вы ввели число меньше загаданного");
    } else if (Number(ans) > myNumber) {
        alert("Вы ввели число больше загаданного");
    } else {
        alert("Ошибка ввода числа");
        break;
    }

    ans = prompt("Повторите попытку ввода числа или нажимте <Отмена> чтобы выйти");
}