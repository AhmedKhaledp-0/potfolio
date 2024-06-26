
import { Button, HStack, Heading } from "@chakra-ui/react";
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextField from "./TextField";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(){
  const validationSchema = Yup.object({
    theName:Yup.string()
    .min(2,'Too short')
    .max(50,'Too long')
    .required('Required'),
    email:Yup.string()
    .email('Enter a valid mail')
    .required('Required'),
    message:Yup.string()
    .min(10,'Too short')
    .required('Required'),
  })
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
  return(
    <Formik
      initialValues={{theName:"",email:"",message:""}}
      validationSchema={validationSchema} onSubmit={(values,actions)=>{
        alert(JSON.stringify("The Form work nice"));
        actions.resetForm();
        }
      }
    >
      {(formik) => (
        <div className="lightSection twoColSection alignTop" id="contact">
          <div className="socials">
            <Heading as='h1' size='4xl'>Keep on touch</Heading>
            <HStack color="white" p=" 2rem 0" >
              {socials.map((data) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{scale:.9}}
                >
                <a key={data.url} href={data.url} style={{ margin: "0 8px" }}>
                  <FontAwesomeIcon color="#495E57" size="2x" icon={data.icon} />
                </a>
                </motion.div>
              ))}
            </HStack>
          </div>
          <div className="contactForm">
            <form onSubmit={formik.handleSubmit}>
              <TextField name="theName" type="text" lable="Name" placeholder="john" />
              <TextField name="email" type="email" lable="Email" placeholder="john@example.com" />
              <TextField name="message" type="text" lable="Message" placeholder="Message text" />
              <Button className="yellbutton" type="submit" colorScheme="blue" width="full" isLoading={formik.isSubmitting}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default Contact;