import "./App.css";
import React from "react";

import Card from "./componentes/layout/Card";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import NumAleatorio from "./componentes/basicos/NumAleatorio";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React!</h1>
    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <NumAleatorio min={10} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno:"
          aluno="Pedro Silva"
          nota={9.3}
        />
        <ComParametro titulo="Situação do aluno:" aluno="Maria" nota={6.7} />
      </Card>
      <Card titulo="#01 - Primeiro" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
