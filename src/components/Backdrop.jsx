import React from "react";

function Backdrop() {
    const handleClick = () => {
        const navContainer = document.querySelector(".nav-container");
        const navBackdrop = document.querySelector(".nav-backdrop");

        if (navContainer.hasAttribute("open")) {
            navContainer.toggleAttribute("open");
            navBackdrop.toggleAttribute("open");
        }
    };
    return <div className="nav-backdrop" onClick={handleClick}></div>;
}

export default Backdrop;
