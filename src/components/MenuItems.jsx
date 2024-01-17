import Dropdown from "./Dropdown.jsx";

export default function MenuItems({item}){
    return(
        <li>
            {item.submenu ? (
                <>
                    <a
                        id="page"
                        role="button"
                        href="#"
                        // onMouseOver={onMouseOver}
                        className="hover:border-b hover:border-black text-sm link-btn"
                    >
                        {item.title}
                    </a>
                    <Dropdown links={item.submenu}/>
                </>
            ) : (
                <a href="#" className="hover:border-b hover:border-black text-sm">{item.title}</a>
            )}
        </li>
    )
}