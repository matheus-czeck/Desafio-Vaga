import "./SecondQuestion.css";
import { useState } from "react";

const SecondQuestion = () => {
  const [chosenNumber, setChosenNumber] = useState("");

  const handleChose = (e) => {
    setChosenNumber(e.target.value);
  };

  const handleSecondQuestion = () => {
    var firstNumber = 0;
    var secondNumber = 1;
    var sum = 0;
    var arrayNumber = [];

    arrayNumber.push(firstNumber);
    arrayNumber.push(secondNumber);

    for (var i = 2; i < 70; i++) {
      sum = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = sum;
      arrayNumber.push(sum);
    }
    arrayNumber.join("-");
    const convert = Number(chosenNumber);
    const check = arrayNumber.find((element) => element === convert);

    if (chosenNumber !== "") {
      if (check !== undefined) {
        return (
          <span className="green">
            Sim!! O número {chosenNumber} está na sequencia de Fibonacci
          </span>
        );
      } else {
        return (
          <span className="red">
            Não! O número {chosenNumber} não na sequencia de Fibonacci
          </span>
        );
      }
    }
  };
  return (
    <div>
      <h2>Questão 2</h2>
      <form>
        <label>Seu número está na sequencia de Fibonacci? </label>
        <input
          type="number"
          placeholder="Digite um número"
          onChange={handleChose}
        />
      </form>
      <p>Resposta: {handleSecondQuestion()} </p>
    </div>
  );
};

export default SecondQuestion;
