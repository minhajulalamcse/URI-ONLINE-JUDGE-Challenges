/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1131
 * Problem Name: 1131 - Grenais
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var interResult = 0;
var gremioResult = 0;
var draw = 0;

while(true){
    
    var [inter, gremio] = lines.shift().split(' ').map(input => parseInt(input));
    
    if(inter==gremio){
        draw++;
    }else if(inter>gremio){
        interResult++;
    }else{
        gremioResult++;
    }

    console.log('Novo grenal (1-sim 2-nao)');
    
    var type = parseInt(lines.shift());

    if(type==2){
        break;
    }
}
var total = interResult + gremioResult;
var winner = interResult > gremioResult ? 'Inter' : 'Gremio';

console.log(total+' grenais');
console.log('Inter:'+interResult);
console.log('Gremio:'+gremioResult);
console.log('Empates:'+draw);
console.log(winner+' venceu mais');