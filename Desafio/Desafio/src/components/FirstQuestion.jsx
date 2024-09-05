import React from "react";

const FirstQuestion = () => {
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
    <div>
      <h2> Questão 1</h2>
      <p>Resposta: O resultado sera: {FirstQuestion()}</p>
    </div>
  );
};

export default FirstQuestion;
