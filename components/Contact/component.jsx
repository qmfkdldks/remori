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
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const ContactArea = () => {
  const successMessage = () => {
    // if (this.state.submitted) {
    //   return (
    //     <div className="alert alert-success">
    //       <strong>Thank you!</strong> Your message is send to the owner
    //       <button onClick={this.onHideSuccess} type="button" className="close">
    //         <span aria-hidden="true">&times;</span>
    //       </button>
    //     </div>
    //   );
    // }
  };

  return (
    <ContactAreaWrapper>
      <SectionTitle className="section-title">
        <Heading>Get In Touch With Us</Heading>
        <Text>Anything On your Mind. We’ll Be Glad To Assist You!</Text>
      </SectionTitle>

      <Formik
        initialValues={{
          submitted: false,
          email: "",
          subject: "",
          text: ""
        }}
        validationSchema={EmailSchema}
        onSubmit={(values, { setSubmitting }) => {
          fetch(
            "https://ofw857kax6.execute-api.us-east-2.amazonaws.com/default/sendEmail",
            {
              method: "post",
              headers: {
                Accept: "application/json"
              },
              body: JSON.stringify(values)
            }
          ).then(res => {
            setSubmitting(false);
            console.log("success");
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Label>
              Email
              <ErrorMessage name="from" component="span" />
            </Label>
            <Field type="email" name="from" required />
            <Label>Title</Label>
            <Field type="text" name="subject" required />
            <ErrorMessage name="subject" component="div" />
            <Label>Message</Label>
            <Field name="text" style={{ height: "150px" }} name="text" />
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
