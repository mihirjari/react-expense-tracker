import React, {createContext, useReducer} from "react";
import ReducerFn from "./ReducerFn";
//Initial State

const initialState = {
    transactions: []
}


//Creating Context
export const globalContext = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(ReducerFn, initialState);

    const addTransaction = (transaction) => {

        dispatch({
            type: 'ADD',
            payload: transaction
        });

    }

    const deleteTransaction = (id) => {

        dispatch({
            type: 'DELETE',
            payload: id
        });
    }

    return (

        <globalContext.Provider value={{transactions: state.transactions, addTransaction, deleteTransaction}}>
            {children}
        </globalContext.Provider>
    )
}