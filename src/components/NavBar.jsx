import navItemsData from "../data/navItemsData.jsx";
import MenuItems from "./MenuItems.jsx";

export default function NavBar(){
    return(
        <nav>
            <ul className="flex items-center space-x-4">
                {navItemsData.map(item => {
                    return <MenuItems key={item.title} item={item}/>
                })}
            </ul>
        </nav>
    )
}