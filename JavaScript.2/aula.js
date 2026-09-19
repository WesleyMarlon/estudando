let bought = document.getElementById('bought_product')
let weight = document.getElementById('weight_product')
let weight_used = document.getElementById('weight_used')
let result = document.getElementById('result')
let produtos = document.getElementById('produtos')
let adicionar = document.getElementById('adicionar')


// Calcular
function calcular() {
    let value = Number(bought.value)
    let quantity = Number(weight.value)
    let used = Number(weight_used.value)

    if (value && quantity && used) {
        let cost = value / quantity * used

        result.textContent = `R$ ${cost.toFixed(2).replace('.', ',')}`
    }
}

bought.addEventListener('input', calcular)
weight.addEventListener('input', calcular)
weight_used.addEventListener('input', calcular)


// Adicionar linha
adicionar.addEventListener('click', function() {
    produtos.innerHTML += `
        <tr>
            <td><input type="text"></td>
            <td><input type="number" min="0"></td>
            <td><input type="number" min="0"></td>
            <td><input type="number" min="0"></td>
            <td><output>R$ 0,00</output></td>
        </tr>
    `
})