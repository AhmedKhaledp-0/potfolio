import React from "react";
import JS from "../Assets/JS.svg";
import HTML from "../Assets/HTML5.svg";
import CSS from "../Assets/CSS3_logo.svg";
import REACT from "../Assets/React-icon.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";
import { Flex, Heading, HStack, Image, Spacer, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadein, revealInText } from "./fadein";
import { useBreakpointValue } from "@chakra-ui/react";

const logos = [
  {
    imgSrc: JS,
    percentage: 70,
    imgAtl: JS,
  },
  { imgSrc: HTML, percentage: 95, imgAtl: HTML },
  {
    imgSrc: CSS,
    percentage: 85,
    imgAtl: CSS,
  },
  { imgSrc: REACT, percentage: 80, imgAtl: REACT },
];

function NewSkills({ transform }) {
  const width = useBreakpointValue({ base: "100px", md: "150px", lg: "200px" });
  const inwidth = useBreakpointValue({
    base: "50px",
    md: "75px",
    lg: "100px",
  });
  return (
    <Flex
      minH="100vh"
      h="100vh"
      maxW="100%"
      w="100%"
      p="1rem"
      id="skills-section"
      pt={["60px", "0"]}
    >
      <VStack h="100%" w="100%" alignItems="flex-start">
        <motion.div
          variants={revealInText("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewPort={{ once: "false", amount: 0.7 }}
        >
          <Heading as="h2" size="lg">
            Skills
          </Heading>
        </motion.div>
        <Spacer />
        <HStack
          w="100%"
          justifyContent="space-between"
          flexDir={["column", "row"]}
          gap="2rem"
        >
          {logos.map((data) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              key={data.imgSrc}
            >
              <div style={{ width: width, height: width }}>
                <ProgressProvider
                  valueStart={0}
                  valueEnd={data.percentage}
                  animationDuration={1000}
                >
                  {(value) => (
                    <CircularProgressbarWithChildren background value={value}>
                      <Image
                        style={{ width: inwidth, marginTop: -5 }}
                        src={data.imgSrc}
                        alt={data.imgAtl}
                        pointerEvents="none"
                      />
                    </CircularProgressbarWithChildren>
                  )}
                </ProgressProvider>
              </div>
            </motion.div>
          ))}
        </HStack>
        <Spacer />
      </VStack>
    </Flex>
  );
}

export default NewSkills;
