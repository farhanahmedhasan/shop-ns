import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";

import CloseIcon from "../assets/icons/CloseIcon.jsx";
import navItemsData from "../data/navItemsData.jsx";
import MenuIcon from "../assets/icons/MenuIcon.jsx";
import Dropdown from "./Dropdown.jsx";
import MenuItemsMobile from "./MenuItemsMobile.jsx";
import DropDownMobileMenu from "./DropDownMobileMenu.jsx";

export default function NavBarMobile(){
    const [selected, setSelected] = useState(-1)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    console.log(selected)

    function handleMainMenuClick(id) {
        setSelected(id)
    }

    return(
        <>
            <button onClick={()=>setIsMenuOpen(true)}><MenuIcon /></button>
            <Transition.Root show={isMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[1000000]" onClose={setIsMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-full">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            {/* Cart header */}
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <button
                                                    type="button"
                                                    className="flex justify-end w-full -m-2 mb-4"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <CloseIcon />
                                                </button>
                                                <ul className="flex items-center space-x-4">
                                                    {navItemsData.map(item => {
                                                        return <MenuItemsMobile key={item.title} item={item} selected={selected} setSelected={setSelected} onMainMenuClick={handleMainMenuClick}/>
                                                    })}
                                                </ul>
                                                {selected >= 0 && <DropDownMobileMenu links={navItemsData[selected]?.submenu} selected={selected} setSelected={setSelected}/>}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}