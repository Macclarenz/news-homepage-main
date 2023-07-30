import React from "react";
import menuIcon from "../assets/images/icon-menu.svg";

function MenuBtn() {
    const handleClick = () => {
        const navContainer = document.querySelector(".nav-container");
        const navBackdrop = document.querySelector(".nav-backdrop");
        navContainer.toggleAttribute("open");
        navBackdrop.toggleAttribute("open");
    };

    return (
        <button type="button" id="navMenuBtn" onClick={handleClick}>
            <img src={menuIcon} alt="menu icon" />
        </button>
    );
}

export default MenuBtn;
