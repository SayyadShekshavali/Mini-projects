import { createContext, useReducer } from "react";

const ExpenseContext = createContext();

const initialstate = {
  trasaction: [],
};

//! REducer function
const expenseReducer=(state,action)={
    switch(action.type){
        case "ADD":
            return{
                ...state,
                trasaction:[action.payload,...state.transaction],
            }
    }

}