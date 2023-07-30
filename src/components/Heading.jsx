import Logo from "./Logo";
import NavLink from "./NavLink";
import logo from "../assets/images/logo.svg";
import CloseMenuBtn from "./CloseMenuBtn";
import MenuBtn from "./MenuBtn";
import Backdrop from "./Backdrop";

export default function () {
    const links = [
        { name: "Home", url: "#" },
        { name: "New", url: "#" },
        { name: "Popular", url: "#" },
        { name: "Trending", url: "#" },
        { name: "Categories", url: "#" },
    ];

    const navLinks = links.map((link, index) => (
        <NavLink key={index} index={index} name={link.name} url={link.url} />
    ));
    const logoSrc = logo;

    return (
        <header className="header-container">
            <Logo url={"#"} srcFile={logoSrc} alt={"Serif W"} />
            <MenuBtn />
            <nav className="nav-container">
                <CloseMenuBtn />
                {navLinks}
            </nav>
            <Backdrop />
        </header>
    );
}
