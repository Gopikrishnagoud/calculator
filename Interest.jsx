import React, { useState } from "react";
// import "./layout.css";
function Interest() {
  const [principle, setprinciple] = useState("");
  const [rate, setrate] = useState("");
  const [time, settime] = useState("");
  const [total_amount, settotal_amount] = useState("");

  const Calculate = () => {
    const amount = (principle * rate * time) / 100;
    settotal_amount(amount);
  };

  return (
    <>
      <table>
        <tr>
          <label>Enter Principal Amount:</label>
          <td>
            <input
              type="number"
              value={principle}
              onChange={(e) => setprinciple(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <label>Enter Rate of Interest:</label>
          <td>
            <input
              type="number"
              value={rate}
              onChange={(e) => setrate(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <label>Enter Time:</label>
          <td>
            <input
              type="number"
              value={time}
              onChange={(e) => settime(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>
            <p>Simple Interest is: {total_amount}</p>
          </td>
          <td>
            <button id="button" type="button" onClick={Calculate}>
              Calculate
            </button>
          </td>
        </tr>
        <tr>
          <td>Total payable amount is :</td>
          <td>{total_amount + principle}</td>
        </tr>
      </table>
    </>
  );
}

export default Interest;
