import React from "react";
import Profile from "./Profile";
import SubHeader from "../../../ui/SubHeader";
const persons = [
  {
    name: "Maria Skłodowska-Curie",
    avatar: "https://i.imgur.com/szV5sdGs.jpg",
    profession: "physicist and chemist",
    awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
    discovered: "polonium (chemical element)",
    id: 0
  },
  {
    name: "Katsuko Saruhashi",
    avatar: "https://i.imgur.com/YfeOqp2s.jpg",
    profession: "geochemist",
    awards: "Miyake Prize for geochemistry, Tanaka Prize",
    discovered: "a method for measuring carbon dioxide in seawater",
    id: 1
  }
]

function Junior() {
  return (
    <div>
      <SubHeader>Junior</SubHeader>
      {
        persons.map(person => (
          <Profile key={person.id} person={person}/>
        ))
      }
    </div>
  );
}

export default Junior;