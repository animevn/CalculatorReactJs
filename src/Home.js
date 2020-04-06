import React, {useContext} from "react";
import {CalculatorContext} from "./Model";

function Home() {

  const {calculator, deleteAll, addNumber, onOperator, addZero,
    onEqual, onDot} = useContext(CalculatorContext);

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

  return (
    <div className="container">
      <table className="table table-bordered mx-auto mt-2 shadow
                          col-xl-5 col-lg-6 col-md-8 col-sm-11 col-11 mx-auto">
        <tbody>
        <tr className="">
          <td className="text-right align-middle" style={{"height":"3rem"}} colSpan="4">
            {calculator.stringSec}
          </td>
        </tr>
        <tr>
          <td className="text-right align-middle" style={{"height":"4rem"}} colSpan="4">
            {calculator.stringMain}
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="add" onClick={onOperatorClick}>+</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="sub" onClick={onOperatorClick}>-</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="mul" onClick={onOperatorClick}>x</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="div" onClick={onOperatorClick}>:</button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i1" onClick={onNumberClick}>1</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i2" onClick={onNumberClick}>2</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i3" onClick={onNumberClick}>3</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">
              √
            </button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i4" onClick={onNumberClick}>4</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i5" onClick={onNumberClick}>5</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i6" onClick={onNumberClick}>6</button>
          </td>

          <td className="text-center align-middle w-25 p-0 bg-danger" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" onClick={onDelClick}>
              DE
            </button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i7" onClick={onNumberClick}>7</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i8" onClick={onNumberClick}>8</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i9" onClick={onNumberClick}>9</button>
          </td>

          <td className="text-center align-middle w-25 p-0 bg-warning" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">CE</button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" id="i0" onClick={onZeroClick}>0</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" onClick={onDotClick}>.</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">+/-</button>
          </td>

          <td className="text-center align-middle w-25 p-0 bg-info" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100" onClick={onEqualClick}>=</button>
          </td>
        </tr>

        </tbody>
      </table>

    </div>
  )
}

export default Home;