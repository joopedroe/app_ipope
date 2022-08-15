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
            title: "Espírita",
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
            title: "Empreendedor / Autônomo",
            selected: false
        },
        {
            id: '44',
            title: "Produtor Rural",
            selected: false
        },
        {
            id: '45',
            title: "Dono (a) de Casa / Estudande", 
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
    question: "Como você avalia a gestão do prefeito ",
    mayor: false,
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
            title: "Não opinou",
            selected: false
        }
        
    ]
},
{
    id: '11',
    question: "Se a eleição fosse hoje, em quem você votaria para governador?",
    type: 2,
    campos: [
        {
            id: '111',
            title: "Vanderley Barbosa",
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
            title: "Osires Damaso",
            selected: false
        },
        {
            id: '115',
            title: "Irajá Abreu",
            selected: false
        },
        {
            id: '116',
            title: "Branco ou Nulo",
            selected: false
        },
        {
            id: '117',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '12',
    question: "Se a eleição fosse hoje, em quem você não votaria para governador?",
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
            title: "Osires Damaso",
            selected: false
        },
        {
            id: '125',
            title: "Irajá Abreu",
            selected: false
        },
        {
            id: '126',
            title: "Não Rej. Todos",
            selected: false
        },
        {
            id: '127',
            title: "Não Rej. Nenhum",
            selected: false
        },
        {
            id: '128',
            title: "Não opinou",
            selected: false
        },
        
    ]
},
{
    id: '13',
    question: "Se a eleição fosse hoje, em quem você votaria para Presidente?",
    type: 4,
    campos: [
        {
            id: '131',
            title: "Bolsonaro",
            selected: false
        },
        {
            id: '132',
            title: "Ciro Gomes",
            selected: false
        },
        {
            id: '133',
            title: "Lula",
            selected: false
        },
        {
            id: '134',
            title: "Simone Tebet",
            selected: false
        },
        {
            id: '135',
            title: "Branco / Nulo",
            selected: false
        },
        {
            id: '136',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '14',
    question: "Se a eleição fosse hoje, em quem você não votaria para Presidente?",
    type: 4,
    campos: [
        {
            id: '141',
            title: "Bolsonaro",
            selected: false
        },
        {
            id: '142',
            title: "Ciro Gomes",
            selected: false
        },
        {
            id: '143',
            title: "Lula",
            selected: false
        },
        {
            id: '144',
            title: "Simone Tebet",
            selected: false
        },
        {
            id: '145',
            title: "Rej. Todos",
            selected: false
        },
        {
            id: '146',
            title: " Não Rej. Nenhum",
            selected: false
        },
        {
            id: '147',
            title: " Não opinou",
            selected: false
        },
        
    ]
},
{
    id: '15',
    question: "Se a eleição fosse hoje, em quem você votaria para Senador (a)?",
    type: 2,
    campos: [
        {
            id: '151',
            title: "Prof. Dorinha",
            selected: false
        },
        {
            id: '152',
            title: "Carlos Amastha",
            selected: false
        },
        {
            id: '153',
            title: "Kátia Abreu",
            selected: false
        },
        {
            id: '154',
            title: "Ataídes Oliveira",
            selected: false
        },
        {
            id: '155',
            title: "Mauro Carlesse",
            selected: false
        },
        {
            id: '156',
            title: "Branco / Nulo",
            selected: false
        },
        {
            id: '157',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '16',
    question: "Se a eleição fosse hoje, em quem você não votaria para Senador?",
    type: 4,
    campos: [
        {
            id: '161',
            title: "Prof. Dorinha",
            selected: false
        },
        {
            id: '162',
            title: "Carlos Amastha",
            selected: false
        },
        {
            id: '163',
            title: "Kátia Abreu",
            selected: false
        },
        {
            id: '164',
            title: "Ataídes Oliveira",
            selected: false
        },
        {
            id: '165',
            title: "Mauro Carlesse",
            selected: false
        },
        {
            id: '166',
            title: "Rej. Todos",
            selected: false
        },
        {
            id: '167',
            title: " Não Rej. Nenhum",
            selected: false
        },
        {
            id: '168',
            title: " Não opinou",
            selected: false
        },
        
    ]
},
{
    id: '17',
    question: "Em quem votaria para dep. estadual?",
    type: 4,
    campos: [
        {
            id: '171',
            title: "Branco / Nulo",
            selected: false
        },
        {
            id: '172',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '18',
    question: "Em quem votaria para dep. federal?",
    type: 4,
    campos: [
        {
            id: '181',
            title: "Branco / Nulo",
            selected: false
        },
        {
            id: '182',
            title: "Indeciso",
            selected: false
        },
        
    ]
},
{
    id: '19',
    question: "Quais as áreas você espera que o governo do Estado deve priorizar para seu município em parceria com a prefeitura?",
    type: 1,
    campos: [
        {
            id: '191',
            title: "Em saúde",
            selected: false
        },
        {
            id: '192',
            title: "Pav. Asfáltica",
            selected: false
        },
        {
            id: '193',
            title: "Educação",  
            selected: false
        },
        {
            id: '194',
            title: "Tapa buracos",
            selected: false
        },
        {
            id: '195',
            title: "Ação social",
            selected: false
        },
        {
            id: '196',
            title: "Estradas e rodovias",
            selected: false
        },
        {
            id: '197',
            title: "Infraestrutura",
            selected: false
        },
        {
            id: '198',
            title: "Meio ambiente",
            selected: false
        },
        {
            id: '199',
            title: "Apoio ao esporte",
            selected: false
        },
        {
            id: '1910',
            title: "Eventos / Turismo",
            selected: false
        },
        {
            id: '1911',
            title: "Segurança",
            selected: false
        },
        {
            id: '1912',
            title: "Redução de impostos",
            selected: false
        },
        {
            id: '1913',
            title: "Incentiva a ger. empregos",
            selected: false
        },
        {
            id: '1914',
            title: "Não opinou",
            selected: false
        },
        
    ]
},
{
    id: '20',
    question: "Votaria nos candidatos apoiados ou recomendados pelo prefeito de sua cidade? PRESIDENTE:",
    type: 2,
    campos: [
        {
            id: '201',
            title: "Sim",
            selected: false
        },
        {
            id: '202',
            title: "Não",
            selected: false
        },
        {
            id: '203',
            title: "Talvez votaria",
            selected: false
        },
        {
            id: '204',
            title: "Independe",
            selected: false
        },
    ]
},
{
    id: '21',
    question: "Votaria nos candidatos apoiados ou recomendados pelo prefeito de sua cidade? GOVERNADOR:",
    type: 2,
    campos: [
        {
            id: '211',
            title: "Sim",
            selected: false
        },
        {
            id: '212',
            title: "Não",
            selected: false
        },
        {
            id: '213',
            title: "Talvez votaria",
            selected: false
        },
        {
            id: '214',
            title: "Independe",
            selected: false
        },
    ]
},
{
    id: '22',
    question: "Votaria nos candidatos apoiados ou recomendados pelo prefeito de sua cidade? SENADOR",
    type: 2,
    campos: [
        {
            id: '221',
            title: "Sim",
            selected: false
        },
        {
            id: '222',
            title: "Não",
            selected: false
        },
        {
            id: '223',
            title: "Talvez votaria",
            selected: false
        },
        {
            id: '224',
            title: "Independe",
            selected: false
        },
    ]
},
{
    id: '23',
    question: "Votaria nos candidatos apoiados ou recomendados pelo prefeito de sua cidade? DEP. FEDERAL:",
    type: 2,
    campos: [
        {
            id: '231',
            title: "Sim",
            selected: false
        },
        {
            id: '232',
            title: "Não",
            selected: false
        },
        {  
            id: '233',
            title: "Talvez votaria",
            selected: false
        },
        {
            id: '234',
            title: "Independe",
            selected: false
        },
    ]
},
{
    id: '24',
    question: "Votaria nos candidatos apoiados ou recomendados pelo prefeito de sua cidade? DEP. ESTADUAL:",
    type: 2,
    campos: [
        {
            id: '241',
            title: "Sim",
            selected: false
        },
        {
            id: '242',
            title: "Não",
            selected: false
        },
        {
            id: '243',
            title: "Talvez votaria",
            selected: false
        },
        {
            id: '244',
            title: "Independe",
            selected: false
        },
    ]
},

]
export {pesquisa, pesquisaBase};