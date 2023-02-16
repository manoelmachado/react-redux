import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Augusto" idade={32} estudante={true}/>
            <DiretaFilho nome="Claudia" idade={7} estudante={false}/>
        </div>
    )
}