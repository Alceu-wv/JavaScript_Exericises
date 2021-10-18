console.log("Insira as quatro notas do Aluno para obter a média:")
let nota1 = prompt("Nota 1:")
let nota2 = prompt("Nota 2:")
let nota3 = prompt("Nota 3:")
let nota4 = prompt("Nota 4:")

media_das_notas = ((nota1+nota2+nota3+nota4) /4)

console.log("Média das notas: " + media_das_notas)


console.log("======")
let graus = prompt("Insira as a temperatura em graus Farenheint para obter a temperatura em graus Celcius:")

let graus_c = 5 * ((graus-32) / 9)
console.log("Graus Celcius: " + graus_c)


console.log("======")
let num1 = prompt("Qual dos numeros é o maior? Insira o Numero1:")
let num2 = prompt("Qual dos numeros é o maior? Insira o Numero2:")

console.log("O maior numero é: " + Math.max(num1, num2))


console.log("======")
let num = prompt("Insira um numero para saber se ele é positivo ou negativo:")
if (num > 0){
  console.log(num + " é positivo")
} else if (num < 0) {
  console.log(num + " é negativo")
} else {
  console.log(num + " não é nenhum dos dois")
}


console.log("======")
let letra = prompt("Insira uma letra para saber se ela é vogal ou consoante:")
if (["a", "e", "i", "o", "u"].includes(letra.toLowerCase())){
  console.log(letra + " é uma vogal")
} else {
  console.log(letra + " não é uma vogal")
}

console.log("======")
console.log("Insira as duas notas do Aluno para saber se ele foi aprovado:")
let nota1_ = prompt("Nota 1:")
let nota2_ = prompt("Nota 2:")
let media_ = (nota1_ + nota2_) / 2

if (media_ < 7) {
  console.log("REPROVADO")
} else if(media_ == 10){
  console.log("APROVADO COM DISTINÇÃO")
} else if (media_ > 7){
  console.log("APROVADO")
}

console.log("======")
let hora = new Date().getHours

if (hora > 18) {
  console.log("boa noite")
} else if(hora > 12){
  console.log("boa tarde")
} else{
  console.log("bom dia")
}


console.log("======")
let lado1 = prompt("Insira o lado 1 do triangulo:")
let lado2 = prompt("Insira o lado 2 do triangulo:")
let lado3 = prompt("Insira o lado 3 do triangulo:")

if (lado1 == lado2 == lado3){
  console.log("triangulo equilatero")
} else if(lado1 == lado2 || lado1 == lado3){
  console.log("triangulo isoceles")
} else {
  console.log("triangulo escaleno")
}

console.log("======")
let morangos = prompt("Quantos kilos de morango você deseja?:")
if (morangos > 5){
  let valor_morango = morangos * 6.2
  if (morangos > 8 || valor_morango > 25){
    valor_morango = valor_morango * 0.9
  }
} else {
  let valor_morango = morangos * 7.5
}
console.log("O valor dos morangos será " + valor_morango)

let macas = prompt("Quantos kilos de maçã você deseja?:")
if (macas > 5){
  let valor_macas = macas * 4.5
  if (macas > 8 || valor_macas > 25){
    valor_macas = valor_macas * 0.9
  }
} else {
  let valor_macas = macas * 5.8
}
console.log("O valor das maçãs será " + valor_macas)


console.log("======")
console.log("Insira 5 numeros para saber qual deles é o maior:")
let nume1 = prompt("Insira o primeiro numero:")
let nume2 = prompt("Insira o primeiro numero:")
let nume3 = prompt("Insira o primeiro numero:")
let nume4 = prompt("Insira o primeiro numero:")
let nume5 = prompt("Insira o primeiro numero:")
let lista_num = []
lista_num.append(nume1)
lista_num.append(nume2)
lista_num.append(nume3)
lista_num.append(nume4)
lista_num.append(nume5)
var maior_num = 0
for (index in lista_num){
  if (lista_num[index] > maior_num){
    maior_num = lista_num[index]
  }
}
console.log("O maior numero é " + maior_num)


console.log("======")
console.log("Insira 5 numeros para saber qual deles é o maior:")





//for
// é como se estivessemos usando o enumerate
// o iterador é o index em vez de o elemento
let lista_elementos = [1,2,3,10,20,30]

for (index in lista_elementos){
  console.log(index, lista_elementos[index])
}

//Ou se faz desse jeito, usando of
for (elemento of lista_elementos){
  console.log(elemento)
}

//range - ou - for classico
for (passo =0; passo < 5; passo++){
  console.log(passo)
}

//While
i = 0
while(i < 10) {
  console.log(i)
  i++
}