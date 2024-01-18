import NavBar from "../components/NavBar.jsx";
import SearchIcon from "../assets/icons/SearchIcon.jsx";
import Cart from "../components/Cart.jsx";

export default function Header(){
    return(
        <header className="relative !z-[1000]">
            <div className="px-8 py-2 flex items-center justify-between">
                <NavBar />
                <a href="#" className="text-5xl">BERSHKA</a>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-1 cursor-pointer mt-1">
                        <SearchIcon />
                        <p className="text-sm">Look For</p>
                    </div>
                    <Cart />
                </div>
            </div>
        </header>
    )
}