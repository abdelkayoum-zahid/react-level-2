import "./App.css";
import { useState } from "react";

function App() {
  const [person , setPerson] = useState("zahid abdelkayoum");
  const [age , setAge] = useState(28);
  const [counter , setCounter] = useState(0);
  const changeCounter = () => {
    setCounter(counter+1);
  }
  return (
    <>
      <h2>My name is {person}</h2>
      <button
      onClick={() => {setPerson("The best")}}
      >change name</button>
      <h2>My age is {age}</h2>
      <button onClick={()=> {setAge(33)}}>change age</button>
      <h2>the counter</h2>
      <button onClick={changeCounter}>count is {counter}</button>


    </>
  );
}

export default App;
