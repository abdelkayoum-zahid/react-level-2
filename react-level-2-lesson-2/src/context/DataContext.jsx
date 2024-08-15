import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = {
  name: "Zahid Abdelkayoum",
  age: 28,
  startCount: 0,
  theme: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "COUNT":
      return { ...state, startCount: action.newValue };
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function DataProvider({children}) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeName = () => {
    dispatch({ type: "CHANGE_NAME", newValue: "THE BEST" });
  };
  const changeAge = () =>{
    dispatch({type:"CHANGE_AGE" , newValue:33});
  }
  const changeCount = () => {
    dispatch({type:"COUNT",newValue:firstState.startCount+1})
  }
  const changeTheme = (valeur) => { 
    dispatch({type:"CHANGE_THEME" , newValue:valeur})
  }
  const toggleTheme = () => {
    dispatch({type:"CHANGE_THEME" , newValue: firstState.theme == "" ? "dark" : ""})
  }

  return (
    <ThemeContexttt.Provider value={{ ...firstState,changeName,changeAge,changeCount,changeTheme,toggleTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
