const p= 'pedro'
const cliente = {
    nome: 'lucas rudyson',
    dataNasc: '31/03/2000',
    cpf: '18725974122',
    email: 'rudysonlucas@gmail.com',
    fones:['84987963580', '36622552'],
    dependentes:[
        {
            nome: "luanda rodrigues",
            parentesco: 'irmã',
            dataNasc:'31/11/1990'
        },
        {
            nome: "luciene rodrigues",
            parentesco: 'mãe',
            dataNasc:'14/11/1970'
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor;
    },
    retirar: function(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }else{
            console.log(`operação suspensa,saldo insuficiente ${this.saldo}`)
        }
    }
}

console.log(cliente.saldo)
cliente.retirar(110)