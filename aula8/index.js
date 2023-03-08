const nome = 'João Otávio'
const sobrenome = 'Olivetti'
const idade = 21
const peso = 118
const altura = 1.84
let imc
let anoNascimento

imc = peso / (altura * altura)
anoNascimento = 2022 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`)

if (imc > 30 && imc < 34.9) {
    console.log(nome, 'está na obesidade classe I')
} else if (imc < 18.5) {
    console.log(nome, 'está abaixo do peso normal')
} else if (imc > 18.5 && imc < 24.9) {
    console.log(nome, 'está no peso normal')
} else if (imc > 30. && imc < 29.9) {
    console.log(nome, 'está com excesso de peso')
} else if (imc > 35 && imc < 39.9) {
    console.log(nome, 'está na obesidade classe II')
} else if (imc >= 40) {
    console.log(nome, 'está na obesidade classe III')
}