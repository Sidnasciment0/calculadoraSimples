const inquirer = require("inquirer");
const calculadoraSimples = require("./calculadoraSimples");

inquirer.prompt([
    {
        name: "n1",
        message: "Digite o primeiro número: "
    },
    {
        name: "n2",
        message: "Digite o segundo número: "
    },
    {
        name: "operacao",
        message: "Qual operação deseja fazer?\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir"
    }
]).then((answer) => {
    let n1 = parseFloat(answer.n1)
    let n2 = parseFloat(answer.n2)
    let operacao = answer.operacao
    let resultado

        switch(operacao) {
            case "1":
                resultado = calculadoraSimples.soma(n1, n2)
                console.log(`A soma dos números é igual a: ${n1 + n2}`)
                break;
            case "2":
                resultado = calculadoraSimples.sub(n1, n2)
                console.log(`A subtração dos números é igual a: ${n1 - n2}`)
                break;
            case "3":
                resultado = calculadoraSimples.mult(n1, n2)
                console.log(`A multiplicação dos números é igual a: ${n1 * n2}`)
                break;
            case "4":
                resultado = calculadoraSimples.div(n1, n2)
                console.log(`A divisão dos números é igual a: ${n1 / n2}`)
                break;

            default:
                console.log(`Opção inválida`);
            break;
        }
}).catch((err) => {
    console.log(err)
})
