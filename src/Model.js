import React, {createContext, useState} from "react";

const states = {op1:"op1", ope:"operator", op2:"op2", equal:"equal"};
const operators = {add:"add", sub:"sub", mul:"mul", div:"div"};

const initialCalculator = {
  stringMain:"",
  stringSec:"",
  operand1:null,
  operand2:null,
  operator:null,
  state:states.op1,
  result:0
};

export const CalculatorContext = createContext(null);

export const CalculatorProvider = ({children})=>{
  const [calculator, setCalculator] = useState(initialCalculator);

  return (
    <CalculatorContext.Provider value={{calculator, setCalculator}}>
      {children}
    </CalculatorContext.Provider>
  )
};

export const deleteAll = ()=>{
  return {
    stringMain:"",
    operand1:null,
    operand2:null,
    operator:null,
  }
};

export const addNumber = (calculator, value)=>{
  let {stringMain, state} = calculator;
  stringMain = stringMain + value;
  if (state === states.ope) state = states.op2;
  return {...calculator, stringMain:stringMain, state:state}
};

export const onOperator = (calculator)=>{
  let {stringMain, stringSec, operand1, operator, state} = calculator;
  if (state === states.op1){
    operand1 = Number(stringMain);
    stringSec = stringMain + " + ";
    stringMain = "";
    state = states.ope;
    operator = operators.add;
  }

  return {
    ...calculator,
    stringMain:stringMain,
    stringSec:stringSec,
    operand1:operand1,
    operator:operator,
    state:state
  }
};

const add = (operand1, operand2)=>{
  return operand1 + operand2
};

export const onEqual = (calculator)=>{
  let {operand1, operand2, stringMain, stringSec, state, result, operator} = calculator;
  if (state === states.op2){
    operand2 = Number(stringMain);
    result = add(operand1, operand2);
    stringMain = "" + result;
    stringSec = stringSec + operand2 + " = " + result;
    state = states.equal;
    operator = operators.add;
  }
  return {
    ...calculator,
    stringMain:stringMain,
    stringSec:stringSec,
    operand2:operand2,
    operator:operator,
    state:state,
    result:result
  }
};