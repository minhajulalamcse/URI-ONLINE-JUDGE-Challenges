/*
 * URL: https://www.urionlinejudge.com.br/judge/en/problems/view/1010
 * Problem Name: 1010 - Simple Calculate
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var product1 = lines.shift().split(' ');
var product2 = lines.shift().split(' ');

var product1Code = parseInt(product1[0]);
var product1Unit = parseInt(product1[1]);
var product1Price = parseFloat(product1[2]);

var product2Code = parseInt(product2[0]);
var product2Unit = parseInt(product2[1]);
var product2Price = parseFloat(product2[2]);

var total = product1Unit * product1Price + product2Unit * product2Price;

console.log('VALOR A PAGAR: R$ '+total.toFixed(2));