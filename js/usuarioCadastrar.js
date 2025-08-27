document.addEventListener('DOMContentLoaded', () => {
    const api = document.getElementById('cadastrarAPI')
    const btn = document.getElementById('btn')

    api.addEventListener('click', () => {
        let a = true
        fetch('https://dummyjson.com/user')
            .then(resp => resp.json())
            .then(dados => {
                console.log(dados.users)
                dados.users.forEach(dad => {
                    let numeroTelefoneFormatado = dad.phone
                    let numeroInteiro = numeroTelefoneFormatado.replace(/\D/g, '')
                    const valores = {
                        id: dad.id,
                        primeiroNome: dad.firstName,
                        sobrenome: dad.lastName,
                        idade: dad.age,
                        email: dad.email,
                        telefone: numeroInteiro,
                        endereco: dad.address.address,
                        cidade: dad.address.city,
                        estado: dad.address.state,
                        dataNasc: dad.birthDate
                    }
                    fetch('http://localhost:3000/usuario', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(valores)
                    })
                        .then(resp => resp.json())
                        .then(dados => {
                            console.log(`Usuário ${dad.firstName} cadastrado`)
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
        const primeiroNome = document.getElementById('primeiroNome').value
        const sobrenome = document.getElementById('sobrenome').value
        const idade = Number(document.getElementById('idade').value)
        const email = document.getElementById('email').value
        const telefone = document.getElementById('telefone').value
        const endereco = document.getElementById('endereco').value
        const cidade = document.getElementById('cidade').value
        const estado = document.getElementById('estado').value
        const dataNasc = document.getElementById('dataNasc').value

        const valores = {
            primeiroNome,
            sobrenome,
            idade,
            email,
            telefone,
            endereco,
            cidade,
            estado,
            dataNasc
        }

        fetch(`http://localhost:3000/usuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
            .then(resp => resp.json())
            .then(dados => {
                window.alert(`Usuário: ${dados.nome} cadastrado com sucesso!`)
            })
            .catch((err) => {
                console.error('Erro ao cadastrar o usuário!', err)
                window.alert('Erro ao cadastrar o usuário')
            })
    })
})