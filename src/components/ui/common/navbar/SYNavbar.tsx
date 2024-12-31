"use client";
import { logo } from "@/constants/Images";
import { navLinks } from "@/constants/NavItems";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import NotificationDropDown from "./NotificationDropDown";
import SearchBar from "./SearchBar";
import MobileUserSidebar from "./MobileUserSidebar";
import Container from "../Container";


const Navbar = () => {
    // const [isMobileNavOpen, setIsMobileAppOpen] = useState(false);

    // const handleMobileNav = () => setIsMobileAppOpen(!isMobileNavOpen);


    return (
        <header className={`bg-blue-700 text-black  w-full sticky top-0 z-50 `}>
            <Container>
                <nav className=" flex justify-between items-center h-16 px-4 xl:px-0 relative">
                    <div>
                        <Link href="/">
                            <Image
                                src={logo}
                                width={110}
                                height={100}
                                alt=""
                                className="object-cover object-center w-20 h-10 sm:w-36 sm:h-12"
                            />
                        </Link>
                    </div>
                    {/* // desktop menu starts =================>>>>>>>>>>>>>>>>> */}
                    <div className="flex items-center gap-3 sm:gap-5">

                        <SearchBar />

                        <ul>
                            {
                                navLinks?.map((nav) => <li key={nav?.title}><Link href={nav?.path}
                                    className="w-7 sm:w-auto sm:px-3 h-7 sm:h-9 bg-slate-100 hover:bg-white flex items-center justify-center rounded-full gap-1 cursor-pointer"
                                ><nav.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                                    <span className="hidden sm:flex">{nav?.title}</span>
                                </Link></li>)
                            }
                        </ul>


                        <div className="flex items-center gap-3 sm:gap-5">
                            <Link href="/chat" className="w-7 sm:w-9 h-7 sm:h-9 bg-slate-100 hover:bg-white flex items-center justify-center rounded-full">
                                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                            </Link>
                            <NotificationDropDown />
                            <UserDropdown />
                            <MobileUserSidebar />
                        </div>

                    </div>
                    {/* // desktop menu end =================>>>>>>>>>>>>>>>>> */}

                    {/* // mobile menu starts =================>>>>>>>>>>>>>>>>> */}

                    {/* // mobile menu end  =================>>>>>>>>>>>>>>>>> */}
                </nav>
            </Container>
        </header >
    )
};

export default Navbar;