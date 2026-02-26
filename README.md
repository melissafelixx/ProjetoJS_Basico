# 💳 Simulador de Caixa Eletrônico | JavaScript

Projeto desenvolvido com foco em prática de **lógica de programação**, **manipulação do DOM** e controle de estado utilizando **JavaScript puro (Vanilla JS)**.

A aplicação simula operações básicas de um caixa eletrônico, permitindo ao usuário realizar saques e depósitos com atualização dinâmica do saldo.

---

## 🎯 Objetivo do Projeto

Demonstrar domínio de:

- Estruturação de fluxo lógico
- Manipulação de elementos da interface
- Validação de dados do usuário
- Controle de estado da aplicação
- Organização de código em JavaScript

---

## 🚀 Funcionalidades

- Exibição de saldo inicial (`R$ 1000,00`)
- Seleção de operação: **Saque** ou **Depósito**
- Exibição condicional da área de transação
- Validação de valores inválidos (≤ 0)
- Bloqueio de saque com saldo insuficiente
- Atualização automática do saldo
- Feedback visual com mensagens de erro e sucesso
- Retorno ao menu inicial após conclusão da operação

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento, foram aplicados:

- Manipulação do DOM com `getElementById`
- Controle de visibilidade com `style.display`
- Estruturas condicionais (`if/else`)
- Conversão e validação de valores numéricos
- Controle de estado com variáveis globais

Exemplo de controle de estado:

```javascript
let saldo = 1000;
let operacaoAtual = "";
```

---

## 🛠 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Estrutura do Projeto

```
📁 ProjetoJS_Basico
 ├── index.html
 ├── style.css
 └── script.js
```

---

## 🌐 Acesse o Projeto

🔗 Repositório:  
https://github.com/melissafelixx/ProjetoJS_Basico  

💻 Para executar localmente:
Basta abrir o arquivo `index.html` em seu navegador.

---

## 📈 Próximas Melhorias

- Melhorar a interface com design mais moderno
- Implementar histórico de transações
- Adicionar formatação automática de moeda
- Refatorar código para funções reutilizáveis

---

## 👩‍💻 Desenvolvido por

Melissa Felix Santos  

Projeto criado como parte do meu processo contínuo de aprendizado.
