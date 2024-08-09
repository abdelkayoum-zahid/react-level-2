import "./App.css";
import "./theme.css";
import { useReducer } from "react";


const initialData = {
  name:"Zahid Abdelkayoum",
  age : 28,
  startCount: 0,
  theme : ""
}

const reducer =(state,action)=>{
  switch (action.type){
    case "CHANGE_NAME":
      return {...state , name:action.newValue};
    case "CHANGE_AGE":
      return {...state ,age:action.newValue};
    case "COUNT":
      return {...state , startCount: action.newValue};
    case "CHANGE_THEME":
      return {...state, theme:action.newValue};
    



      default:
        return state;



  }
};

function App(){
  const [allData,dispatch]=useReducer(reducer,initialData);
  return(
    <div className={`App ${allData.theme}`}>
      <div  className="btn-container" style={{marginBottom: "44px" }}>
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input onChange={() => {
            dispatch({type:"CHANGE_THEME", newValue:(allData.theme == "")? "dark" : ""})
          }} type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
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
        dispatch({type:"CHANGE_THEME" , newValue:(allData.theme == "")? "dark" : ""})
      }} style={{marginBottom:"44px"}}>Toggle Theme</button>
      <div>
        <button onClick={() => {
          dispatch({type:"CHANGE_THEME" , newValue:""})
        }} style={{marginRight:"26px"}}>light</button>
        <button onClick={() => {
          dispatch({type:"CHANGE_THEME", newValue:"dark"})
        }} style={{marginRight:"26px"}}>Dark</button>
        <button onClick={() => {
          dispatch({type:"CHANGE_THEME", newValue:"gray"})
        }} style={{marginRight:"26px"}}>Gray</button>
        <button onClick={() => {
          dispatch({type:"CHANGE_THEME", newValue:"pink"})
        }}>Pink</button>
      </div>
      <h2>My name is {allData.name}</h2>
      <button onClick={() => {
        dispatch({type:"CHANGE_NAME",newValue:(allData.name == "Zahid Abdelkayoum")?"The Best":"Zahid Abdelkayoum"})
      }}>Change Name</button>
      <h2>My Age Is {allData.age}</h2>
      <button onClick={() => {
        dispatch({type:"CHANGE_AGE",newValue:33})
      }}>Change Age</button>
      <h2>The Counter</h2>
      <button onClick={() => {
        dispatch({type:"COUNT" , newValue:allData.startCount+1})
      }}>The Count is {allData.startCount}</button>
    </div>
  )
}

export default App
