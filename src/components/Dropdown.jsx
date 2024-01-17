import {useState} from "react";

export default function Dropdown({links, setSelected}){
    const [submenuSelected, setSubmenuSelected] = useState(-1)
    console.log(submenuSelected)

    function handleMouseLeave(){
        setSelected(-1)
    }

    function handleNestedSubMenuMouseEnter(id){
        setSubmenuSelected(id)
    }

    return (
        <div onMouseLeave={handleMouseLeave} className="flex absolute -z-10 left-0 top-0 bg-white text-sm min-w-full px-8 pt-20 pb-4">
            {/* main submenus */}
            <div className="mr-28">
                <div className="space-y-3">
                    {links?.map((submenu, index) => (
                        <li key={index} className={index <= 1 && "pb-2"}>
                            <a
                                className={(index === 0 || index === links.length - 1) && "text-red-500"}
                                href={submenu.url}
                                onMouseEnter={()=> handleNestedSubMenuMouseEnter(submenu.id)}
                            >
                                {submenu.title}
                            </a>
                        </li>
                    ))}
                </div>
            </div>

            {/* nested submenu */}
            <NestedSubMenu submenuSelected={submenuSelected} links={links}/>
        </div>
    );
}

function NestedSubMenu({links, submenuSelected}){
    return(
        <div>
            {links[submenuSelected]?.categories && <p className="pb-6 text-xs font-medium text-gray-500">CATEGORIES</p>}
            <ul className="h-[280px] flex gap-y-2 gap-x-8 flex-col flex-wrap">
                {links[submenuSelected]?.categories?.map(category => {
                    return(
                        <li key={category.id}>
                            <a className="text-xs" href={category.url}>{category.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}