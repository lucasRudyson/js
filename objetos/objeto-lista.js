const cliente = {
    nome:'lucas',
    nascimento: '31/03/2000',
    cpf:'07968705436',
    email:'rudysonlucas@gmail.com'
}

const chaves= ['nome','nascimento','cpf','email']
console.log(cliente[chaves[0]])
chaves.forEach(info => {
    console.log(cliente[info])
})
console.log(cliente['nome'])