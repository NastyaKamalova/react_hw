import React from "react";
import style from "./junior.module.css"

function Profile({person}) {
  return (
    <div className={style.profile}>
        <h2 className={style.header}>{person.name}</h2>
        <img className={style.avatar} src={person.avatar} alt={person.name} />
        <ul>
            <li><b>Profession:</b> {person.profession}</li>
            <li><b>Awards:</b> {person.awards}</li>
            <li><b>Discovered:</b>{person.discovered} </li>
        </ul>
    </div>
  );
}

export default Profile;