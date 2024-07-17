import { Box, Container } from "@chakra-ui/react";
import React from "react";
import NewHero from "./NewHero";
import NewSkills from "./NewSkills";
import NewContact from "./NewContact";
import TheWork from "./TheWorks";

function HomePage({ transform }) {
  console.log(transform);
  return (
    <Container maxW="100%" w="100%" m="0" p="0">
      <NewHero />
      <NewSkills />
      <TheWork />
      <NewContact />
    </Container>
  );
}
export default HomePage;
