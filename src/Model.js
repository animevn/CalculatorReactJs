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
  result:""
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
    stringSec:"",
    operand1:null,
    operand2:null,
    operator:null,
    state:states.op1,
    result:""
  }
};

export const addNumber = (calculator, value)=>{
  let {stringMain, state} = calculator;
  stringMain = stringMain + value;
  if (state === states.ope) state = states.op2;
  return {...calculator, stringMain:stringMain, state:state}
};

export const onOperator = (calculator, id)=>{
  let {stringMain, stringSec, operand1, operator, state} = calculator;
  if (state === states.op1 && stringMain.length > 0){
    operand1 = Number(stringMain);
    // eslint-disable-next-line default-case
    switch (id) {
      case "add":
        stringSec = stringMain + " + ";
        operator = operators.add;
        break;
      case "sub":
        stringSec = stringMain + " - ";
        operator = operators.sub;
        break;
      case "mul":
        stringSec = stringMain + " x ";
        operator = operators.mul;
        break;
      case "div":
        stringSec = stringMain + " : ";
        operator = operators.div;
        break;
    }
    stringMain = "";
    state = states.ope;
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

const sub = (operand1, operand2)=>{
  return operand1 - operand2;
};

const mul = (operand1, operand2)=>{
  return operand1 * operand2;
};

const div = (operand1, operand2)=>{
  return operand1/operand2;
};



export const onEqual = (calculator)=>{
  let {operand1, operand2, stringMain, stringSec, state, result, operator} = calculator;
  if (state === states.op2){
    operand2 = Number(stringMain);
    // eslint-disable-next-line default-case
    switch (operator) {
      case operators.add:
        result = add(operand1, operand2);
        break;
      case operators.sub:
        result = sub(operand1, operand2);
        break;
      case operators.mul:
        result = mul(operand1, operand2);
        break;
      case operators.div:
        if (operand2 !== 0){
          result = div(operand1, operand2);
        }else {
          alert("cannot divide by zero");
          result = "";
        }
        break;

    }

    stringMain = "" + result;
    stringSec = stringSec + operand2 + " = " + result;
    state = states.equal;
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