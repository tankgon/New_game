import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [NumberRandom, setNumberRandom] = useState();
  const [valueInput, setvalueInput] = useState();
  const [sum, setsum] = useState(0);
  const [condition, setcondition] = useState();

  useEffect(() => {
    randomFc()
  }, []);

  const resetSum = () => {
    setsum(sum-sum)
  }

  const randomFc = () => {
    let random = Math.floor(Math.random()*100+1);
    setNumberRandom(random);
  }

  const newGame = () => {
    randomFc()
    setvalueInput(null);
  }

  const onChangeValue = (event) => {
    setvalueInput(parseInt(event.target.value));
  };


  const check = () => {
    setsum(sum + 1);
    if(valueInput === undefined || valueInput == NaN){
      setcondition ("You can add something number")
      resetSum()
    }if(valueInput === NumberRandom){
      setcondition ("Bạn đã đoán đúng")
      randomFc()
      resetSum()
    }if(valueInput > NumberRandom){
      setcondition ("Số bạn đoán lớn hơn số ẩn")
    }if(valueInput < NumberRandom){
      setcondition ("Số bạn đoán bé hơn số ẩn")
    }if(sum === 7){
      setcondition ("you lost, try again")
      randomFc()
      resetSum()
    }
    console.log(valueInput);
  }

  return (
    <div className="App">
      <div className="jumbotron text-center">
        <h1>Getting random number</h1>
        <p>
          Hãy chọn một số trong khoảng 1 đến 100, bạn có thể đoán đúng số bị ẩn?
        </p>
        <p>{NumberRandom}</p>
      </div>

      <div className="body">
        <button onClick={newGame}>New game</button>
        <hr />
        <p className="font-weight-bold">
          Số lần bạn đã đoán là: {sum}
        </p>
        <p className="font-weight-bold">Số bạn đoán là</p>
        <input value={valueInput} onChange={onChangeValue} type="number" />
        <button onClick={check} className="btn-success">
          Đoán
        </button>
        <div>{condition}</div>
      </div>
    </div>
  );
}

export default App;
