import "./ThirdQuestion.css";

import { useState, useEffect } from "react";

const url = "/enterprise.json";

const ThirdQuestion = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [diasFaturados, setDiasFaturados] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch("/enterprise.json");
      const data = await res.json();

      const min = Math.min(
        ...data.map((min) => min.valor).filter((valor) => valor > 0)
      );
      setMin(min);

      const max = Math.max(...data.map((max) => max.valor));
      setMax(max);

      const businessDay = data
        .map((days) => days.valor)
        .filter((days) => days > 0);

      var sum = 0;

      for (var i = 0; i < businessDay.length; i++) {
        sum += businessDay[i];
      }

      const media = sum / businessDay.length;

      const diasFaturados = data
        .map((data) => data.valor)
        .filter((data) => data > media);

      setDiasFaturados(diasFaturados.length);
    }
    getData();
  }, []);

  return (
    <div>
      <h2>Questão 3</h2>
      <p>Respostas: </p>
      <p>
        Menor valor de faturamento: <span>{min}</span>
      </p>
      <p>
        Maior valor de faturamento: <span>{max}</span>
      </p>
      <p>
        Dias do mês em que o faturamento foi maior que a média mensal:{" "}
        <span>{diasFaturados} dias</span>
      </p>
    </div>
  );
};

export default ThirdQuestion;
