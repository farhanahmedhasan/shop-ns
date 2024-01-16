export default function NavLinkFooter({dot, href="#", children}){
    return(
        <li className="flex items-center">
            {dot === "left" && <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>}
            <a href={href} className="text-sm leading-[1.95312rem]">{children}</a>
            {dot === "right" && <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>}
        </li>
    )
}