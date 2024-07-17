import { Box, Flex, HStack, VStack, Spacer, Text } from "@chakra-ui/react";
import { motion, useScroll, useSpring } from "framer-motion";

import React from "react";
import NavLink from "./NavLink";
import NewHero from "./NewHero";
import NewSkills from "./NewSkills";
import NewContact from "./NewContact";
import TheWork from "./TheWorks";
import HomePage from "./HomePage";

function AsideNavbar() {
  const { scrollYProgress } = useScroll();
  const scaleY = scrollYProgress;
  const scaleX = scrollYProgress;

  const links = [
    {
      path: "/About",
      title: "About",
      element: <NewHero />,
      anchor: "hero",
    },
    {
      path: "/Skills",
      title: "Skills",
      element: <NewSkills />,
      anchor: "skills",
    },
    {
      path: "/Work",
      title: "Work",
      element: <TheWork />,
      anchor: "work",
    },
    {
      path: "/Contact",
      title: "Contact",
      element: <NewContact />,
      anchor: "contact",
    },
  ];
  return (
    <Flex
      as="nav"
      h={["40px", "100vh"]}
      w={["100%", "40px"]}
      color="white"
      position="fixed"
      top="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      zIndex="99999"
    >
      <Flex h="100%" m="1rem" display={["none", "flex"]}>
        <VStack gap="2rem">
          <VStack gap="2rem" position="relative">
            <Text fontSize="larger" fontWeight="bolder" className="navLink">
              Portfolio
            </Text>
            <Spacer />

            <Flex justifyContent="center">
              <motion.div
                className="progress-bar"
                style={{
                  scaleY,
                  width: "1px",
                  backgroundColor: "gray",
                  transformOrigin: "top",
                  zIndex: "1",
                }}
              />
              <Flex zIndex="10" flexDirection="column">
                {links.map((link) => (
                  <NavLink key={link.title} {...link} />
                ))}
              </Flex>
            </Flex>
          </VStack>

          <Spacer />
        </VStack>
      </Flex>

      <Flex h="100%" m="1rem" display={["flex", "none"]}>
        <HStack gap="2rem">
          <HStack gap="2rem" position="relative">
            {/* <Text fontSize="larger" fontWeight="bolder" className="navLink">
              Portfolio
            </Text> */}

            <Flex justifyContent="center">
              <motion.div
                className="progress-bar"
                style={{
                  scaleX,
                  width: "90%",
                  height: "1px",
                  backgroundColor: "gray",
                  transformOrigin: "left",
                  zIndex: "1",
                }}
              />
              <Flex zIndex="10" flexDirection="row" className="Hoizontal">
                {links.map((link) => (
                  <NavLink key={link.title} {...link} />
                ))}
              </Flex>
            </Flex>
          </HStack>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default AsideNavbar;
