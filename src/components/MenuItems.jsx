import Dropdown from "./Dropdown.jsx";
import {useRef, useState} from "react";

export default function MenuItems({item}){
    const [dropdown, setDropdown] = useState(false);
    const listRef = useRef()
    function handleMouseOver(id) {
        console.log(id)
        setDropdown(true)
    }

    function handleMouseLeave() {
        setDropdown(false)
    }

    return(
        <li ref={listRef}>
            {item.submenu ? (
                <>
                    <a
                        role="button"
                        href="#"
                        onMouseOver={()=> handleMouseOver(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className="hover:border-b hover:border-black text-sm link-btn"
                    >
                        {item.title}
                    </a>
                    <Dropdown dropdown={dropdown}  links={item.submenu}/>
                </>
            ) : (
                <a href="#" className="hover:border-b hover:border-black text-sm">{item.title}</a>
            )}
        </li>
    )
}