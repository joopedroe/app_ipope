const pesquisa = [{
    id: "1",
    question: "Sexo",
    type: 2,
    campos: [
        {
            id: '11',
            title: "Masculino",
            selected: false
        },
        {
            id: '12',
            title: "Feminino",
            selected: false
        }
    ]
},
{
    id: '2',
    question: "Idade",
    type: 2,
    campos: [
        {
            id: '21',
            title: "16 a 24 Anos",
            selected: false
        },
        {
            id: '22',
            title: "25 a 45 Anos",
            selected: false
        },
        {
            id: '23',
            title: "46 a 65 Anos",
            selected: false
        },
        {
            id: '24',
            title: "Mais de 65 Anos",
            selected: false
        },
    ]
},
{
    id: '3',
    question: "Religião",
    type: 2,
    campos: [
        {
            id: '31',
            title: "Católico (a)",
            selected: false
        },
        {
            id: '32',
            title: "Evangélico (a)",
            selected: false
        },
        {
            id: '33',
            title: "Espirita",
            selected: false
        },
        {
            id: '34',
            title: "Ateu",
            selected: false
        },
        {
            id: '35',
            title: "Não tem religião definida", 
            selected: false
        }
    ]
},
{
    id: '4',
    question: "Ocupação",
    type: 2,
    campos: [
        {
            id: '41',
            title: "Empregado / Aposentado",
            selected: false
        },
        {
            id: '42',
            title: "Desempregado",
            selected: false
        },
        {
            id: '43',
            title: "Empreendedor / Autonomo",
            selected: false
        },
        {
            id: '44',
            title: "Produtor Rural",
            selected: false
        },
        {
            id: '45',
            title: "Dono (a) de Casa / Estudade", 
            selected: false
        }
    ]
},
{
    id: '5',
    question: "Moradia",
    type: 2,
    campos: [
        {
            id: '51',
            title: "Casa propria",
            selected: false
        },
        {
            id: '52',
            title: "Alugada",
            selected: false
        },
        {
            id: '53',
            title: "Cedida",
            selected: false
        },
        {
            id: '54',
            title: "Com a familia",
            selected: false
        }
    ]
}]

const pesquisaBase = [{
    id: '6',
    question: "Como você avalia a gestão do prefeito",
    type: 2,
    campos: [
        {
            id: '61',
            title: "Ótimo",
            selected: false
        },
        {
            id: '62',
            title: "Bom",
            selected: false
        },
        {
            id: '63',
            title: "Regular",
            selected: false
        },
        {
            id: '64',
            title: "Ruim",
            selected: false
        },
        {
            id: '65',
            title: "Péssimo",
            selected: false
        },
        {
            id: '66',
            title: "Não opinou",
            selected: false
        }
    ]
},
{
    id: '7',
    question: "Como você avalia o governo Vanderley Barbosa ?",
    type: 2,
    campos: [
        {
            id: '71',
            title: "Ótimo",
            selected: false
        },
        {
            id: '72',
            title: "Bom",
            selected: false
        },
        {
            id: '73',
            title: "Regular",
            selected: false
        },
        {
            id: '74',
            title: "Ruim",
            selected: false
        },
        {
            id: '75',
            title: "Péssimo",
            selected: false
        },
        {
            id: '76',
            title: "Não opinou",
            selected: false
        }
    ]
},
{
    id: '8',
    question: "Como você avalia o governo Bolsonaro ?",
    type: 2,
    campos: [
        {
            id: '81',
            title: "Ótimo",
            selected: false
        },
        {
            id: '82',
            title: "Bom",
            selected: false
        },
        {
            id: '83',
            title: "Regular",
            selected: false
        },
        {
            id: '84',
            title: "Ruim",
            selected: false
        },
        {
            id: '85',
            title: "Péssimo",
            selected: false
        },
        {
            id: '86',
            title: "Não opinou",
            selected: false
        }
    ]
},
{
    id: '9',
    question: "Se a eleição fosse hoje, em quem você votaria para governador?",
    type: 4,
    campos: [
        {
            id: '91',
            title: "Branco ou Nulo",
            selected: false
        },
        {
            id: '92',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '10',
    question: "Se a eleição fosse hoje, em quem você não votaria de jeito nenhum para governador?",
    type: 4,
    campos: [
        {
            id: '101',
            title: "Não Rej. Todos",
            selected: false
        },
        {
            id: '102',
            title: "Não Rej. Nenhum",
            selected: false
        },
        {
            id: '103',
            title: "Branco ou Nulos",
            selected: false
        },
        {
            id: '104',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '11',
    question: "Se a eleição fosse hoje, em quem você votaria para governador?",
    type: 2,
    campos: [
        {
            id: '111',
            title: "Vanderly Barbosa",
            selected: false
        },
        {
            id: '112',
            title: "Paulo Mourão",
            selected: false
        },
        {
            id: '113',
            title: "Ronaldo",
            selected: false
        },
        {
            id: '114',
            title: "Osires Damasgo",
            selected: false
        },
        {
            id: '115',
            title: "Branco ou Nulo",
            selected: false
        },
        {
            id: '116',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '12',
    question: "Se a eleição fosse hoje, em quem você não votaria de jeito nenhum para governador?",
    type: 2,
    campos: [
        {
            id: '121',
            title: "Vanderly Barbosa",
            selected: false
        },
        {
            id: '122',
            title: "Paulo Mourão",
            selected: false
        },
        {
            id: '123',
            title: "Ronaldo",
            selected: false
        },
        {
            id: '124',
            title: "Osires Damasgo",
            selected: false
        },
        {
            id: '125',
            title: "Não Rej. Todos",
            selected: false
        },
        {
            id: '126',
            title: "Não Rej. Nenhum",
            selected: false
        },
        {
            id: '127',
            title: "Não opinou",
            selected: false
        },
        
    ]
},
{
    id: '13',
    question: "Se a eleição fosse hoje, em quem você votaria para governador?",
    type: 2,
    campos: [
        {
            id: '131',
            title: "Vanderly Barbosa",
            selected: false
        },
        {
            id: '132',
            title: "Paulo Mourão",
            selected: false
        },
        {
            id: '133',
            title: "Ronaldo Dimas",
            selected: false
        },
        {
            id: '134',
            title: "Osires Damasgo",
            selected: false
        },
        {
            id: '125',
            title: "Iraja Abreu",
            selected: false
        },
        {
            id: '126',
            title: "Não Rej. Nenhum",
            selected: false
        },
        {
            id: '127',
            title: "Não opinou",
            selected: false
        },
        
    ]
},
]
export {pesquisa, pesquisaBase};