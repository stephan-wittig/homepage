import { Form, Formik } from "formik";
import React from "react";
import { ContactRequest, useContact, ContactRequestSchema } from "../../api";
import TextField from "./TextField";
import cx from "classnames";

const initialValues: ContactRequest = {
    content: "",
    senderEmail: "",
    subject: ""
}

const SendEmailForm: React.FC = () => {
    const { mutate, isLoading } = useContact();

    return <>
        <div className="block">
            <div className="message is-warning">
                <div className="message-body">
                    The form for sending emails is currently under construction. 
                    Please return later or use LinkedIn to contact me. Thank you for your interest!
                </div>
            </div>
        </div>
        <Formik 
            initialValues={initialValues}
            validationSchema={ContactRequestSchema}
            onSubmit={(values) => mutate(values)}
        >
            <Form>
                <TextField
                    name="senderEmail"
                    type="email"
                    label="Your email address"
                />
                <TextField
                    name="subject"
                    type="text"
                    label="Subject"
                />
                <div className="buttons is-right">
                    <button
                        className={cx("button is-primary", {
                            "is-loading": isLoading
                        })}
                    >Send</button>
                </div>
            </Form>
        </Formik>
    </>;
}

export default SendEmailForm;
