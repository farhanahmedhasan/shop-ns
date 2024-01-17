export default function Dropdown({dropdown, links}){
    return (
        <ul className={`absolute -z-10 left-0 top-0 bg-white text-sm min-w-full px-8 pt-20 pb-4 space-y-3 ${dropdown ? "block" : "hidden"}`}>
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