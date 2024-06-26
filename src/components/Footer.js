import { Heading, VStack } from "@chakra-ui/react";

function Footer () {
    return(
        <VStack className="darkSection footer">
            <Heading as='h4' size='4xl' >
                © Copyright 2024 rabbitScripter. All rights reserved.
            </Heading>
        </VStack>
    )
}
export default Footer;