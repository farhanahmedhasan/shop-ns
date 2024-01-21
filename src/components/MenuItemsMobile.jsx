export default function MenuItemsMobile({onMainMenuClick,item}){
    return(
        <li>
            {item.submenu ? (
                <a
                    role="button"
                    href="#"
                    onClick={()=> onMainMenuClick(item.id)}
                    className="hover:border-b hover:border-black text-sm"
                >
                    {item.title}
                </a>
            ) : (
                <a href="#" className="hover:border-b hover:border-black text-sm">{item.title}</a>
            )}
        </li>
    )
}