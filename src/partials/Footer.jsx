import Whatsapp from "../assets/icons/Whatsapp.jsx";
import Call from "../assets/icons/Call.jsx";
import GlobeIcon from "../assets/icons/GlobeIcon.jsx";

export function Footer(){
    return (
        <footer className="px-16 pt-10">
            <section className="flex justify-between py-10 border-t border-b border-[#e6e6e6]">
                {/* Need Help */}
                <div>
                    <h3 className="font-bold mb-8">Need help?</h3>
                    <ul className="space-y-8">
                        <li>
                            <button className="flex items-center space-x-2">
                                <Whatsapp />
                                <span className="text-xs font-bold">WhatsApp</span>
                            </button>
                        </li>

                        <li>
                            <button>
                                <div className="flex items-center space-x-2 mb-1">
                                    <Call />
                                    <span className="text-xs font-bold">Call 900 456 003</span>
                                    <span className="text-[10px] text-[#16c691]">On-line</span>
                                </div>
                                <p className="text-[#8c8c8c] text-[10px]">Monday to Friday from 09:00 to 17:00.</p>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Aids */}
                <div>
                    <h3 className="font-bold mb-6">Aid</h3>
                    <ul>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">To buy online</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Pay</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Shipment</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Returns</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Gift card</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Gift ticket</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Buy as a guest</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Electronic ticket</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Request invoice</a>
                        </li>
                    </ul>
                </div>

                {/* We are BERSHKA */}
                <div>
                    <h3 className="font-bold mb-6">We are BERSHKA</h3>
                    <ul>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">About BERSHKA</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Sustainability</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Work with us</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Affinity card</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Press</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Our shops</a>
                        </li>
                    </ul>
                </div>

                {/* It may interest you */}
                <div>
                    <h3 className="font-bold mb-6">It may interest you</h3>
                    <ul>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Women&apos;s dresses</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Women&apos;s jackets</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Women&apos;s coats</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Women&apos;s sweater and knit</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">baggy jeans</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Women&apos;s trousers</a>
                        </li>
                        <li>
                            <a className="text-sm leading-[1.95312rem] cursor-pointer">Sales</a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <ul className="grid justify-end grid-cols-5">
                        <li>
                            <a href="#">
                                <img alt="instagram" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/instagram_desktop.svg?ts=20240115093548" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="Facebook" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/facebook_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="twitter" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/twitter_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="tiktok" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/tiktok_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="snapchat" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/snapchat_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="Youtube" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/youtube_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="pinterest" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/pinterest_desktop.svg?ts=20240115093548"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img alt="spotify" width="40" height="40" src="https://static.bershka.net/4/static/itxwebstandard/images/footer/spotify_desktop.svg?ts=20240115093548" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Copyright */}
            <section className="py-4">
                <div className="flex justify-between">
                    <ul className="flex">
                        <li className="flex items-center">
                            <a href="#" className="text-sm">Terms and conditions of purchase</a>
                            <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="text-sm">Privacy Policy</a>
                            <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="text-sm">Cookies policy</a>
                            <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="text-sm">Set cookies</a>
                            <span className="mx-2.5 h-1 w-1 bg-black rounded-full"></span>
                        </li>

                        <li className="flex items-center">
                            <a href="#" className="text-sm">SiteMap</a>
                        </li>
                    </ul>

                    <div className="flex">
                        <button className="flex items-center space-x-2 mr-10">
                            <GlobeIcon />
                            <span className="text-sm font-medium">Spain | Spanish</span>
                        </button>

                        <span className="text-sm text-[#8c8c8c]">&copy; 2024 BERSHKA</span>
                    </div>

                </div>
                <div></div>
            </section>
        </footer>
    )
}