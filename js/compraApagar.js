let res = document.getElementById('res')
let btn = document.getElementById('apagFab')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const idCompra = Number(document.getElementById('idCompra').value)
    console.log(id)

    res.innerHTML = ''

    fetch(`http://localhost:3000/compra/${idCompra}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp=> {
        if(resp.status === 204){
            res.innerHTML += `A compra foi excluída!`
        }else{
            res.innerHTML += `Compra não encontrada!`
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar a compra!',err)
    })

})