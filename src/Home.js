import React, {useContext} from "react";
import {CalculatorContext} from "./Model";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
const width = {xs:"90%", sm:"550px", md:"550px", lg:"550px", xl:"550px"};
const padTop = {xs:2, sm:2, md:4, lg:5, xl:6};

function Home() {

  const {calculator, deleteAll, addNumber, onOperator, addZero,
    onEqual, onDot, onSign, onSquare, onCancel} = useContext(CalculatorContext);
  const {stringMain, stringSec} = calculator;

  function onOperatorClick(event) {
    const id = event.currentTarget.id;
    onOperator(id);
  }

  function onEqualClick() {
    onEqual();
  }

  function onDelClick() {
    deleteAll();
  }

  function onZeroClick() {
    addZero();
  }

  function onNumberClick(event) {
    const id = event.currentTarget.id;
    const value = id.substring(1, 2);
    addNumber(value);
  }

  function onDotClick(event) {
    event.preventDefault();
    onDot()
  }

  function onSignClick() {
    onSign();
  }

  function onSquareClick() {
    onSquare();
  }

  function onCancelClick() {
    onCancel();
  }

  const info = (height, value)=>{
    return (
      <td style={{"height":height, "border":"1px solid lightgray"}} colSpan="4">
        <Typography component="div">
          <Box textAlign="right" mx={2} >
            {value}
          </Box>
        </Typography>

      </td>
    )
  };

  const button = (id, callback, name)=>{
    return (
      <td style={{"height":"4rem", "border":"1px solid lightgray"}}>
        <Button id={id} onClick={callback} style={{"width":"100%", "height":"100%"}}>
          {name}
        </Button>
      </td>
    )
  };

  return (
    <Grid container direction="row" justify="center">
      <Box display="flex" flexDirection="column" justifyContent="center"
           style={{"overflow":"hidden"}}
           width={width} bgcolor="white" borderRadius={10} boxShadow={3} mt={padTop} >
        <table style={{"borderCollapse":"collapse"}}>
          <tbody>
          <tr>
            {info("3rem", stringSec)}
          </tr>

          <tr>
            {info("4rem", stringMain)}
          </tr>

          <tr>
            {button("add", onOperatorClick, "+")}
            {button("sub", onOperatorClick, "-")}
            {button("mul", onOperatorClick, "x")}
            {button("div", onOperatorClick, ":")}
          </tr>

          <tr>
            {button("i1", onNumberClick, "1")}
            {button("i2", onNumberClick, "2")}
            {button("i3", onNumberClick, "3")}
            {button("sqrt", onSquareClick, "√")}
          </tr>

          <tr>
            {button("i4", onNumberClick, "4")}
            {button("i5", onNumberClick, "5")}
            {button("i6", onNumberClick, "6")}
            {button("de", onDelClick, "DE")}
          </tr>

          <tr>
            {button("i7", onNumberClick, "7")}
            {button("i8", onNumberClick, "8")}
            {button("i9", onNumberClick, "9")}
            {button("ce", onCancelClick, "CE")}
          </tr>

          <tr>
            {button("i0", onZeroClick, "0")}
            {button("dot", onDotClick, ".")}
            {button("sign", onSignClick, "+/-")}
            {button("equal", onEqualClick, "=")}
          </tr>

          </tbody>
        </table>
      </Box>

    </Grid>
  )
}

export default Home;