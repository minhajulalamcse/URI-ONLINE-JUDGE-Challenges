/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1051
 * Problem Name: 1051 - Taxes
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var salary = parseFloat(lines.shift());
var totalTax = 0;

if(salary<=2000){
    console.log('Isento');
}else if(salary>2000 && salary<=3000){
    totalTax = (salary - 2000) * 0.08;
    console.log('R$ '+totalTax.toFixed(2));
}else if(salary>3000 && salary<=4500){
    totalTax = 80;
    totalTax += (salary-3000) * 0.18;
    console.log('R$ '+totalTax.toFixed(2));
}else{
    totalTax = 80;
    totalTax += 270;
    totalTax += (salary - 4500) * 0.28;
    console.log('R$ '+totalTax.toFixed(2));
}
