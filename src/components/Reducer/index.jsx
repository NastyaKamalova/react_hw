import React, { useState } from "react";
import Todo from "./Todo";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "./ThemeSwitcher/themeContext";



function Reducer() {
  const[theme, setTheme] = useState('light')
  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Todo/>
        <ThemeSwitcher/>
      </ThemeContext.Provider>
      
    </div>
  );
}
  
  export default Reducer;