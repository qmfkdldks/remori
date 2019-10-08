import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import "isomorphic-fetch";
import {
  ContactAreaWrapper,
  SectionTitle,
  Heading,
  Text,
  Button,
  Label,
  Form,
  Field,
  ErrorMessage
} from "./style";

const EmailSchema = Yup.object().shape({
  text: Yup.string()
    .min(5, "Too Short!")
    .required("Required"),
  subject: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  from: Yup.string()
    .email("Invalid Email")
    .required("Required")
});

const successMessage = () => {
  return (
    <div className="alert alert-success">
      <strong>Thank you!</strong>
      Your message is send to the owner
    </div>
  );
};

const ContactArea = () => {
  return (
    <ContactAreaWrapper>
      <SectionTitle className="section-title">
        <Heading>Get In Touch With Us</Heading>
        <Text>Anything On your Mind. We’ll Be Glad To Assist You!</Text>
      </SectionTitle>

      <Formik
        initialValues={{
          from: "",
          subject: "",
          text: ""
        }}
        validationSchema={EmailSchema}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          fetch(
            "https://ofw857kax6.execute-api.us-east-2.amazonaws.com/default/sendEmail",
            {
              method: "post",
              headers: {
                Accept: "application/json"
              },
              body: JSON.stringify(values)
            }
          )
            .then(res => {
              setSubmitting(false);
              setStatus(res.status);
              console.log(res.status);
            })
            .catch(err => {
              setSubmitting(false);
              setStatus(err.status);
            });
        }}
      >
        {({ values, handleChange, isSubmitting, status }) => (
          <Form>
            {status && successMessage}
            <Label>Email</Label>
            <Field
              type="email"
              name="from"
              onChange={handleChange}
              value={values.from}
              required
            />
            <ErrorMessage name="from" component="span" />
            <Label>Title</Label>
            <Field
              type="text"
              name="subject"
              onChange={handleChange}
              value={values.subject}
              required
            />
            <ErrorMessage name="subject" component="div" />
            <Label>Message</Label>
            <Field
              name="text"
              style={{ height: "150px" }}
              onChange={handleChange}
              value={values.text}
              required
            />
            <ErrorMessage name="text" component="div" required />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </ContactAreaWrapper>
  );
};

export default ContactArea;
