import React from "react";
import style from "./nav.module.css"


function Nav({
    tabs,
    activeTab,
    setActiveTab
}) {
  return (
    <nav>
      <ul className={style.list}>
        {
            tabs.map(tab => (
                <li 
                    className={activeTab === tab.id ? `${style.item} ${style.active}` : style.item}
                    onClick={() => setActiveTab(tab.id)}
                    key={tab.id}
                >
                    {tab.title}
                </li>
            ))
        }
      </ul>
    </nav>
  );
}

export default Nav;
