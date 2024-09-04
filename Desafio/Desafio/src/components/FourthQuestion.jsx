import React from "react";
import { useState } from "react";

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
      <p>Percentual de SP: {calcPercent(sp)}%</p>
      <p>Percentual de RJ: {calcPercent(rj)}%</p>
      <p>Percentual de MG: {calcPercent(mg)}%</p>
      <p>Percentual de ES: {calcPercent(es)}%</p>
      <p>Percentual de Outros:{calcPercent(outros)}%</p>
    </div>
  );
};

export default FourthQuestion;
