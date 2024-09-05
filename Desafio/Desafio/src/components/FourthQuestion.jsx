
const FourthQuestion = () => {
  var sp = 67836.43;
  var rj = 36678.66;
  var mg = 29229.88;
  var es = 27165.48;
  var outros = 19849.53;

  var result = 0;
  var sum = 0;

  const calcPercent = (estado) => {
    sum = sp + rj + mg + +es + outros;
    result = (estado * 100) / sum;

    return result.toFixed(2);
  };

  return (
    <div>
      <h2>Questão 4</h2>
      <p>Resposta:</p>
      <p>
        Percentual de SP: <span className="green">{calcPercent(sp)}% </span>
      </p>
      <p>
        Percentual de RJ: <span className="yellow">{calcPercent(rj)}%</span>
      </p>
      <p>
        Percentual de MG:{" "}
        <span className="light-orange">{calcPercent(mg)}%</span>
      </p>
      <p>
        Percentual de ES: <span className="orange">{calcPercent(es)}%</span>
      </p>
      <p>
        Percentual de Outros:{" "}
        <span className="red">{calcPercent(outros)}%</span>
      </p>
    </div>
  );
};

export default FourthQuestion;
