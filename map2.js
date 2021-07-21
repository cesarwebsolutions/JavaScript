const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Lapis", "preco": 1.90 }',
    '{ "nome": "Caneta", "preco": 3.90 }',
    '{ "nome": "Folha", "preco": 13.90 }',
    
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)