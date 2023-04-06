import Cliente from "../src/core/Cliente"
import { IconeEdicao } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <td className="text-left p-4">Código</td>
                <td className="text-left p-4">Nome</td>
                <td className="text-left p-4">Idade</td>
                <td className=" p-4">Ações</td>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 
                    'bg-purple-200' : 
                    'big-purple-100'}                    
                    `}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td>
                <button>{IconeEdicao}</button>
            </td>
        )
    }

    return (
        <table className="w-full">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
            
        </table>
    )
} 