
alert("Bem-vindo! A seguir pediremos que informe alguns dados")

let nome = prompt("Informe seu nome")
let idade = Number(prompt("infome sua idade"))
let confirmacao = Number(prompt("confirme a sua idade"))

console.log(nome)
console.log(idade)

if(confirmacao === idade){
  console.log(`A confirmacao da idade está OK`)
} else {
  console.log("Idade está incorreta, confirme a idade correta")
}
let ageConfirm = confirm(`Sua idade é ${idade}`)