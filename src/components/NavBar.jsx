import {useState} from "react";

import navItemsData from "../data/navItemsData.jsx";
import MenuItems from "./MenuItems.jsx";

export default function NavBar(){
    const [selected, setSelected] = useState(-1)

    function handleMouseEnter(id) {
        setSelected(id)
    }

    return(
        <nav>
            <ul className="flex items-center space-x-4">
                {navItemsData.map(item => {
                    return <MenuItems key={item.title} item={item} selected={selected} setSelected={setSelected} onMouseEnter={handleMouseEnter}/>
                })}
            </ul>
        </nav>
    )
}