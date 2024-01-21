import SearchIcon from "../assets/icons/SearchIcon.jsx";
import NavBar from "../components/NavBar.jsx";
import Cart from "../components/Cart.jsx";
import {useState} from "react";
import NavBarMobile from "../components/NavBarMobile.jsx";

export default function Header(){
    const [isCartOpen, setIsCartOpen] = useState(false)

    return(
        <header className="relative !z-[1000]">
            <div className="px-4 py-2 flex items-center justify-between lg:px-8">
                <div className="hidden lg:block">
                    <NavBar />
                </div>
                <div className="lg:hidden">
                    <NavBarMobile />
                </div>
                <a href="#" className="text-3xl lg:text-5xl">BERSHKA</a>

                {/* Right Top bar */}
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-1 cursor-pointer mt-1">
                        <SearchIcon />
                        <p className="text-sm">Look For</p>
                    </div>
                    <button className="hidden lg:block relative" onClick={()=> setIsCartOpen(true)}>
                        <img className="h-6 w-6" src="../../public/images/bag.png" alt=""/>
                        <span className="text-xs font-medium absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-[2px] ">0</span>
                    </button>

                    <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>

                </div>
            </div>
        </header>
    )
}