import "./App.css";
import "./theme.css";
import { } from "react";
import { Link } from "react-router-dom";
import {useContext } from "react";
import Datacontext from "./context/DataContext";




function App(){
  const {name,changeName,age,changeAge,startCount,changeCount,theme,changeTheme,} = useContext(Datacontext);

  
  return(
    <div className={`App ${theme}`}>
      <Link to="./page2"> go to page 2</Link>
      <br />
      <br />
      <br />
      <div onChange={() => {
          changeTheme(theme == "" ? "dark" : "");
        }} className="btn-container" style={{marginBottom: "44px" }}>
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
        
      </div>
      <button onClick={() => {
          changeTheme(theme == "" ? "dark" : "");
        }} style={{marginBottom:"44px"}}>Toggle Theme</button>
      <div>
        <button onClick={() => {
          changeTheme("")
        }} style={{marginRight:"26px"}}>light</button>
        <button onClick={() => {
          changeTheme("dark")
        }} style={{marginRight:"26px"}}>Dark</button>
        <button onClick={() => {
          changeTheme("gray")
        }} style={{marginRight:"26px"}}>Gray</button>
        <button onClick={() => {
          changeTheme("pink")
        }}>Pink</button>
      </div>
      <h2>My name is {name} </h2>
      <button onClick={() => {
        changeName();
      }} >Change Name</button>
      <h2>My Age Is {age}</h2>
      <button onClick={() => {
        changeAge();
      }} >Change Age</button>
      <h2>The Counter</h2>
      <button onClick={() => {
        changeCount()
      }}>The Count is {startCount}</button>
    
    </div>
  )
}

export default App
