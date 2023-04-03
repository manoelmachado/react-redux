import Titulo from "./Titulo"
interface LayoutProps {
    titulo: string;
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
         bg-white text-gray-900
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
    )
}