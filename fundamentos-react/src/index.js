import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno:"
            aluno="Pedro Silva"
            nota={9.3} />
        <ComParametro 
            titulo="Situação do aluno:"
            aluno="Maria"
            nota={6.7} />
    </div>,
    document.getElementById('root')
)