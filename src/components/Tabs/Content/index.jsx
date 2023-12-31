import React from "react";
import style from "./content.module.css";
import Intro from "../../Intro";
import State from "../../State";
import Reducer from "../../Reducer";
import Refs from "../../Refs";
import Effect from "../../Effect";

function Content({tab}) {
  return (
    <main>
        <section className={style.section}>
					<h1 className={style.header}>{tab.title}</h1>
					{	tab.id === 0 && <Intro/> }
          {	tab.id === 1 && <State/> }
          {	tab.id === 2 && <Reducer/> }
          { tab.id === 3 && <Refs/>}
          { tab.id === 4 && <Effect/>}
				</section>
    </main>
  );
}

export default Content;
