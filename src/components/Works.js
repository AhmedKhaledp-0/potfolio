import { Box, HStack, Heading, VStack,Image, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faMinus} from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"
import { useState,useRef,useEffect } from "react";
import project1 from "../Assets/project1.png"
import project2 from "../Assets/project2.png"
import project3 from "../Assets/project3.png"
import project4 from "../Assets/project4.png"

function Work() {
    const projects = [
        {
            projectTitle: "Project1",
            imgSrc:project1
        },
        {
            projectTitle: "Project2",
            imgSrc:project2
        },
        {
            projectTitle: "Project3",
            imgSrc:project3
        },
        {
            projectTitle: "Project4",
            imgSrc:project4
        },{
            projectTitle: "Project3",
            imgSrc:project3
        },
        {
            projectTitle: "Project4",
            imgSrc:project4
        },{
            projectTitle: "Project3",
            imgSrc:project3
        },
        {
            projectTitle: "Project4",
            imgSrc:project4
        },
    ]
    const [width,setWidth] = useState(0);
    const warper = useRef();
    useEffect (()=>{
        setWidth(warper.current.scrollWidth - warper.current.offsetWidth)
    },[]);


    return (
        <Box className="darkSection" display="flex" flexDir="column" justifyContent="space-between"  height="fit-content" id="work">
            <HStack>
                <Heading as='h1' size='4xl' mb="2rem" >Work</Heading>
            </HStack>
            <Box
                cursor="grab"
                overflowX="hidden"
                whiteSpace='nowarp'
                ref={warper}
            >
                <motion.div
                    className="warper"
                    whileTap={{cursor:"grabbing"}}
                >
                    <motion.div drag="x" dragConstraints={{
                        right:0,
                        left:-width
                    }}>
                        <HStack
                            gap="2rem"
                            wrap="wrap"
                            alignItems="flex-start"
                            width="max-content"
                        >
                            {projects.map((project) => (
                                <VStack
                                    key={project.projectTitle}
                                    width='600px'
                                    height="337px"
                                    borderRadius="16"
                                    bg="#fff"
                                    color="#495E57"
                                    gap="0"
                                    overflow="hidden"
                                >
                                    <HStack  width="100%" justify='space-between' alignContent="center" p=".5rem  1rem ">
                                        <HStack>
                                            <Heading as='h3'>
                                                {project.projectTitle}
                                            </Heading>
                                        </HStack>
                                        <HStack >
                                            <FontAwesomeIcon icon={faMinus} />
                                            <FontAwesomeIcon icon={faSquare} />
                                            <FontAwesomeIcon icon={faXmark} />
                                        </HStack>
                                    </HStack>
                                    <Flex
                                        width="100%"
                                        height="100%"
                                        justify="center"
                                        align="center"
                                    >
                                        <Image
                                            borderBottomRadius="16"
                                            pointerEvents="none"
                                            maxHeight="100%"
                                            objectFit="cover"
                                            src={project.imgSrc}
                                        />
                                    </Flex>
                                </VStack>
                            ))}
                        </HStack>
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    );
}

export default Work;