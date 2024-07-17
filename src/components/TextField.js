import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

import { useField, Field } from "formik";

function TextField({ lable, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl
      className="theFormControl"
      isInvalid={meta.error && meta.touched}
    >
      <FormLabel htmlFor={lable}>{lable}</FormLabel>
      <Field w="100%" className="theInput" as={Input} {...field} {...props} />
      <FormErrorMessage color="#f00">{meta.error}</FormErrorMessage>
    </FormControl>
  );
}
export default TextField;
