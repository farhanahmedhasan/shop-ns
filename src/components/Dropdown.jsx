export default function Dropdown({links, setDropdown}){
    function handleMouseLeave(){
        console.log("leave")
        setDropdown(false)
    }

    return (
        <ul onMouseLeave={handleMouseLeave} className="absolute -z-10 left-0 top-0 bg-white text-sm min-w-full px-8 pt-20 pb-4 space-y-3">
                <div className="mb-6">
                    <li className="mb-6 text-red-400">
                        <a href="#">SALES UP TO -50%</a>
                    </li>
                    <li>
                        <a href="#">NEW</a>
                    </li>
                </div>
            {links.map((submenu, index) => (
                <li key={index}>
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
}