// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "maria"
let idade =21



// Console e Debug
console.log(nome)
console.log(idade)
nome="maria"
idade= 21
console.log(nome, idade)

// tipos de dados 
//text==string
let cidade="americana"

//numerico== number
let salario = 1500.35

//boleano == boolean
let fumante = false 

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

//operadores
// operador atribuição(=)
// operador aritimético(+, -, /, *)
console.log("10+15")
let n1= 10
let n2= 5
console.log(n1+n2)// soma
console.log(n1-n2)// subtração
console.log(n1/n2)// divisão
console.log(n1*n2)// multiplicação
console.log(n1%3)// modulo (resto da divisão)



// operadores relacionais (>, <, >=, <=, !=, ==)
console.log(n1==n2)// iguadade
console.log(n1!=n2)// diferente
console.log(n1>n2)// maior
console.log(10<10)// menor igual
console.log(150 >= 175)// maior igual


// operadores logicos (!, && ,||)
console.log(!10>2)// não- inverte o resultado, se for verdadeiro muda para falso, se for falço muda pra verdadeiro
console.log(!false)

console.log(10>2 && 35<100 &&n1>n2 && 100<90)// todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10<2 ||100==150 || 57==57)// OU- apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado so sera falso
// quando TODAS as verificações forem falsas 

// DESAFIO 
let preco= 100
let precoAcrescimo=+17
let precoDesconto=-7
// faça um código que acrescente 17% ao preço e imprima
precoAcrescimo = preco+(preco*0.17)
console.log("preco com acréscimo: " +precoAcrescimo.toFixed(2))
// faça um código que desconte 7% do preço e imprima
precoDesconto=preco-preco*0.07
console.log(precoDesconto)
console.log("preco com desconto:" + precoDesconto.toFixed(2))





// Operadores
//     Operador Atribuição
//     Operadores aritméticos
//     Operadores relacionais
//     Operadores lógicos

// Estrutura
//     Estrutura de controle/decisão
if(10>5){ 
    console.log("10 é maior que 5")
}else{
    console.log("10 é menor que 100")
}
let idadeDocandido= 20
if(idadeDocandido>=18){
    console.log("pode digir")
}else{
    console.log("volte mais tarde")
}

 let salarioFunc =3000
 let aumento = 5000 - salarioFunc
 // faca um codigo que verifica se o salario do funcionario é maior que 5000, se for mostre a mensagem "sario OK"se nao mostre a mensagem "precisa de aumento" 
 if(salarioFunc>5000){
    console.log("salario OK")
 }else{
    console.log("precisa de aumento ",aumento.toFixed(2))
 }



    

//     Laços de repetição()
// quero mostrar 10 vezes a mensagem "Senac Americana"
let controle=1
while(controle<=10){
    console.log("Senac americana")
    controle=controle+1
}
controle=50
while(controle<=63){
    console.log(controle)
    controle=controle+1
    
}
controle=0
while(controle<=100){
    console.log(controle)
    controle=controle+2
}
controle=1 // definição da variavel de controle
while(controle<=100){ // condição
    console.log(controle)
    controle=controle+3// incremento
}
// mostrar 10 vezes "Senac Americana"
for(let i=1;i<=10;i=i+1){
    console.log("Senac Americana")
    
}
for(let i=1; i<=50;i=i+1){
    console.log(1)
}

       

// Arrays-- vetor
let alunos=["joão","paulo","renata","cris","x"]
console.log(alunos[0])
console.log(alunos[2])
alunos[4]="kleber"
console.log(alunos)
alunos.push("karem")
console.log(alunos)

let frutas=[]
console.log(frutas)
frutas.push("🍓")
frutas.push("🍌")
frutas.push("🍐")
frutas.push("🍈")
frutas.push("🥝")
frutas.push("🍎")
frutas.push("🍒")
frutas.push("🍉")
frutas.push("🥑")
frutas.push("🍍")
frutas.push("🍊")
console.log(frutas)




// Funções básicas
function soma(num1,num2){
    let total=num1+num2
    console.log("o resultado é" + total)
}
soma(100,14)
soma(7,3)




// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
