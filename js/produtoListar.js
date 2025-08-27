let res = document.getElementById('res')

let btn = document.getElementById('btn')
let listarId = document.getElementById('listarId')

const tabelaProdutos = document.getElementById('produtos-tabela')

btn.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/produto`)
    .then(resp => resp.json())
    .then(produto =>{
        tabelaProdutos.innerHTML = '';

        produto.forEach(produto => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.titulo}</td>
            <td>${produto.descricao}</td>
            <td>${produto.categoria}</td>
            <td>${produto.preco}</td>
            <td>${produto.percentualDesconto}</td>
            <td>${produto.estoque}</td>
            <td>${produto.marca}</td>
            `
            tabelaProdutos.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os produtos!',err)
    })
})

let resListarId = document.getElementById('resListarId')

listarId.addEventListener('click', () => {
    const id = document.getElementById('id').value
    resListarId.innerHTML = '' // limpa resultado anterior

    fetch(`http://localhost:3000/produto/listar/${id}`)
        .then(resp => {
            if(!resp.ok){
                throw new Error('Produto não encontrado')
            }
            return resp.json()
        })
        .then(produto => {
            resListarId.innerHTML = `
                {<br>
                ID: ${produto.id}<br>
                Título: ${produto.titulo}<br>
                Preço: ${produto.preco}<br>
                Estoque: ${produto.estoque}<br>
                }<br>
            `
        })
        .catch(err => {
            console.error('Erro ao listar o produto!', err)
            resListarId.innerHTML = `Produto não encontrado ou erro ao buscar`
        })
})