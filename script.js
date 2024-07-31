// Atribuindo os id/class em variáveis
let inputNome = document.querySelector('#nome')
let inputIdade = document.querySelector('#idade')
let inputPeso = document.querySelector('#peso')
let inputAltura = document.querySelector('#altura')
let inputImc = document.querySelector('#imc')
let aviso = document.querySelector('#aviso')

let dados = document.querySelectorAll('.pessoa')
let btnEnviar = document.querySelector('.btn-enviar')
let btnLimpar = document.querySelector('.btn-limpar')

// Atribuindo um evento ao clicar o botão enviar
btnEnviar.addEventListener('click', function(e) {
    e.preventDefault()

    // Pegando os valores das variáveis e passando para outras
    let nome = inputNome.value
    let idade = parseInt(inputIdade.value)
    let peso = parseFloat(inputPeso.value)
    let altura = parseFloat(inputAltura.value)
    let imc = (peso / (altura * altura)).toFixed(2)

    // Atribuindo o valor de (imc) para (inputImc)
    inputImc.value = imc

    // Chama a função (situacaoDoImc) passando o (imc) calculado e armazena o resultado na variável (resultado)
    let resultado = situacaoDoImc(imc)
    aviso.textContent = resultado

    // Criado um objeto (pessoa)
    const pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        resultado: resultado
    }

    
    // Um array (dados) que as sua posições são preenchidas com os valores das propriedades do objeto 'pessoa'
    dados[0].textContent = pessoa.nome
    dados[1].textContent = pessoa.idade + " anos"
    dados[2].textContent = pessoa.peso + " kg"
    dados[3].textContent = pessoa.altura + " m"
    dados[4].textContent = pessoa.imc + " - " + pessoa.resultado
})

btnLimpar.addEventListener('click', function() {
    // Percorre cada elemento no array dados
    dados.forEach(function(elemento) {
        // Define o conteúdo de texto de cada elemento como uma string vazia, limpando assim os valores exibidos
        elemento.textContent = "";
    });
});

// Criada a função (situacaoDoImc) puxando o índince (imc) 
function situacaoDoImc(imc) {
    let msg = ""

    if (imc < 18.5) {
        msg = "Baixo peso"
    } else if (imc >= 18.5 && imc <=24.9) {
        msg = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        msg = "Sobrepreso"
    } else if (imc >= 30 && imc <= 34.9) {
        msg = "Obesidade I"
    } else if (imc >= 35 && imc <= 39.9) {
        msg = "Obesiade II"
    } else if (imc >= 40) {
        msg = "Obesidade III"
    } else {
        msg = "Informe seu peso corretamente"
    }
    return msg
}

