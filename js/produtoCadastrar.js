document.addEventListener('DOMContentLoaded', () => {
    const api = document.getElementById('cadastrarAPI')
    const btn = document.getElementById('btn')

    api.addEventListener('click', () => {
        let a = true
        fetch('https://dummyjson.com/products')
            .then(resp => resp.json())
            .then(dados => {
                dados.products.forEach(dad => {
                    const valores = {
                        id: dad.id,
                        titulo: dad.title,
                        descricao: dad.description,
                        categoria: dad.category,
                        preco: dad.price,
                        percentualDesconto: dad.discountPercentage,
                        estoque: dad.stock,
                        marca: dad.brand,
                        imagem: dad.thumbnail
                    }

                    fetch('http://localhost:3000/produto', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(valores)
                    })
                        .then(resp => resp.json())
                        .then(dados => {
                            console.log(`Produto ${dados.title} cadastrado`)
                        })
                })
            })
            .catch((err) => {
                a = false
                console.error('Erro ao buscar os dados', err)
            })
        if (a) {
            window.alert('Usuários cadastrados')
        } else {
            window.alert('Erro ao cadastrar usuários')
        }
    })

    btn.addEventListener('click', () => {
        const titulo = document.getElementById('titulo').value
        const descricao = document.getElementById('descricao').value
        const categoria = document.getElementById('categoria').value
        const preco = Number(document.getElementById('preco').value)
        const percentualDesconto = Number(document.getElementById('percentualDesconto').value)
        const estoque = Number(document.getElementById('estoque').value)
        const marca = document.getElementById('marca').value
        const imagem = document.getElementById('imagem').value

        const valores = {
            titulo,
            descricao,
            categoria,
            preco,
            percentualDesconto,
            estoque,
            marca,
            imagem
        }

        fetch(`http://localhost:3000/produto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
            .then(resp => resp.json())
            .then(dados => {
                window.alert(`Produto: ${dados.titulo} cadastrado com sucesso!`)
            })
            .catch((err) => {
                console.error('Erro ao cadastrar o Produto!', err)
                window.alert('Erro ao cadastrar o Produto')
            })
    })
})