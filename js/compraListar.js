let res = document.getElementById('res')

let btn = document.getElementById('btn')

const tabelaCompras = document.getElementById('compras-tabela')

btn.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/compra`)
    .then(resp => resp.json())
    .then(compra =>{
        tabelaCompras.innerHTML = '';

        compra.forEach(compra => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${compra.idCompra}</td>
            <td>${compra.idUsuario}</td>
            <td>${compra.idProduto}</td>
            <td>${compra.quantidade}</td>
            <td>${compra.dataCompra}</td>
            <td>${compra.precoUnitario}</td>
            <td>${compra.descontoAplicado}</td>
            <td>${compra.precoFinal}</td>
            <td>${compra.formaPagamento}</td>
            <td>${compra.statusCompra}</td>
            `
            tabelaCompras.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar as compras!',err)
    })
})

listarId.addEventListener('click', ()=>{
    id = document.getElementById('id')
    fetch(`http://localhost:3000/compra/listar/:id`)
    .then(resp => resp.json())
    .then(dados =>{
        dados.forEach(dad => {
            res.innerHTML += `{<br>${dad}<br>}<br>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar a compra!',err)
    })
})