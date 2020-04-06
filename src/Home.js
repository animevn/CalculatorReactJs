import React, {useContext} from "react";
import {CalculatorContext} from "./Model";

function Home() {

  const {calculator, deleteAll, addNumber, onOperator, addZero,
    onEqual, onDot, onSign, onSquare, onCancel} = useContext(CalculatorContext);
  const {stringMain, stringSec} = calculator;

  function onOperatorClick(event) {
    event.preventDefault();
    const id = event.target.id;
    onOperator(id);
  }

  function onEqualClick(event) {
    event.preventDefault();
    onEqual();
  }

  function onDelClick(event) {
    event.preventDefault();
    deleteAll();
  }

  function onZeroClick(event) {
    event.preventDefault();
    addZero();
  }

  function onNumberClick(event) {
    event.preventDefault();
    const id = event.target.id;
    const value = id.substring(1, 2);
    addNumber(value);
  }

  function onDotClick(event) {
    event.preventDefault();
    onDot()
  }

  function onSignClick(event) {
    event.preventDefault();
    onSign();
  }

  function onSquareClick(event) {
    event.preventDefault();
    onSquare();
  }

  function onCancelClick(event) {
    event.preventDefault();
    onCancel();
  }

  const info = (height, value)=>{
    return (
      <td className="text-right align-middle" style={{"height":height}} colSpan="4">
        {value}
      </td>
    )
  };

  const button = (id, callback, name, style)=>{
    return (
      <td className={"text-center align-middle w-25 p-0 " + style} style={{"height":"4rem"}}>
        <button className="btn w-100 h-100" id={id} onClick={callback}>{name}</button>
      </td>
    )
  };

  return (
    <div className="container">
      <table className="table table-bordered mx-auto mt-2 shadow
                          col-xl-5 col-lg-6 col-md-8 col-sm-11 col-11 mx-auto">
        <tbody>
        <tr>
          {info("3rem", stringSec)}
        </tr>

        <tr>
          {info("4rem", stringMain)}
        </tr>

        <tr>
          {button("add", onOperatorClick, "+", "")}
          {button("sub", onOperatorClick, "-", "")}
          {button("mul", onOperatorClick, "x", "")}
          {button("div", onOperatorClick, ":", "")}
        </tr>

        <tr>
          {button("i1", onNumberClick, "1", "")}
          {button("i2", onNumberClick, "2", "")}
          {button("i3", onNumberClick, "3", "")}
          {button("sqrt", onSquareClick, "√", "")}
        </tr>

        <tr>
          {button("i4", onNumberClick, "4", "")}
          {button("i5", onNumberClick, "5", "")}
          {button("i6", onNumberClick, "6", "")}
          {button("de", onDelClick, "DE", "bg-danger")}
        </tr>

        <tr>
          {button("i7", onNumberClick, "7", "")}
          {button("i8", onNumberClick, "8", "")}
          {button("i9", onNumberClick, "9", "")}
          {button("ce", onCancelClick, "CE", "bg-warning")}
        </tr>

        <tr>
          {button("i0", onZeroClick, "0", "")}
          {button("dot", onDotClick, ".", "")}
          {button("sign", onSignClick, "+/-", "")}
          {button("equal", onEqualClick, "=", "bg-info")}
        </tr>

        </tbody>
      </table>

    </div>
  )
}

export default Home;