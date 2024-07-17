import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function NavLink(props) {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [activeAnchor, setActiveAnchor] = useState(null); // State to hold active anchor

  useEffect(() => {
    const anchors = ["hero", "skills", "work", "contact"]; // Define all possible anchors

    const handleScroll = () => {
      // Find the first anchor that is currently in view
      const inViewAnchor = anchors.find((anchor) => {
        const element = document.getElementById(`${anchor}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom >= 100;
          console.log(rect.top);
          console.log(rect.bottom);
        }
        return false;
      });

      setActiveAnchor(inViewAnchor); // Update activeAnchor state
    };

    // Initial check on mount
    handleScroll();

    // Scroll event listener to update activeAnchor
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      as="li"
      className={`navElement navLink  ${
        activeAnchor === props.anchor ? "redNavLink" : ""
      }`}
      key={props.title}
      // className="navLink"
      onClick={handleClick(props.anchor)}
    >
      {props.title}
    </Box>
  );
}

export default NavLink;
