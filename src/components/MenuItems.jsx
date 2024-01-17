import navItemsData from "../data/navItemsData.jsx";
import Dropdown from "./Dropdown.jsx";

export default function MenuItems({onMouseEnter,setSelected,selected,item}){
    return(
        <li>
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
                        {selected >= 0 && <Dropdown links={navItemsData[selected]?.submenu} selected={selected} setSelected={setSelected}/>}
                </div>
            ) : (
                <a href="#" className="hover:border-b hover:border-black text-sm">{item.title}</a>
            )}
        </li>
    )
}