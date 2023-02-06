import React from "react";

import Card from "./componentes/layout/Card";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import NumAleatorio from "./componentes/basicos/NumAleatorio";

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div id="app">
    <h1>Fundamentos React!</h1>

    <Card titulo="#04 - Desafio Aleatório">
      <NumAleatorio min={10} max={60} />
    </Card>
    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="#02 - Com Parâmetro">
      <ComParametro
        titulo="Situação do aluno:"
        aluno="Pedro Silva"
        nota={9.3}
      />
      <ComParametro 
        titulo="Situação do aluno:" 
        aluno="Maria" 
        nota={6.7} />
    </Card>
    <Card titulo="#01 - Primeiro">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
