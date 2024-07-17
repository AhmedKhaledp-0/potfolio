import React, { useState, useRef, useEffect } from "react";
import { Box, Flex, Heading, HStack, VStack, Spacer } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import project3 from "../Assets/project3.png";
import project1small from "../Assets/project1small.png";
import project2small from "../Assets/project2small.png";
import { fadein, filter, revealInText } from "./fadein";

const projects = [
  {
    id: 1,
    projectTitle: "Project1",
    imgSrc: project2,
    url: "https://little-lemon-inky-six.vercel.app/",
    title: "Little lemon",
    tools: "HTML, CSS, ReactJS",
    small: project1small,
  },
  {
    id: 2,
    projectTitle: "Project2",
    imgSrc: project1,
    url: "http://newfolder.me/",
    title: "Ecommerce",
    tools: "HTML, CSS, JS",
    small: project2small,
  },

  {
    id: 3,
    projectTitle: "Project3",
    imgSrc: project3,
    url: "https://react-app-sandy-five.vercel.app/",
    title: "Old Portfolio",
    tools: "HTML, CSS, ReactJS",
    small: project1small,
  },
];

const TheWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setSelectedId(null);
    setModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (
      event.target.classList.contains("modal-content") ||
      event.target.closest(".modal-content") ||
      event.target.classList.contains("modal-background")
    ) {
      return; // Click inside modal content, do nothing
    } else {
      closeModal(); // Click outside modal content, close modal
    }
  };

  useEffect(() => {
    // Function to handle scroll disabling/enabling
    const handleScrollLock = () => {
      if (modalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScrollLock(); // Initial setup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <Flex
      h="500vh"
      ref={targetRef}
      alignItems="flex-start"
      id="work-section"
      pt={["60px", "0"]}
    >
      <Flex
        h="100vh"
        position="sticky"
        top="0"
        alignItems="flex-start"
        justifyContent="flex-start"
        overflow="hidden"
        flexDir="column"
        gap="0"
      >
        <motion.div
          variants={revealInText("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewPort={{ once: "false", amount: 0.7 }}
          style={{ position: "sticky" }}
        >
          <Heading as="h2" size="lg" p="2rem">
            Works
          </Heading>
        </motion.div>
        <Flex
          as={motion.div}
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
          gridTemplateRows="1fr"
          gridGap="3vw"
          padding="0 4rem 0 4rem"
          style={{ x }}
        >
          {projects.map((project) => (
            <Flex
              key={project.id}
              as={motion.div}
              className="gallery-item-wrapper"
              w="95vw"
              mr="4rem"
              layoutId={project.id}
              onClick={() => {
                setSelectedId(project);
                setModalOpen(true); // Set modalOpen to true when opening modal
              }}
            >
              <Flex className="gallery-item" position="relative">
                <Flex
                  className="gallery-item-info"
                  position="absolute"
                  bottom="10%"
                  zIndex="1"
                  flexDirection="column"
                  alignItems="start"
                >
                  <h1 className="gallery-info-title">{project.title}</h1>
                  <h2 className="gallery-info-subtitle">
                    {project.projectTitle}
                  </h2>
                  <p className="gallery-info-category">{project.tools}</p>
                </Flex>
                <VStack
                  key={project.projectTitle}
                  as={motion.div}
                  width="fit-content"
                  maxW="1300px"
                  height={["75vh", "80vh"]}
                  borderRadius="16"
                  bg="#fff"
                  color="#495E57"
                  gap="0"
                  overflow="hidden"
                  className="gallery-item-image"
                  variants={fadein("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewPort={{ once: "false", amount: 0.7 }}
                >
                  <HStack
                    width="100%"
                    justify="space-between"
                    alignContent="center"
                    p=".5rem  1rem "
                  >
                    <HStack>
                      <Heading as="h3" size="sm">
                        {project.projectTitle}
                      </Heading>
                    </HStack>
                    <HStack>
                      <FontAwesomeIcon icon={faMinus} />
                      <FontAwesomeIcon icon={faSquare} />
                      <FontAwesomeIcon icon={faXmark} />
                    </HStack>
                  </HStack>
                  <Flex
                    style={{ filter }}
                    width="80vw"
                    height="100%"
                    justify="center"
                    align="center"
                    backgroundImage={`url(${useBreakpointValue({
                      base: project.small,
                      md: project.imgSrc,
                      lg: project.imgSrc,
                    })})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    as={motion.div}
                    variants={filter(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewPort={{ once: false, amount: 0.7 }}
                  />
                </VStack>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Spacer />
      <AnimatePresence>
        {selectedId && (
          <Flex
            key={selectedId.id}
            w="100vw"
            h="100vh"
            top="0"
            left="0"
            bgColor="#F7FAFCBA"
            pos="fixed"
            zIndex={20}
            overflowY="auto"
            flexDirection="column"
            p="1rem"
            justifyContent="center"
            alignItems="center"
            onClick={handleModalClick}
          >
            <VStack
              width="90%"
              height="90vh"
              borderRadius="16px"
              bg="#fff"
              color="#495E57"
              gap="0"
              overflow="hidden"
              initial={{ opacity: 1 }}
              as={motion.div}
              layoutId={selectedId.id}
              className="modal-content"
            >
              <HStack
                width="100%"
                justify="space-between"
                alignContent="center"
                p=".5rem  1rem "
              >
                <HStack>
                  <Heading as="h3" size="sm">
                    {selectedId.projectTitle}
                  </Heading>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faMinus} />
                  <FontAwesomeIcon icon={faSquare} />
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => {
                      setSelectedId(null);
                      setModalOpen(false); // Set modalOpen to false when closing modal
                    }}
                  />
                </HStack>
              </HStack>
              <Flex width="100%" height="100%" justify="center" align="center">
                <iframe
                  src={selectedId.url}
                  title="Live Site Viewer"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </Flex>
            </VStack>
          </Flex>
        )}
      </AnimatePresence>

      <Spacer />
    </Flex>
  );
};

export default TheWork;
