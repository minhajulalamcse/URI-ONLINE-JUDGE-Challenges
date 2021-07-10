/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1048
 * Problem Name: 1048 - Salary Increase
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var salary = parseFloat(lines.shift());

var newSalary = 0;
var increasedSalary = 0;
var percentage = 0;

if(salary<=400){
    percentage = 15;
}else if(salary>400 && salary<=800){
    percentage = 12;
}else if(salary>800 && salary<=1200){
    percentage = 10;
}else if(salary>1200 && salary<=2000){
    percentage = 7;
}else{
    percentage = 4;
}

increasedSalary = salary * (percentage/100);
newSalary = salary + increasedSalary;

console.log('Novo salario: '+newSalary.toFixed(2));
console.log('Reajuste ganho: '+increasedSalary.toFixed(2));
console.log('Em percentual: '+percentage+' %');