import {useState} from "react";

import ArrowRightIcon from "../assets/icons/ArrowRightIcon.jsx";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon.jsx";
import HeartIcon from "../assets/icons/HeartIcon.jsx";

export default function CardProductOverview({item}){
    const [current, setCurrent] = useState(0)
    const length = item.images.length

    function handlePrev() {
        setCurrent((current) => (current === 0 ? 1 : current - 1))
    }

    function handleNext() {
        setCurrent((current) => (current === length - 1 ? 0 : current + 1))
    }

    return(
        <div>
            <div className="group w-full relative overflow-hidden">
                <img src={item.images[current]} className='h-[42rem] w-full object-cover' alt="" />

                {/* Hover Arrows*/}
                <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 -mt-7 flex justify-between items-center w-full px-2.5 transition-all duration-300">
                    <button
                        className="h-8 w-8 rounded-full bg-corporateBlack/75 cursor-pointer flex items-center justify-center"
                        onClick={handlePrev}
                        type="button"
                    >
                        <ArrowLeftIcon fillPath="white" />
                    </button>

                    <button
                        className="z-30 h-8 w-8 rounded-full bg-corporateBlack/75 cursor-pointer flex items-center justify-center"
                        onClick={handleNext}
                        type="button"
                    >
                        <ArrowRightIcon fillPath="white" />
                    </button>
                </div>

                {/* Hover Contents*/}
                <div className="bg-white border-x border-b border-[#e6e6e6] opacity-0 group-hover:opacity-100 absolute bottom-0 w-full px-2.5 transition-all duration-300">
                    <div className="py-4">
                        <p className="text-xs text-center mb-2">Select size</p>
                        <div className="flex justify-center space-x-2">
                            {item.variants.map(variant=> {
                                return <button key={variant.size} disabled={variant.stock === "exhausted"} className={`text-xs p-2 rounded-full border border-transparent ${variant.stock === "exhausted" ? "text-gray-400" : "text-black hover:border hover:border-black"}`}>{variant.size}</button>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 px-2">
                <div className="flex items-center justify-between">
                    <p className="text-xs">{item.title}</p>
                    <HeartIcon />
                </div>
                <p className="text-xs font-semibold">${item.price}</p>
            </div>
        </div>
    )
}