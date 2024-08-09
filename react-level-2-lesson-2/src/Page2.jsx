import { useContext } from "react";
import ThemeContext from "./context/DataContext";

const Page2 = () => {
  const{name,theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <h1>Welcome to Page 2</h1>
      <h2>My name is {name}</h2>
    </div>
  );
}

export default Page2;
