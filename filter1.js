const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4199, fragil: true},
    {nome: 'Copo', preco: 12.48, fragil: true},
    {nome: 'Caneca', preco: 18.87, fragil: false},
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))