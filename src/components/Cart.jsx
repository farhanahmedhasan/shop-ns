export default function Cart(){

    return(
        <button className="relative">
            <img className="h-6 w-6" src="../../public/images/bag.png" alt=""/>
            <span className="text-xs font-medium absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-[2px] ">0</span>
        </button>
    )
}