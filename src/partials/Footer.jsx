import NavLinkFooter from "../components/NavLinkFooter.jsx";
import WhatsAppIcon from "../assets/icons/WhatsAppIcon.jsx";
import GlobeIcon from "../assets/icons/GlobeIcon.jsx";
import CallIcon from "../assets/icons/CallIcon.jsx";

export function Footer(){
    return (
        <footer className="px-6 pt-10 sm:px-16">
            <section className="flex flex-wrap justify-between gap-8 sm:gap-10 py-10 border-t border-b border-[#e6e6e6]">
                {/* Need Help */}
                <div>
                    <h3 className="font-bold mb-8">Need help?</h3>
                    <ul className="space-y-8">
                        <li>
                            <button className="flex items-center space-x-2">
                                <WhatsAppIcon />
                                <span className="text-xs font-bold">WhatsApp</span>
                            </button>
                        </li>

                        <li>
                            <button>
                                <div className="flex items-center space-x-2 mb-1">
                                    <CallIcon />
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
                        <NavLinkFooter href="#">To buy online</NavLinkFooter>
                        <NavLinkFooter href="#">Pay</NavLinkFooter>
                        <NavLinkFooter href="#">Shipment</NavLinkFooter>
                        <NavLinkFooter href="#">Returns</NavLinkFooter>
                        <NavLinkFooter href="#">Gift card</NavLinkFooter>
                        <NavLinkFooter href="#">Gift ticket</NavLinkFooter>
                        <NavLinkFooter href="#">Buy as a guest</NavLinkFooter>
                        <NavLinkFooter href="#">Electronic ticket</NavLinkFooter>
                        <NavLinkFooter href="#">Request invoice</NavLinkFooter>
                    </ul>
                </div>

                {/* We are BERSHKA */}
                <div>
                    <h3 className="font-bold mb-6">We are BERSHKA</h3>
                    <ul>
                        <NavLinkFooter href="#">About BERSHKA</NavLinkFooter>
                        <NavLinkFooter href="#">Sustainability</NavLinkFooter>
                        <NavLinkFooter href="#">Work with us</NavLinkFooter>
                        <NavLinkFooter href="#">Affinity card</NavLinkFooter>
                        <NavLinkFooter href="#">Press</NavLinkFooter>
                        <NavLinkFooter href="#">Our shops</NavLinkFooter>
                    </ul>
                </div>

                {/* It may interest you */}
                <div>
                    <h3 className="font-bold mb-6">It may interest you</h3>
                    <ul>
                        <NavLinkFooter href="#">Women&apos;s dresses</NavLinkFooter>
                        <NavLinkFooter href="#">Women&apos;s jackets</NavLinkFooter>
                        <NavLinkFooter href="#">Women&apos;s coats</NavLinkFooter>
                        <NavLinkFooter href="#">Women&apos;s sweater and knit</NavLinkFooter>
                        <NavLinkFooter href="#">baggy jeans</NavLinkFooter>
                        <NavLinkFooter href="#">Women&apos;s trousers</NavLinkFooter>
                        <NavLinkFooter href="#">Sales</NavLinkFooter>
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
                <div className="flex flex-wrap justify-between gap-8 sm:gap-10">
                    <ul className="flex flex-wrap">
                        <NavLinkFooter dot="right" href="#">Terms and conditions of purchase</NavLinkFooter>
                        <NavLinkFooter dot="right" href="#">Privacy Policy</NavLinkFooter>
                        <NavLinkFooter dot="right" href="#">Cookies policy</NavLinkFooter>
                        <NavLinkFooter dot="right" href="#">Set cookies</NavLinkFooter>
                        <NavLinkFooter href="#">SiteMap</NavLinkFooter>
                    </ul>

                    <div className="flex items-center">
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