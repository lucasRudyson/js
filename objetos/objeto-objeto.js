const cliente = {
    nome:'lucas',
    nascimento: '31/03/2000',
    cpf:'07968705436',
    email:'rudysonlucas@gmail.com'
}

cliente.depedentes={
    nome:'euller',
    parentesco:'amigo',
    dataNascimento : '17/01/2000'
}
console.log(cliente)

cliente.depedentes.nome = 'Pedro vini'
console.log(cliente)