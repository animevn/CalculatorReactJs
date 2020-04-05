import React from "react";

function Home() {

  return (
    <div className="container">
      <table className="table table-bordered mx-auto mt-3 shadow
                          col-xl-5 col-lg-6 col-md-8 col-sm-11 col-11 mx-auto">
        <tbody className="text-success">
        <tr className="">
          <td className="text-right align-middle" style={{"height":"3rem"}} colSpan="4">Mark</td>
        </tr>
        <tr>
          <td className="text-right align-middle" style={{"height":"4rem"}} colSpan="4">Mark</td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">+</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">-</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">x</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">:</button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">1</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">2</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">3</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">=</button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">4</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">5</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">6</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">DEL</button>
          </td>
        </tr>

        <tr>
          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">7</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">8</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">9</button>
          </td>

          <td className="text-center align-middle w-25 p-0" style={{"height":"4rem"}}>
            <button className="btn w-100 h-100">0</button>
          </td>
        </tr>

        </tbody>
      </table>


    </div>
  )
}

export default Home;