let res = document.getElementById('res')
let btn = document.getElementById('apagFab')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const idProduto = Number(document.getElementById('idProduto').value)
    console.log(id)

    res.innerHTML = ''

    fetch(`http://localhost:3000/produto/${idProduto}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp=> {
        if(resp.status === 204){
            res.innerHTML += `O produto foi excluído!`
        }else{
            res.innerHTML += `Produto não encontrado!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar o Produto!',err)
    })

})