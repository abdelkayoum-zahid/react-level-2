import "./App.css";

function App() {
  let person = "Zahid Abdelkayoum";
  const changeName=()=>{
    person = "The Best ";
  }
  return (
    <>
      <h1>My name is {person}</h1>
      <button onClick={changeName}>change name</button>
    </>
  );
}

export default App;
