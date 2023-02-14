import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const tableStyle = {
    border: "1px solid black",
  };
  const prodId = produtos.map((produto, i) => {
    return <tr className={i % 2 == 0 ? "Par" : ""}>{produto.id}</tr>;
  });
  const prodNome = produtos.map((produto, i) => {
    return <tr className={i % 2 == 0 ? "Par" : ""}>{produto.nome}</tr>;
  });
  const prodValor = produtos.map((produto, i) => {
    return <tr className={i % 2 == 0 ? "Par" : ""}>{produto.valor}</tr>;
  });
  return (
    <table style={tableStyle}>
      <tr>
        <th style={tableStyle}>ID</th>
        <th style={tableStyle}>PRODUTO</th>
        <th style={tableStyle}>VALOR</th>
      </tr>
      <tr>
        <td style={tableStyle}>{prodId}</td>
        <td style={tableStyle}>{prodNome}</td>
        <td style={tableStyle}>{prodValor}</td>
      </tr>
    </table>
  );
};
