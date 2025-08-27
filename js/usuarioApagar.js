let res = document.getElementById('res')
let btn = document.getElementById('apagFab')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const idUsuario = Number(document.getElementById('idUsuario').value)
    console.log(id)

    res.innerHTML = ''

    fetch(`http://localhost:3000/usuario/${idUsuario}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp=> {
        if(resp.status === 204){
            res.innerHTML += `O usuário foi excluído!`
        }else{
            res.innerHTML += `Usuário não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar o Usuário!',err)
    })

})