import React from "react";
import DebouncedItem from "./DebouncedItem";
import SubHeader from "../../../ui/SubHeader";

const menu = [
    {
        id: 0,
        title: "Готовить суп",
        message: "Суп готов!"
    },
    {
        id: 1,
        title: "Готовить пасту",
        message: "Паста готова!"
    },
    {
        id: 2,
        title: "Готовить морс",
        message: "Морс готов!"
    },
];

const Debounced = () => {
    return (
        <>
            <SubHeader>Debounced</SubHeader>
            {
                menu.map(item => (
                    <DebouncedItem key={item.id} item={item}/>
                ))
            }
        </>
    )
}

export default Debounced;