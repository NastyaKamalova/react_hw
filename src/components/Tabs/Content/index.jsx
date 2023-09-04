import React from "react";
import style from "./content.module.css";
import Intro from "../../Intro";
import State from "../../State";
import Reducer from "../../Reducer"

function Content({tab}) {
  return (
    <main>
        <section className={style.section}>
					<h1 className={style.header}>{tab.title}</h1>
					{	tab.id === 0 && <Intro/> }
          {	tab.id === 1 && <State/> }
          {	tab.id === 2 && <Reducer/> }
				</section>
    </main>
  );
}

export default Content;
