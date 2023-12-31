import React from "react";
import { useState, useEffect } from "react";
import Styles from './scroll.module.css'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Scroll = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", checkScrollTop);

        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={Styles.scrolltotop}
            style={{ display: showScroll ? "flex" : "none" }}
        >
            <button onClick={scrollTop}>
                <BsFillArrowUpCircleFill  className='scrollup-icon'/>
            </button>
        </div>
    );
};

export default Scroll;
