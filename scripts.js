//Seleciona os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
    //obtém o valor atual e remove os caracteres não numéricos.
    let value = amount.value.replace(/\D/g, "")

    //transforma o valor em centavos (ex.:150/100=1.5 que é equivalente a R$ 1,50)
    value = Number(value) / 100

    //Atualiza o valor do input
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    //formatando o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    //retorna o valor formatado
    return value
}

form.onsubmit = (event) => {
    event.preventDefault()
}