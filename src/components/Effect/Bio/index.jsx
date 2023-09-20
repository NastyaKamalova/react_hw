import React, { useEffect, useState } from "react";
import SubHeader from "../../../ui/SubHeader";
import { fetchBio } from "./api";
import style from "./bio.module.css"

function Bio() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setBio(null);
    let ignore = false
    fetchBio(person).then( result => {
      if (!ignore) {
        setBio(result)
      }
    })
    return () => { ignore = true }
  }, [person] )

  return (
    <div>
      <SubHeader>Loading bio</SubHeader>
      <div className={style.div}>
        <select value={person} onChange={(e) => setPerson(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Taylor">Taylor</option>
        </select>
        <hr></hr>
        {bio ? bio : "loading..."}
      </div>
    </div>
  ); 
}
  
  export default Bio;