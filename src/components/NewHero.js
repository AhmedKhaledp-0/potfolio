import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import Logo from "../Assets/Logo.png";
import { motion } from "framer-motion";
import { fadein, revealInText } from "./fadein";

function NewHero({ transform }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const item = {
    hidden: { opacity: 0, top: 200 },
    show: { opacity: 1, top: 100 },
  };
  return (
    <Flex as="main" maxW="100%" w="100%" p="1rem" id="hero-section">
      <Flex
        minH="100vh"
        justifyContent="space-between"
        maxW="100%"
        w="100%"
        flexDir={["column", "row"]}
      >
        <Spacer display={["flex", "none"]} />

        <motion.div
          variants={revealInText("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewPort={{ once: "false", amount: 0.7 }}
          style={{ width: "100%" }}
        >
          <VStack alignItems={["flex-start", "flex-start"]} gap="10px">
            <Heading as="h2" size="lg">
              Hello It's me
            </Heading>

            <Heading as="h1" size={["2xl", "4xl"]}>
              Ahmed Khaled
            </Heading>
            <HStack>
              <Heading as="h3" size="lg">
                And I'm a
              </Heading>
              <Heading as="h3" size="lg">
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "UX/UI Designer",
                      "Monteur",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Heading>
            </HStack>

            <Button>Download CV</Button>
          </VStack>
        </motion.div>

        <Spacer display={["flex"]} />

        <Image src={Logo} w={["70%", "40%"]} />
        <Spacer display={["flex", "none"]} />
      </Flex>
    </Flex>
  );
}
export default NewHero;
