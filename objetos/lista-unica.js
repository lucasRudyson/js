const clientes = [
    {
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
    },
    {
        nome: 'matheus lucas',
        dataNasc: '01/08/1998',
        cpf: '18725974122',
        email: 'matheuslima@gmail.com',
        fones:['84987963580', '36622552'],
        dependentes:[
            {
                nome: "junior",
                parentesco: 'irmão',
                dataNasc:'31/11/1990'
            },
            {
                nome: "desconhecida",
                parentesco: 'filha',
                dataNasc:'30/03/2023'
            }
        ]
           
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes)