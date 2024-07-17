import {
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import TextField from "./TextField";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  theName: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Enter a valid mail").required("Required"),
  message: Yup.string().min(10, "Too short").required("Required"),
});
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: 3kuriboh3@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/AhmedKhaledp-0",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ahmed-khaled-8a6450276/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/25656082/ahmed-khaled",
  },
];

function NewContact() {
  return (
    <Flex
      minH="100vh"
      h="100vh"
      maxW="100%"
      w="100%"
      p="1rem"
      id="contact-section"
      pt={["60px", "0"]}
    >
      <VStack w="100%" h="100%" alignItems="flex-start">
        <Heading>Keep on touch</Heading>
        <Spacer />
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          w="100%"
          flexDir={["column", "row"]}
        >
          <HStack p=" 2rem 0">
            {socials.map((data) => (
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <a key={data.url} href={data.url} style={{ margin: "0 8px" }}>
                  <FontAwesomeIcon color="#fff" size="2x" icon={data.icon} />
                </a>
              </motion.div>
            ))}
          </HStack>
          <Formik
            initialValues={{ theName: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify("The Form work nice"));
              actions.resetForm();
            }}
          >
            {(formik) => (
              <VStack w={["100%", "40%"]}>
                <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                  <TextField
                    name="theName"
                    type="text"
                    lable="Name"
                    placeholder="john"
                  />
                  <TextField
                    name="email"
                    type="email"
                    lable="Email"
                    placeholder="john@example.com"
                  />
                  <TextField
                    name="message"
                    type="text"
                    lable="Message"
                    placeholder="Message text"
                  />
                  <Button
                    className="yellbutton"
                    type="submit"
                    colorScheme="blue"
                    width="full"
                    isLoading={formik.isSubmitting}
                  >
                    Submit
                  </Button>
                </form>
              </VStack>
            )}
          </Formik>
        </Flex>
        <Spacer />
        <Flex w="100%" justifyContent="center" m={["0", "1rem"]}>
          <Heading as="h5" size={["xs", "sm"]} textAlign="center" w>
            © Copyright 2024 rabbitScripter. All rights reserved.
          </Heading>
        </Flex>
      </VStack>
    </Flex>
  );
}
export default NewContact;
