import React, { useState } from "react";
import SubHeader from "../../../ui/SubHeader";
import style from "./packingList.module.css"
import Item from "./Item";
import AddItem from "./AddItem";

let nextId = 3;
const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

function PackingList() {
  const [items, setItems] = useState(initialItems)

  const add = (text) => {
    setItems([
        ...items,
        {
          id: nextId++,
          packed: false,
          title: text 
        }        
      ]
    )
  }

  const remove = (id) => {
    setItems(
      items.filter(item => item.id !== id) 
    )
  }

  const change = (changedItem) => {
    setItems(
      items.map(item => {
        if (item.id === changedItem.id ) {
          return changedItem
        }

        return item 
      }) 
    )
  }

  const packedItems = items.filter(item => item.packed)

  return (
    <div className={style.divInput}>
      <SubHeader>PackingList</SubHeader>
      <AddItem add={add}/>
      { 
        items.map(item => (
          <Item key={item.id} id={item.id} change={change} remove={remove} packed={item.packed} title={item.title}/>
        ))
      }
        <hr/>
        <b>{packedItems.length} out of {items.length} packed!</b>
    </div>
  );
}
  
  export default PackingList;