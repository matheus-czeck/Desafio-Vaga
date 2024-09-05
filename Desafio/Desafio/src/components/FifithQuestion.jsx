import React from "react";

const FifithQuestion = () =>{

  const phrase = "A imaginação é mais importante que o conhecimento";
  const HandleRandomPhrase = () => {
    const invertPhrase = phrase.split("");
    var result = "";

    for (var i = 0; i <= invertPhrase.length; i++) {
      var desmontandoArray = Math.floor(Math.random() * invertPhrase.length);

      var unindoArray = invertPhrase.splice(desmontandoArray, 1);
      result += unindoArray;
    }
    return result;
  };

  return (
    <div>
      <h2>Questão 5</h2>
      <p>Resposta: </p>
      <p>
        A frase: <span>{phrase}</span>
      </p>
      <p>
        Ficará embaralhada: <span>{HandleRandomPhrase()}</span>
      </p>
    </div>
  );
};

export default FifithQuestion;
