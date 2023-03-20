import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from '../../store/index'
import { add2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, 'manoel')}
          >
            Login
          </button>
          <button className="btn" onClick={() => add2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "vezes7" })}>
            7x
          </button>
          <button className="btn" onClick={() => dispatch({ type: "divide25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "round" })}>
            round
          </button>
          <button className="btn" onClick={() => dispatch({ type: "addN", payload: +13 })}>
            +N
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
