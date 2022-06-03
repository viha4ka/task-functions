/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    function inner(e) {
        return e > num;
    }
    return inner;
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    function inner(e) {
        if (e.indexOf(substr) == -1) {
            return false;
        }
        return true;
    }
    return inner;
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function (num2) {
        return num * num2;
    };
}
