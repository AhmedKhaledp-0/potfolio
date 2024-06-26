import React, { useEffect, useRef, useState } from "react";

function Nav() {
    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        }
    };
    const [transform, setTransform] = useState("translateY(0)");
    const prevScrollY = useRef(0);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY.current) {
            setTransform("translateY(-200px)");
        } else {
            setTransform("translateY(0)");
        }
        prevScrollY.current = currentScrollY;
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            style={{
                position:"sticky",
                top: 0,
                left: 0,
                right: 0,
                transform,
                transition: "transform .3s ease-in-out",
                zIndex: 9999,
                background:"white",
                borderRadius:"0 0 16px 16px"
            }}
        >
            <div className="navContainer">
                <div className="logoText">
                    portfolio
                </div>
                <div className="navElements" >
                    <ul>
                        <li className="navElement">
                            <a onClick={handleClick("hero")}>Home</a>
                        </li>
                        <li className="navElement">
                            <a onClick={handleClick("skills")}>Skills</a>
                        </li>
                        <li className="navElement">
                            <a onClick={handleClick("work")}>Works</a>
                        </li>
                        <li className="navElement">
                            <a onClick={handleClick("contact")}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
