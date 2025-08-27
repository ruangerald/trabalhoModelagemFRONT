// progGraficProductStock.js

let produtos = []
let chartInstance = null

const buscarDados = document.getElementById('buscarDadosProd')
const gerarGrafic = document.getElementById('gerarGraficProd')
const graficProductStock = document.getElementById('graficProductStock')

buscarDados.addEventListener('click', (e) => {
    e.preventDefault()

    produtos = []

    fetch('http://localhost:3000/produto')
        .then(resp => resp.json())
        .then(dados => {
            produtos = dados.map(prod => ({
                titulo: prod.titulo,
                estoque: prod.estoque
            }))
            console.log('Produtos e estoque:', produtos)
            alert('Dados carregados! Clique em "Gerar Gráfico" para visualizar.')
        })
        .catch(err => console.error('Erro ao buscar produtos', err))
})

gerarGrafic.addEventListener('click', () => {
    if (produtos.length === 0) {
        alert('Primeiro busque os dados antes de gerar o gráfico!')
        return
    }

    if (chartInstance) {
        chartInstance.destroy()
    }

    const nomes = produtos.map(p => p.titulo)
    const estoques = produtos.map(p => p.estoque)

    chartInstance = new Chart(graficProductStock, {
        type: 'bar',
        data: {
            labels: nomes,
            datasets: [{
                label: 'Estoque',
                data: estoques,
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    })
})
