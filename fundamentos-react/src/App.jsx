import React from 'react';

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
    <div id="app">
        <h1>Fundamentos React!</h1>
        <p>Aprendendo a adicionar Arrow Function e diminuindo nossa função</p>
        <hr />
        <Fragmento />
        <hr />
        <ComParametro 
            titulo="Situação do aluno:"
            aluno="Pedro Silva"
            nota={9.3} />
        <ComParametro 
            titulo="Situação do aluno:"
            aluno="Maria"
            nota={6.7} />
        <hr />
        <Primeiro></Primeiro>
    </div>