const cliente = {
    nome:'lucas',
    nascimento: '31/03/2000',
    cpf:'07968705436',
    email:'rudysonlucas@gmail.com',
    dependentes:[{
        nome:'euller',
        parentesco:'amigo',
        dataNascimento : '17/01/2000'
    }]
}

cliente.dependentes.push({
    nome:'pedro',
    parentesco:'nam',
    dataNascimento : '22/02/2001'
})

// console.log(cliente)

const amigo = cliente.dependentes.filter(dependente => dependente.dataNascimento==="22/02/2001")
console.log(amigo[0].nome)