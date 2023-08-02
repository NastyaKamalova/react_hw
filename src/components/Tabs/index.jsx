import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";

const tabsContent = [
    {
        title: 'Intro', 
        id: 0,
    },
    {
        title: 'State', 
        id: 1,
    },  
    {
        title: 'Reducer & Context', 
        id: 2,
    },    
    {
        title: 'Refs', 
        id: 3,
    }, 
    {
        title: 'Effect', 
        id: 4,
    },    
    {
        title: 'Routing', 
        id: 5,
    },         
]


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabsContent[0].id)
    const currentTab = tabsContent.find(tab => tab.id === activeTab);
    
    return (
        <>
            <Nav 
                activeTab={activeTab} 
                setActiveTab={setActiveTab}
                tabs={tabsContent}
            />
            <Content tab={currentTab}/>
        </>
    )
}

export default Tabs;