/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1178
 * Problem Name: 1178 - Array Fill III
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var X = parseFloat(lines.shift());

console.log("N[0] = " + X.toFixed(4));

for (var i = 1; i < 100; i++) {
  X = X/2;
  X = X.toFixed(6);
  console.log("N[" + i + "] = " + formatNumber(X));
}

function formatNumber(num){
    var decimalValues = (num.toString().split('.')[1]);
    if(decimalValues[4]<=5 && decimalValues[5]==0){
        return num.toString().split('.')[0] + '.' + decimalValues[0] + decimalValues[1] + decimalValues[2] + decimalValues[3];
    }
    return parseFloat(num).toFixed(4);
}