import React, { useContext } from "react";
import SubHeader from "../../../ui/SubHeader";
import { ThemeContext } from "./themeContext";
import style from "./ThemeSwitcher.module.css"

function ThemeSwitcher() {
	const {theme, setTheme} = useContext(ThemeContext)
	return (
		<div className={theme === 'dark' ? style.darkWrapper : style.lightWrapper}>
				<SubHeader>Theme Switcher</SubHeader>
				<div className={style.div}>
					<label className={theme === 'dark' ? style.darkInput : style.lightInput}>
						<input 
							checked={theme === 'dark'} 
							type="checkbox" 
							onChange={(e) => setTheme(e.target.checked ? 'dark' :'light')}
						/>
						{" "}{theme}
					</label>
				</div>
		</div>
	);
}
  
  export default ThemeSwitcher;
  