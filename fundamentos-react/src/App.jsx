import "./App.css";
import React from "react";

import ParOuImpar from "./componentes/condicional/ParOuImpar";
import ListaProdutos from "./componentes/repeticao/ListaProdutos";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembro from "./componentes/basicos/FamiliaMembro";
import Card from "./componentes/layout/Card";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import NumAleatorio from "./componentes/basicos/NumAleatorio";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React!</h1>
    <div className="Cards">
      <Card titulo="#08 - Renderização condicional" color="#c1946a">
        <ParOuImpar numero={1}></ParOuImpar>
      </Card>

      <Card titulo="#07 - Exercício de repetição" color="#6b5b95">
        <ListaProdutos></ListaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Marcelo" />
          <FamiliaMembro nome="Bruno" />
          <FamiliaMembro nome="Pedro" sobrenome="Silva" />
        </Familia>
      </Card>

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
