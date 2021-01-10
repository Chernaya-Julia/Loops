let inputNum = Number(prompt('Введите число для поиска кратных ему:'));

console.group("Результат без ограничений");
for (let i=inputNum; i>0; i--) {
    if (!(inputNum%i)) {
        console.log(i);
    }

}

console.groupEnd();


let maxOut = Number(prompt("Введите максимальное количество кратных чисел:"));

console.group("Результат с ограничениями");

var cnt = 0;


for (let i=inputNum; i>0; i--) {
    if (!(inputNum%i)) {
        console.log(i);
        cnt = cnt+1;
        if (cnt>=maxOut) {
            break;
        }
    }

}
