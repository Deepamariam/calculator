import { useState, useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);

  useEffect(() => {
    document.title = "Calculator!";
  }, []);

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    //setCalc(eval(calc).toString());
    setCalc(result.toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const reset = () => {
    setCalc("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-display">{calc}</div>
        <div className="calculator-keys">
          <div className="keys-row1">
            <button onClick={() => updateCalc("1")} className="button-items">
              1
            </button>
            <button onClick={() => updateCalc("2")} className="button-items">
              2
            </button>
            <button onClick={() => updateCalc("3")} className="button-items">
              3
            </button>
            <button
              onClick={() => updateCalc("+")}
              className="button-items arithmetic-ops"
            >
              +
            </button>
          </div>

          <div className="keys-row2">
            <button onClick={() => updateCalc("4")} className="button-items">
              4
            </button>
            <button onClick={() => updateCalc("5")} className="button-items">
              5
            </button>
            <button onClick={() => updateCalc("6")} className="button-items">
              6
            </button>
            <button
              onClick={() => updateCalc("-")}
              className="button-items arithmetic-ops"
            >
              -
            </button>
          </div>

          <div className="keys-row3">
            <button onClick={() => updateCalc("7")} className="button-items">
              7
            </button>
            <button onClick={() => updateCalc("8")} className="button-items">
              8
            </button>
            <button onClick={() => updateCalc("9")} className="button-items">
              9
            </button>
            <button
              onClick={() => updateCalc("*")}
              className="button-items arithmetic-ops"
            >
              x
            </button>
          </div>

          <div className="keys-row4">
            <button onClick={reset} className="button-items">
              C
            </button>
            <button onClick={() => updateCalc("0")} className="button-items">
              0
            </button>
            <button onClick={() => updateCalc(".")} className="button-items">
              .
            </button>
            <button
              onClick={() => updateCalc("/")}
              className="button-items arithmetic-ops"
            >
              ÷
            </button>
          </div>

          <div className="keys-row5">
            <button onClick={calculate} className="button-items item-equal">
              =
            </button>
            <button onClick={deleteLast} className="button-items item-delete">
              DEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
