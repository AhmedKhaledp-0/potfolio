import JS from "../Assets/JS.svg"
import HTML from "../Assets/HTML5.svg"
import CSS from "../Assets/CSS3_logo.svg"
import REACT from "../Assets/React-icon.svg"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import { motion } from "framer-motion"
import "../App.css"
import { Heading } from "@chakra-ui/react";

function Skills (){
    const logos = [
        {
        imgSrc : JS,
        percentage :70,
        imgAtl:JS
        },
        {imgSrc : HTML,
            percentage:95,
            imgAtl:HTML
        },
        {
        imgSrc : CSS,
        percentage:85,
        imgAtl:CSS
        },
        {imgSrc : REACT,
            percentage:80,
            imgAtl:REACT
        },
    ]

    return(
        <div className="lightSection" id="skills">
            <div className="sectionTitle">
                <Heading as='h1' size='4xl' >Work Skills</Heading>
            </div>
            <div className="SkillsCirc">
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
                    >
                        <div key={data.imgSrc} style={{ width: 200, height: 200 }}>
                            <ProgressProvider valueStart={0} valueEnd={data.percentage} animationDuration={1000}>
                                {(value) =>
                                    <CircularProgressbarWithChildren background value={value}>
                                        <img style={{ width: 100, marginTop: -5 }} src={data.imgSrc} alt={data.imgAtl} />
                                    </CircularProgressbarWithChildren>}
                            </ProgressProvider>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills;