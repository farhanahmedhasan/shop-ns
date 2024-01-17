import {useState} from "react";

export default function Dropdown({links, selected, setDropdown}){
    const [submenuSelected, setSubmenuSelected] = useState(0)

    function handleMouseLeave(){
        console.log("leave")
        setDropdown(false)
    }

    console.log(links[submenuSelected])

    return (
        <div onMouseLeave={handleMouseLeave} className="flex absolute -z-10 left-0 top-0 bg-white text-sm min-w-full px-8 pt-20 pb-4">
            {/* main submenus */}
            <div className="mr-28">
                <div className="mb-6">
                    <li className="mb-6 text-red-400">
                        <a href="#">SALES UP TO -50%</a>
                    </li>
                    <li>
                        <a href="#">NEW</a>
                    </li>
                </div>
                <div className="space-y-3">
                    {links.map((submenu, index) => (
                        <li key={index}>
                            <a href={submenu.url}>{submenu.title}</a>
                        </li>
                    ))}
                </div>
            </div>

            {/* nested submenu */}
            <div>
                <p className="pb-6 text-xs font-medium text-gray-500">CATEGORIES</p>
                <ul className="h-[280px] flex gap-y-2 gap-x-8 flex-col flex-wrap">
                    {links[submenuSelected].categories.map(category => {
                        return(
                            <li key={category.id}>
                                <a className="text-xs" href={category.url}>{category.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}