/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1134
 * Problem Name: 1134 - Type of Fuel
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var alcohol = 0;
var gasoline = 0;
var diesel = 0;

while(true){
    var type = parseInt(lines.shift());
    if(type===4){
        break;
    }
    if(type>=1 && type<=3){
        if(type===1){
            alcohol++;
        }else if(type===2){
            gasoline++;
        }else if(type==3){
            diesel++;
        }
    }
}

console.log('MUITO OBRIGADO');
console.log('Alcool: '+alcohol);
console.log('Gasolina: '+gasoline);
console.log('Diesel: '+diesel);