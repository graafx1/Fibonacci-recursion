function fibonacci (n) {
    if (n<3)
      return 1;
    else
        return fibonacci (n-1) + fibonacci (n-2);
}
var N=Number (prompt("Введіть номер числа Фібоначчі"));
var result=fibonacci(N);
alert (result);