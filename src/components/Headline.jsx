import { useEffect, useState } from "react";
import ReadMoreBtn from "./ReadMoreBtn";

export default function ({ title, description, url, image }) {
    const { desktop, mobile, alt } = image;
    const maximumMobileSize = 768;
    const [currentImage, setImage] = useState(() =>
        window.innerWidth > maximumMobileSize ? desktop : mobile
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= maximumMobileSize) {
                setImage(mobile);
            } else {
                setImage(desktop);
            }
        });
    }, []);

    return (
        <div className="headline-container">
            <img src={currentImage} alt={alt} className="headline-image" />
            <section>
                <h1 className="headline-title">{title}</h1>
                <div className="headline-text-container">
                    <p className="headline-description">{description}</p>
                    <ReadMoreBtn url={url} />
                </div>
            </section>
        </div>
    );
}
