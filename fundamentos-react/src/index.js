import ReactDOM from 'react-dom'
import React from 'react'


const tag = <strong>Olá, react!</strong>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)