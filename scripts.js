//Seleciona os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul")

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

// captura o evento de submit do formulário para obter os valores.
form.onsubmit = (event) => {
    //Previne o comportamento padrão de recarregar a página.
    event.preventDefault()

    // cria um objeto com os detalhes na nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name:category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    //chama a função que irá adicionar o item na lista.
    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
    try{
        // cria o elemento para adicionar o item (li) na lista (ul).
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o ícone da categoria.
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Adiciona as informações no item.
        expenseItem.append(expenseIcon)

        // Adicona o item na lista.
        expenseList.append(expenseItem)

    } catch (error) {
        alert("não foi possível atualizar a lista de despesas.")
        console.log(error)
    }
}