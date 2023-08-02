import React from "react";
import style from "./content.module.css";
import Intro from "../../Intro";

function Content({tab}) {
  return (
    <main>
        <section className={style.section}>
					<h1 className={style.header}>{tab.title}</h1>
					{	tab.title === "Intro" && <Intro/> }

				</section>
    </main>
  );
}

export default Content;
