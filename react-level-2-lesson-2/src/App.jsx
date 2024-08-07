import "./theme.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [person , setPerson] = useState("zahid abdelkayoum");
  const [age , setAge] = useState(28);
  const [counter , setCounter] = useState(0);
  const[theme, setTheme]= useState("")
  const changeCounter = () => {
    setCounter(counter+1);
  }
  return (
    <div className={`App ${theme}`}>
      <div>
        <button onClick={() => {setTheme("light")}} style={{marginRight: "26px" }}>Light</button>
        <button onClick={() => {setTheme("dark")}} style={{marginRight: "26px" }}>Dark</button>
        <button onClick={() => {setTheme("gray")}} style={{marginRight: "26px" }}>Gray</button>
        <button onClick={() => {setTheme("pink")}}>Pink</button>
      </div>
      <h2 style={{marginTop: "66px" }}>My name is {person}</h2>
      <button
      onClick={() => {setPerson("The best")}}
      >change name</button>
      <h2>My age is {age}</h2>
      <button onClick={()=> {setAge(33)}}>change age</button>
      <h2>the counter</h2>
      <button onClick={changeCounter}>count is {counter}</button>


    </div>
  );
}

export default App;
