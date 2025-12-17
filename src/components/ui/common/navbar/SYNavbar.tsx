"use client";
import { logo } from "@/constants/Images";
import { navLinks } from "@/constants/NavItems";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import NotificationDropDown from "./NotificationDropDown";
import SearchBar from "./SearchBar";
import UnifiedMobileSidebar from "./UnifiedMobileSidebar";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  // const [isMobileNavOpen, setIsMobileAppOpen] = useState(false);

  // const handleMobileNav = () => setIsMobileAppOpen(!isMobileNavOpen);

  return (
    <header className={`sticky top-0 z-50 w-full bg-blue-700 text-black`}>
      <Container>
        <nav className="relative flex h-16 items-center justify-between px-4 lg:px-0">
          <div>
            <Link href="/">
              <Image
                src={logo}
                width={110}
                height={100}
                alt=""
                className="h-10 w-20 object-cover object-center sm:h-12 sm:w-36"
              />
            </Link>
          </div>
          {/* // desktop menu starts =================>>>>>>>>>>>>>>>>> */}
          <div className="flex items-center gap-3 sm:gap-5">
            <SearchBar />

            <ul className="hidden items-center gap-2 md:flex">
              {navLinks?.map((nav) => (
                <li key={nav?.title}>
                  <Link
                    href={nav?.path}
                    className="flex h-7 w-7 cursor-pointer items-center justify-center gap-1 rounded-full bg-slate-100 hover:bg-white sm:h-9 sm:w-auto sm:px-3"
                  >
                    <nav.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:flex">{nav?.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/chat"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 hover:bg-white sm:h-9 sm:w-9"
              >
                <div className="relative">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  {/* Can add badge here later */}
                </div>
              </Link>
              <NotificationDropDown />

              {/* Desktop User Dropdown */}
              <div className="hidden sm:block">
                <UserDropdown />
              </div>

              {/* Mobile Unified Sidebar (Avatar Trigger) */}
              <UnifiedMobileSidebar />
            </div>
          </div>
          {/* // desktop menu end =================>>>>>>>>>>>>>>>>> */}

          {/* // mobile menu starts =================>>>>>>>>>>>>>>>>> */}

          {/* // mobile menu end  =================>>>>>>>>>>>>>>>>> */}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
