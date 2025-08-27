let idade = [], nome = []
let chartInstance = null

const buscarDados = document.getElementById('buscarDados')
const gerarGrafic = document.getElementById('gerarGrafic')
const graficUserAge = document.getElementById('graficUserAge')
const valIniInput = document.getElementById('valIni')

buscarDados.addEventListener('click', (e) => {
    e.preventDefault()
    
    const valIni = Number(valIniInput.value) || 0

    idade = []
    nome = []

    fetch('http://localhost:3000/usuario/grafico')
        .then(resp => resp.json())
        .then(dados => {
            dados.forEach(dad => {
                idade.push(dad.idade)
                nome.push(dad.primeiroNome)
            })

            idade = idade.slice(valIni, valIni + 10)
            nome = nome.slice(valIni, valIni + 10)

            console.log('Nomes:', nome)
            console.log('Idades:', idade)
        })
        .catch(err => console.error('Erro ao buscar os dados', err))
})

gerarGrafic.addEventListener('click', () => {
    if (nome.length === 0 || idade.length === 0) {
        alert('Primeiro busque os dados antes de gerar o gráfico!')
        return
    }

    if (chartInstance) {
        chartInstance.destroy()
    }

    chartInstance = new Chart(graficUserAge, {
        type: 'bar',
        data: {
            labels: nome,
            datasets: [{
                label: 'Idade',
                data: idade,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})