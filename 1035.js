/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1035
 * Problem Name: 1035 - Selection Test 1
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = lines.shift().split(" ");

var [a, b, c, d] = arr.map((input) => parseInt(input));

function checkValue(a, b, c, d) {
  if (b > c && d > a) {
    if (c + d > a + b) {
      if (c > 0 && d > 0) {
        if (a % 2 === 0) {
          return true;
        }
      }
    }
  }
  return false;
}

if (checkValue(a, b, c, d)) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
