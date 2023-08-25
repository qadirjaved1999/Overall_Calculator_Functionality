import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [firstInput, setFirstInput] = useState("");
  const [firstInputError, setFirstInputError] = useState("");

  const [secondInput, setSecondInput] = useState("");
  const [secondInputError, setSecondInputError] = useState("");

  const [operationInput, setOperationInput] = useState("");
  const [operationInputError, setOperationInputError] = useState("");

  const [result, setResult] = useState(null);

  const firstInputHandler = (e) => {
    setFirstInput(e.target.value);
  };
  const secondInputHandler = (e) => {
    setSecondInput(e.target.value);
  };

  const operationalBtn = (e) => {
    setOperationInput(e.target.value);
  };

  const calculated = () => {
    setFirstInputError("");
    setSecondInputError("");
    setResult(null);

    if (isNaN(Number(firstInput))) {
      setFirstInputError("Please enter a valid umber");
      return;
    }
    if (isNaN(Number(secondInput))) {
      setSecondInputError("Please enter a valid umber");
      return;
    }

    //when both are empty
    if (firstInput == "" && secondInput == "") {
      setFirstInputError("Please fill first input fields");
      setSecondInputError("Please fill second input fields");
      return;
    }

    if (firstInput == "") {
      setFirstInputError("Please fill first input fields");
      return;
    }
    if (secondInput == "") {
      setSecondInputError("Please fill second input fields");
      return;
    }

    //when no operator is selected
    if (operationInput == "") {
      setOperationInputError("operation required");
      return;
    }

    switch (operationInput) {
      case "+":
        setResult(Number(firstInput) + Number(secondInput));
        break;
      case "-":
        setResult(Number(firstInput) - Number(secondInput));
        break;
      case "*":
        setResult(Number(firstInput) * Number(secondInput));
        break;
      case "/":
        setResult(Number(firstInput) / Number(secondInput));
        break;
    }
  };

  const allClear = () => {
    setFirstInput("");
    setSecondInput("");
    setOperationInput("");
    setFirstInputError("");
    setSecondInputError("");
    setOperationInputError("");
  };
  return (
    <>
      <div className="container pt-5">
        <div className="inputs_fields">
          <input
            type="text"
            placeholder="Enter first number"
            value={firstInput}
            onChange={firstInputHandler}
          />
          <p style={{ color: "red" }}>{firstInputError}</p>
          <p>{operationInput}</p>
          <input
            type="text"
            placeholder="Enter second number"
            value={secondInput}
            onChange={secondInputHandler}
          />
          {<p style={{ color: "red" }}>{secondInputError}</p>}
        </div>
        <div className="operation_btn">
          <input
            type="button"
            className="operational"
            value="+"
            onClick={operationalBtn}
          />
          <input
            type="button"
            className="operational"
            value="-"
            onClick={operationalBtn}
          />
          <input
            type="button"
            className="operational"
            value="*"
            onClick={operationalBtn}
          />
          <input
            type="button"
            className="operational"
            value="/"
            onClick={operationalBtn}
          />
        </div>
        <p>{operationInputError}</p>
        <div className="action_btn">
          <button className="btn-1 btn btn-danger" onClick={allClear}>
            Clear
          </button>
          <button className="btn btn-primary" onClick={calculated}>
            =
          </button>
        </div>
        <div className="answer_sheet">
          {result !== null && <p>Result: {result}</p>}
        </div>
      </div>
    </>
  );
};

export default App;
