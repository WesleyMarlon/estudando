let bought = document.getElementById('bought_product')
let weight = document.getElementById('weight_product')
let weight_used = document.getElementById('weight_used')
let result = document.getElementById('result')
let produtos = document.getElementById('produtos')
let adicionar = document.getElementById('adicionar')
let remover = document.getElementById('remover')
let total = document.getElementById('total')
let result_final = document.getElementById('result_final')

// Calcular
function calcular(linha) {
    let bought = linha.querySelector('.bought_product')
    let weight = linha.querySelector('.weight_product')
    let weight_used = linha.querySelector('.weight_used')
    let result = linha.querySelector('.result')

    let value = Number(bought.value)
    let quantity = Number(weight.value)
    let used = Number(weight_used.value)

    if (value && quantity && used) {
        let cost = value / quantity * used

        result.textContent = `R$ ${cost.toFixed(2).replace('.', ',')}`
    }
}

// Calcular nova linha
function ativarCalculo(linha) {
    let bought = linha.querySelector('.bought_product')
    let weight = linha.querySelector('.weight_product')
    let weight_used = linha.querySelector('.weight_used')

    bought.addEventListener('input', function() {
        calcular(linha)
    })

    weight.addEventListener('input', function() {
        calcular(linha)
    })

    weight_used.addEventListener('input', function() {
        calcular(linha)
    })
}

let primeiraLinha = produtos.querySelector('tr')

ativarCalculo(primeiraLinha)

adicionar.addEventListener('click', function() {
    produtos.insertAdjacentHTML('beforeend', `
        <tr>
            <td><input class="product" type="text"></td>
            <td><input class="bought_product" type="number" min="0"></td>
            <td><input class="weight_product" type="number" min="0"></td>
            <td><input class="weight_used" type="number" min="0"></td>
            <td><output class="result">R$ 0,00</output></td>
        </tr>
    `)

    let novaLinha = produtos.lastElementChild

    ativarCalculo(novaLinha)
})

// Remover linha
remover.addEventListener('click', function() {
    let ultimaLinha = produtos.lastElementChild

    if (produtos.children.length > 1) {
        ultimaLinha.remove()
    }
})

// Somar tudo
total.addEventListener('click', function() {
    let resultados = produtos.querySelectorAll('.result')
    let soma = 0

    resultados.forEach(function(resultado) {
        let valor = resultado.textContent.replace('R$ ', '').replace(',', '.')
        soma += Number(valor)
    })

    result_final.textContent = `R$ ${soma.toFixed(2).replace('.', ',')}`
})