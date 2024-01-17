import Dropdown from "./Dropdown.jsx";
import {useRef} from "react";
import navItemsData from "../data/navItemsData.jsx";


export default function MenuItems({onMouseEnter,setDropdown,selected,dropdown,item}){
    const listRef = useRef()

    return(
        <li ref={listRef}>
            {item.submenu ? (
                <div>
                        <a
                            role="button"
                            href="#"
                            onMouseEnter={()=> onMouseEnter(item.id)}
                            className="hover:border-b hover:border-black text-sm"
                        >
                            {item.title}
                        </a>
                        {true && <Dropdown dropdown={dropdown} links={navItemsData[0]?.submenu} selected={selected} setDropdown={setDropdown}/>}
                </div>
            ) : (
                <a href="#" className="hover:border-b hover:border-black text-sm">{item.title}</a>
            )}
        </li>
    )
}