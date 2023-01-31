import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'APROVADO' : 'REPROVADO'
    return (
        <div>
            <h1>{ props.titulo } </h1>
            <h2>{ props.aluno } tem nota { props.nota }, e está { status }</h2>
            <p></p>
        </div>
    )
}