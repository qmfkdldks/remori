import React from 'react'
// import Link from 'next/link'
// import * as Icon from 'react-feather'
// import GoogleMapComponent from "./GoogleMapComponent"
import 'isomorphic-fetch'
import { Flex, Button } from 'rebass'
import { ContactAreaWrapper, Form, SectionTitle, Heading, Text, Bar, TextArea, Input, Label } from './style'

class ContactArea extends React.Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.status === 200 ? this.setState({ submitted: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({ formFields });
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({ formFields });
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({ formFields });
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({ formFields });
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({ formFields });
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({ formFields });
    }

    onHideSuccess = () => {
        this.setState({ submitted: false });
    }

    successMessage = () => {
        if (this.state.submitted) {
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message is send to the owner
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                <ContactAreaWrapper>
                    <Flex width={1} flexWrap="wrap" justifyContent="center">
                        <SectionTitle className="section-title">
                            <Heading>Get In Touch With Us</Heading>
                            <Bar></Bar>
                            <Text>Anything On your Mind. We’ll Be Glad To Assist You!</Text>
                        </SectionTitle>

                        <Flex width={1} px={2}>
                            <Form
                                id="contactForm"
                                onSubmit={this.onSubmit}
                            >
                                <Label>Name
                                <Input
                                        type="text"
                                        name="name"
                                        required data-error="Please enter your name"
                                        placeholder="Name"
                                        value={this.state.formFields.name}
                                        onChange={this.nameChangeHandler}
                                    />
                                </Label>
                                <div className="help-block with-errors"></div>

                                <Label>Email
                                <Input
                                        type="email"
                                        name="email"
                                        required
                                        data-error="Please enter your email"
                                        placeholder="Email"
                                        value={this.state.formFields.email}
                                        onChange={this.emailChangeHandler}
                                    />
                                    <div className="help-block with-errors"></div>
                                </Label>
                                <Label>Phone
                                <Input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={this.state.formFields.phone}
                                        onChange={this.phoneChangeHandler}
                                    />
                                </Label>
                                <Label>Subject
                                <Input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={this.state.formFields.subject}
                                        onChange={this.subjectChangeHandler}
                                    />
                                </Label>
                                <Label>Message</Label>
                                <TextArea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    required
                                    data-error="Write your message"
                                    placeholder="Your Message"
                                    value={this.state.formFields.text}
                                    onChange={this.textChangeHandler}
                                />
                                <div className="help-block with-errors"></div>

                                <Button width={1} type="submit">Send Message</Button>

                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                                {this.successMessage()}
                            </Form>
                        </Flex>
                    </Flex>
                </ContactAreaWrapper>
            </React.Fragment>
        )
    }
}


export default ContactArea