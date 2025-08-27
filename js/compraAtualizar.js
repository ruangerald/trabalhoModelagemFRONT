document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    btn.addEventListener('click', () => {
        const idCompra = Number(document.getElementById('idCompra'))
        const idUsuario = Number(document.getElementById('idUsuario').value)
        const idProduto = Number(document.getElementById('idProduto').value)
        const quantidade = Number(document.getElementById('quantidade').value)
        const dataCompra = document.getElementById('dataCompra').value
        const precoUnitario = Number(document.getElementById('precoUnitario').value)
        const descontoAplicado = Number(document.getElementById('descontoAplicado').value)
        const precoFinal = precoUnitario - (precoUnitario * (descontoAplicado/100))
        const formaPagamento = document.getElementById('formaPagamento').value
        const statusCompra = document.getElementById('statusCompra').value

        const valores = {
            idUsuario,
            idProduto,
            quantidade,
            dataCompra,
            precoUnitario,
            precoFinal,
            formaPagamento,
            statusCompra
        }

        fetch(`http://localhost:3000/compra/${idCompra}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
            .then(resp => resp.json())
            .then(dados => {
                window.alert(`Compra atualizada com sucesso!`)
            })
            .catch((err) => {
                console.error('Erro ao cadastrar a compra!', err)
                window.alert('Erro ao cadastrar a compra')
            })
    })
})