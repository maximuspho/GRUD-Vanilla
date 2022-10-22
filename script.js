var linhaSelecionada = null

function onFormSubmit() {
    var formData = readFormData()

    if (linhaSelecionada == null)
        inseirNovoRegistro(formData)
    else
        atualizaDados(formData)

    limparFormulario()
}

//ler os dados do formulario
function readFormData() {
    var formData = {}

    formData["nomecompleto"] = document.getElementById("nomecompleto").value;
    formData["codigoemp"] = document.getElementById("codigoemp").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

function inseirNovoRegistro(data) {
    var tabela = document.getElementById("listaDeFuncionarios").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.length)

    celula1 = novaLinha.insertCell(0)
    celula1.innerHTML = data.nomecompleto
    celula2 = novaLinha.insertCell(1)
    celula2.innerHTML = data.codigoemp
    celula3 = novaLinha.insertCell(2)
    celula3.innerHTML = data.salario
    celula4 = novaLinha.insertCell(3)
    celula4.innerHTML = data.cidade
    celula4 = novaLinha.insertCell(4)
    celula4.innerHTML = `<a onClick="onEdit(this)">Editar</><a onClick="onDelete(this)">Apagar</a>`
}

function limparFormulario() {
    document.getElementById("nomecompleto").value = "";
    document.getElementById("codigoemp").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    linhaSelecionada = null;
}

function onEdit(td) {
    linhaSelecionada = td.parentElement.parentElement
    document.getElementById("nomecompleto").value = linhaSelecionada.cells[0].innerHTML
    document.getElementById("codigoemp").value = linhaSelecionada.cells[1].innerHTML
    document.getElementById("salario").value = linhaSelecionada.cells[2].innerHTML
    document.getElementById("cidade").value = linhaSelecionada.cells[3].innerHTML

}

function atualizaDados(formData) {
    linhaSelecionada.cells[0].innerHTML = formData.nomecompleto
    linhaSelecionada.cells[1].innerHTML = formData.codigoemp
    linhaSelecionada.cells[2].innerHTML = formData.salario
    linhaSelecionada.cells[3].innerHTML = formData.cidade
}

function onDelete(td) {
    if (confirm('Deseja realmente apagar?')) {
        linha = td.parentElement.parentElement
        document.getElementById("listaDeFuncionarios").deleteRow(linha.rowIndex)
        limparFormulario()
    }
}