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

const isOK = (value)=>{
  return value.length < 10;
};

const isReady = (value)=>{
  return value.length > 0;
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

  const addZero = ()=>{
    let {stringMain, state} = calculator;
    if (state === states.error || state === states.equal){
      setCalculator({
        stringMain:"0",
        stringSec:"",
        operand1:null,
        operand2:null,
        operator:null,
        state:states.op1,
        result:""
      })
    }else {
      if ((stringMain.length > 0 && stringMain !== "0" && stringMain !== "-0" && isOK(stringMain))
        || stringMain.length === 0){
        stringMain = stringMain + 0;
        if (state === states.ope) state = states.op2;
        setCalculator({...calculator, stringMain:stringMain, state:state});
      }
    }
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
      if (isOK(stringMain)){
        if (stringMain === "0"){
          stringMain = value;
        }else if (stringMain === "-0"){
          stringMain = "-" + value;
        }else {
          stringMain = stringMain + value;
        }
        if (state === states.ope) state = states.op2;
        setCalculator({...calculator, stringMain:stringMain, state:state});
      }
    }
  };

  const onOperator = (id)=>{
    let {stringMain, stringSec, operand1, operand2, operator, state, result} = calculator;
    if (isReady(stringMain)){
      if (state === states.op1 && stringMain.length > 0){
        operand1 = Number(stringMain);
        stringSec = stringMain + getStringOperator(id);
      }else if (state === states.equal){
        operand1 = Number(result);
        stringSec = stringMain + getStringOperator(id);
      }else if (state === states.op2){
        operand2 = Number(stringMain);
        result = calculateOperator(operator, operand1, operand2);
        if (result === "Error"){
          stringSec = result;
        }else {
          operand1 = result;
          stringSec = result + getStringOperator(id);
        }
      }
      operator = getOperator(id);
      stringMain = "";
      if (result === "Error"){
        state = states.error;
      }else {
        state = states.ope;
      }
      setCalculator({
        ...calculator,
        stringMain:stringMain,
        stringSec:stringSec,
        operand1:operand1,
        operator:operator,
        state:state
      });
    }else if (state === states.ope){
      operator = getOperator(id) ;
      stringSec = stringSec.substring(0, stringSec.length - 3) + getStringOperator(id);
      setCalculator({...calculator, operator: operator, stringSec: stringSec});
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

  const onDot = ()=>{
    let {stringMain, stringSec, state} = calculator;
    if (state === states.equal || state === states.error){
      state = states.op1;
      stringMain = "0.";
      stringSec = "";
    }else {
      if (stringMain === "" || stringMain === "0"){
        stringMain = "0.";
      }else if (stringMain === "-"){
        stringMain = "-0.";
      }else {
        if (stringMain.indexOf(".") === -1){
          stringMain = stringMain + ".";
        }
      }
    }
    setCalculator({...calculator, stringMain: stringMain, state:state, stringSec: stringSec});
  };

  const onSign = ()=>{
    let {stringMain, state} = calculator;
    if (state === states.equal || state === states.error){
      stringMain = "-";
      state = states.op1;
    }else if (state === states.op1 || state === states.ope){
      if (stringMain.length === 0){
        stringMain = "-";
      }else if (stringMain === "-"){
        stringMain = "";
      }
    }
    setCalculator({...calculator, stringMain: stringMain, state: state});
  };

  return (
    <CalculatorContext.Provider value={{calculator, setCalculator,
      deleteAll, addNumber, addZero, onOperator, onEqual, onDot, onSign}}>
      {children}
    </CalculatorContext.Provider>
  )
};

