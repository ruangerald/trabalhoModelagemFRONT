document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        const idUsuario = Number(document.getElementById('idUsuario').value)
        const primeiroNome = document.getElementById('primeiroNome').value
        const sobrenome = document.getElementById('sobrenome').value
        const idade = document.getElementById('idade').value
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

        fetch(`http://localhost:3000/usuario/${idUsuario}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
            .then(resp => resp.json())
            .then(dados => {
                window.alert(`Usuário: ${dados.nome} atualizado com sucesso!`)
            })
            .catch((err) => {
                console.error('Erro ao atualizar o usuário!', err)
                window.alert('Erro ao atualizar o usuário')
            })
    })
})