import navItemsData from "../data/navItemsData.jsx";
import MenuItems from "./MenuItems.jsx";
import {useState} from "react";

export default function NavBar(){
    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState(-1)
    console.log(selected)
    function handleMouseEnter(id) {
        setSelected(id)
        setDropdown(true)
    }

    return(
        <nav>
            <ul className="flex items-center space-x-4">
                {navItemsData.map(item => {
                    return <MenuItems key={item.title} selected={selected} dropdown={dropdown} onMouseEnter={handleMouseEnter} setDropdown={setDropdown} item={item}/>
                })}
            </ul>
        </nav>
    )
}