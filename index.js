// Estado principal da aplicação
let saldo = 5000;
let operacaoAtual = null;

// Referências dos elementos do HTML (DOM)
const saldoSpan = document.getElementById("saldo");
const menuInicial = document.getElementById("menuInicial");
const areaTransacao = document.getElementById("areaTransacao");
const inputValor = document.getElementById("inputValor");
const mensagem = document.getElementById("mensagem");

// Atualiza o saldo exibido na tela
function atualizarSaldoNaTela() {
    saldoSpan.textContent = saldo.toFixed(2);
}

// Prepara a interface para operação de saque
function sacar() {
    operacaoAtual = "saque";
    menuInicial.style.display = "none"
    areaTransacao.style.display = "block"
    inputValor.value = ""
    mensagem.textContent = ""

    let valor = Number(inputValor.value);

    if (valor <= 0) {
        console.log("Valor inválido");
        return;
    }

    if (valor > saldo) {
        console.log("Saldo insuficiente");
        return;
    }

    saldo -= valor;
    console.log("Saque realizado! Saldo atual:", saldo);

    input.value = "";

}

// Prepara a interface para operação de depósito
function depositar() {
    operacaoAtual = "deposito";
    menuInicial.style.display = "none"
    areaTransacao.style.display = "block"
    inputValor.value = ""
    mensagem.textContent = ""

    let valor = Number(input.value);

    if (valor <= 0) {
        console.log("Valor inválido");
        return;
    }

    saldo += valor;
    console.log("Depósito realizado! Saldo atual:", saldo);

    input.value = "";


}

// Executa a transação escolhida (saque ou depósito)
function adicionarValor() {
    const input = document.getElementById("inputValor");
    let valor = Number(input.value);
    if (operacaoAtual === "saque") {
        if (valor <= 0) {
            console.log("Valor inválido");
            return;
        }
        if (valor > saldo) {
            console.log("Saldo insuficiente");
            return;
        }
        saldo -= valor;
        console.log("Saque realizado! Saldo atual:", saldo);
    } else if (operacaoAtual === "deposito") {
        if (valor <= 0) {
            console.log("Valor inválido");
            return;
        }
        saldo += valor;
        console.log("Depósito realizado! Saldo atual:", saldo);
    }
    input.value = "";
    saldoSpan.textContent = saldo.toFixed(2)
    mensagem.textContent = `Operação de ${operacaoAtual} realizada com sucesso!`

    // Atualiza saldo na interface
    atualizarSaldoNaTela();

    // Volta para o menu inicial após concluir
    areaTransacao.style.display = "none"
    menuInicial.style.display = "block"
    inputValor.value = ""

}