/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1094
 * Problem Name: 1094 - Experiments
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 var T = parseInt(lines.shift());

 var rabbit = 0;
 var rat = 0;
 var frog = 0;
 
 for(var i = 0; i<T; i++){
     var [amount, type] = lines.shift().split(' ').map(input => input);
     amount = parseInt(amount);
     if(type=='C'){
         rabbit += amount;
     }else if(type=='R'){
         rat += amount;
     }else if(type=='S'){
         frog += amount;
     }
 }
 var total = rabbit+rat+frog;
 
 console.log('Total: '+total+' cobaias');
 console.log('Total de coelhos: '+rabbit);
 console.log('Total de ratos: '+rat);
 console.log('Total de sapos: '+frog);
 console.log('Percentual de coelhos: '+((rabbit/total)*100).toFixed(2)+' %');
 console.log('Percentual de ratos: '+((rat/total)*100).toFixed(2)+' %');
 console.log('Percentual de sapos: '+((frog/total)*100).toFixed(2)+' %');