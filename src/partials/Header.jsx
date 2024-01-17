import NavBar from "../components/NavBar.jsx";

export default function Header(){
    return(
        <header className="relative !z-[1000]">
            <div className="px-8 py-2 flex items-center justify-between">
                <NavBar />
                <a href="#" className="text-5xl">BERSHKA</a>
                <div>y</div>
            </div>
        </header>
    )
}