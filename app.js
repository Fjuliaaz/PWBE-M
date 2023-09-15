/***********************************************************
 * Objetivo: calcular uma tabuada
 * Data: 01/09/2023
 * Autor: Julia Fonseca
 * versão: 1.0
 **********************************************************/

//import da biblioteca que calcula a tabuada
var calculoTabuada = require('./modulo/calculoTabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada: ', function(valorTabuada){
    let tabuada = valorTabuada

    entradaDeDados.question('Digite o contador inicial: ', function(valorInicial) {
        let inicial = valorInicial

        entradaDeDados.question('Digite o contador final: ', function (valorFinal) {
            let final = valorFinal

            // chama a função da tabuada encaminhando os valores que o usuário digitou
            calculoTabuada.calcularTabuada(tabuada, inicial, final)
        })
    })
})