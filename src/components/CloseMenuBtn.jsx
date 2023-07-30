import React from "react";
import menuCloseIcon from "../assets/images/icon-menu-close.svg";

function CloseMenuBtn() {
    const handleClick = () => {
        const navContainer = document.querySelector(".nav-container");
        const navBackdrop = document.querySelector(".nav-backdrop");

        navContainer.toggleAttribute("open");
        navBackdrop.toggleAttribute("open");
    };

    return (
        <button type="button" id="navCloseBtn">
            <img src={menuCloseIcon} alt="X" onClick={handleClick} />
        </button>
    );
}

export default CloseMenuBtn;
