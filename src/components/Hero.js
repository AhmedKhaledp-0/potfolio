import { HStack, Heading } from "@chakra-ui/react";
import Logo from "../Assets/Logo.png"
import Typewriter from 'typewriter-effect';

function Hero (){
    return(
        <div className="twoColSection darkSection" id='hero'>
            <div className="heroTexts ">
                <h3>
                    Hello it's me
                </h3>
                <Heading
                    as='h1'
                    size='2xl'
                >
                    Ahmed Khaled
                </Heading>
                <Heading pb='2rem'>
                    <HStack>
                        <div> And I'm a </div>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'UX/UI Designer','Monteur'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </HStack>
                </Heading>
                <button className="yellbutton">Download CV</button>
            </div>
            <div className="logoDiv">
                <img  className="heroLogo" src={Logo}></img>
            </div>
        </div>
    )
}
export default Hero;