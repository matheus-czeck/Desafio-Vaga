import "./App.css";
import FifithQuestion from "./components/FifithQuestion"
import FourthQuestion from "./components/FourthQuestion";
import SecondQuestion from "./components/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion";

function App() {
  const FirstQuestion = () => {
    var indice = 13;
    var soma = 0;
    var k = 0;
    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }
    console.log(" o resultado de soma é:" + soma);
    console.log(" o resultado de k é:" + k);

    return soma;
  };

  

  return (
    <>
      {/*1 - Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0,  K = 0;
      Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA);
      Ao final do processamento, qual será o valor da variável SOMA?*/}

      <h1>Respostas</h1>
      <h2> Questão 1</h2>
      <p>Resposta: {FirstQuestion()}</p>
      <SecondQuestion />
      <ThirdQuestion />
      <FourthQuestion />
      <FifithQuestion />
      

      {/*2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/}

      {/* 3- Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/}
    </>
  );
}

export default App;
