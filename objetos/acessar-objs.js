const cliente = {
    nome:'lucas',
    nascimento: '31/03/2000',
    cpf:'07968705436',
    email:'rudysonlucas@gmail.com'
}
let idade = cliente.nascimento.substring(6)
idade = '2022' - idade
console.log(cliente.nome, idade)