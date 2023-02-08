// eslint-disable-next-line no-unused-vars
import React from "react";
import FamiliaMembro from "./FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Marcelo" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="Bruno" {...props}/>
      <FamiliaMembro nome="Pedro" sobrenome="Silva"/>
    </div>
  );
};
