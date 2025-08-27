let res = document.getElementById('res')
let resListarId = document.getElementById('resListarId')

let listarTudo = document.getElementById('listarTudo')
let listarId = document.getElementById('listarId')

const tabelaUsuarios = document.getElementById('usuarios-tabela')

listarTudo.addEventListener('click', ()=>{
    res.innerHTML = ''
    fetch(`http://localhost:3000/usuario`)
    .then(resp => resp.json())
    .then(usuario =>{
        tabelaUsuarios.innerHTML = '';

        usuario.forEach(usuario => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.primeiroNome}</td>
            <td>${usuario.sobrenome}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.endereco}</td>
            <td>${usuario.cidade}</td>
            <td>${usuario.estado}</td>
            <td>${usuario.dataNasc}</td>
            `
            tabelaUsuarios.appendChild(linha)
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os usuários!',err)
    })
})

listarId.addEventListener('click', ()=>{
    id = document.getElementById('id').value
    fetch(`http://localhost:3000/usuario/listar/${id}`)
    .then(resp => resp.json())
    .then(dad =>{
        resListarId.innerHTML += `
                {<br>
                ID: ${dad.id}<br>
                Nome: ${dad.primeiroNome}<br>
                Email: ${dad.email}<br>
                }<br>
            `;
    })
    .catch((err)=>{
        console.error('Erro ao listar o usuário!',err)
    })
})