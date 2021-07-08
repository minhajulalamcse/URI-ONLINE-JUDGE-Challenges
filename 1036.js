/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1036
 * Problem Name: Bhaskara's Formula
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var arr = lines.shift().split(" ");
var [a, b, c] = arr.map((input) => parseFloat(input));

function getBhaskarasFormulaResult(a, b, c) {
  if (a === 0) {
    return false;
  }
  var v1 = b * b - 4 * a * c;

  if (v1 < 0) {
    return false;
  }
  v1 = Math.sqrt(v1);

  var r1 = (-b + v1)/(2*a);
  var r2 = (-b - v1)/(2*a);

  return {r1, r2};
}

var result = getBhaskarasFormulaResult(a, b, c);

if(!result){
    console.log('Impossivel calcular')
}else{
    console.log('R1 = '+result.r1.toFixed(5));
    console.log('R2 = '+result.r2.toFixed(5))
}