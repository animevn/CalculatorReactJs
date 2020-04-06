import React, {createContext, useEffect, useState} from "react";

const states = {op1:"op1", ope:"operator", op2:"op2", equal:"equal", error:"error"};
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

const getOperator = (id)=>{
  // eslint-disable-next-line default-case
  switch (id) {
    case "add": return operators.add;
    case "sub": return operators.sub;
    case "mul": return operators.mul;
    case "div": return operators.div;
  }
};

const getStringOperator = (id)=>{
  // eslint-disable-next-line default-case
  switch (id) {
    case "add": return " + ";
    case "sub": return " - ";
    case "mul": return " x ";
    case "div": return " : ";
  }
};

const calculateOperator = (operator, operand1, operand2)=>{
  // eslint-disable-next-line default-case
  switch (operator) {
    case operators.add: return add(operand1, operand2);
    case operators.sub: return sub(operand1, operand2);
    case operators.mul: return mul(operand1, operand2);
    case operators.div:
      if (operand2 !== 0){
        return div(operand1, operand2);
      }else {
        alert("divided by zero");
        return "Error";
      }
  }
};

export const CalculatorContext = createContext(null);

export const CalculatorProvider = ({children})=>{
  const save = localStorage.getItem("save");
  const [calculator, setCalculator] = useState(save ? JSON.parse(save) : initialCalculator);

  useEffect(()=>{
    localStorage.setItem("save", JSON.stringify(calculator));
  }, [calculator]);

  const deleteAll = ()=>{
    setCalculator({
      stringMain:"",
      stringSec:"",
      operand1:null,
      operand2:null,
      operator:null,
      state:states.op1,
      result:""
    })
  };

  const addNumber = (value)=>{
    let {stringMain, state} = calculator;
    if (state === states.error || state === states.equal){
      setCalculator({
        stringMain:value,
        stringSec:"",
        operand1:null,
        operand2:null,
        operator:null,
        state:states.op1,
        result:""
      })
    }else {
      stringMain = stringMain + value;
      if (state === states.ope) state = states.op2;
      setCalculator({...calculator, stringMain:stringMain, state:state});
    }
  };

  const onOperator = (id)=>{
    let {stringMain, stringSec, operand1, operator, state, result} = calculator;
    if (stringMain.length > 0){
      if (state === states.op1 && stringMain.length > 0){
        operand1 = Number(stringMain);
      }else if (state === states.equal){
        operand1 = Number(result);
      }
      stringSec = stringMain + getStringOperator(id);
      operator = getOperator(id);
      stringMain = "";
      state = states.ope;
      setCalculator({
        ...calculator,
        stringMain:stringMain,
        stringSec:stringSec,
        operand1:operand1,
        operator:operator,
        state:state
      });
    }
  };

  const onEqual = ()=>{
    let {operand1, operand2, stringMain, stringSec, state, result, operator} = calculator;
    if (state === states.op2){
      operand2 = Number(stringMain);
      result = calculateOperator(operator, operand1, operand2);
      if (result === "Error"){
        stringSec = result;
        stringMain = "";
        state = states.error;
      }else {
        stringMain = "" + result;
        stringSec = stringSec + operand2 + " = " + result;
        state = states.equal;
      }
    }

    setCalculator({
      ...calculator,
      stringMain:stringMain,
      stringSec:stringSec,
      operand2:operand2,
      operator:operator,
      state:state,
      result:result
    });
  };



  return (
    <CalculatorContext.Provider value={{calculator, setCalculator,
      deleteAll, addNumber, onOperator, onEqual}}>
      {children}
    </CalculatorContext.Provider>
  )
};

