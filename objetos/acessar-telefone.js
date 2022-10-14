const cliente = {
    nome:'lucas',
    nascimento: '31/03/2000',
    cpf:'07968705436',
    email:'rudysonlucas@gmail.com',
    fone: ['88655475886547','886868']

}
if (cliente.fone.length >1){
    cliente.fone.forEach(numero => {
        numero.length > 8 ? console.log(`base de dados errado o numero ${numero} é grande demais para o bd`):console.log(numero)
    });
}else{
    console.log(cliente.fone[0])
}
console.log(cliente)