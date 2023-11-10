import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-green";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-montserrat text-3xl font-black">Ellie Smith</h4>
            </div>
        </nav>
    );
};

export default Navbar;