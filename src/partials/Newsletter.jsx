import {useState} from "react";

export default function Newsletter(){
    const [data, setData] = useState({
        email:"som"
    })

    function handleChange(e){
        e.preventDefault()
        const key = e.target.name
        const value = e.target.value

        setData({...data, [key]: value})
    }

    return(
        <section className="pb-10 pt-20 px-6 sm:px-16">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl leading-[1.875rem] text-center">Get a 10% discount</h2>
                <p className="text-[#636363] text-sm pt-2 pb-8">Subscribe to our newsletter and you will have a 10% discount on your next purchase, access to exclusive promotions and much more!</p>
                <form>
                    <div className="relative w-2/3 mx-auto">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-red-[#b4b4b4] focus:outline-8 peer"
                            placeholder=" "
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Enter your email</label>
                    </div>
                </form>
                <p className="text-xs font-medium mt-8">I want to cancel my subscription</p>
            </div>
        </section>
    )
}