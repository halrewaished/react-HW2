import "../App.css";
import { useState } from "react";
import Button from "./Button";

const App = () => {
  let [number1, setNumber1] = useState('');
  let [number2, setNumber2] = useState('');
  const [total, setTotal] = useState("");

  const onChange1 = (e) => {
    setNumber1(e.target.value);
    setTotal(0);
  };

  const onChange2 = (e) => {
    setNumber2(e.target.value);
    setTotal(0);

  };

  return (
    <div className="App">
      <h1 className="text-center">Calculator</h1>
      <div className="input-group mb-3 input-group-lg">
        <input type="text" onChange={onChange1} className="form-control m-2" />
        <input type="text" onChange={onChange2} className="form-control m-2" />
      </div>
      <div className="buttons">
        <Button opSymbol="+" onClick={() => setTotal(number1 + number2)} />
        <Button opSymbol="-" onClick={() => setTotal(number1 - number2)} />
        <Button opSymbol="*" onClick={() => setTotal(number1 * number2)} />
        <Button opSymbol="/" onClick={() => setTotal(number1 / number2)} />
        <Button opSymbol="%" onClick={() => setTotal(number1 % number2)} />
      </div>
      <h3 className="text-center bg-light mt-3">{total}</h3>
    </div>
  );
};

export default App;
