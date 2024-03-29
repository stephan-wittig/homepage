import { Form, Formik } from "formik";
import React from "react";
import { ContactRequest, useContact, ContactRequestSchema } from "../../api";
import TextField from "./TextField";
import cx from "classnames";
import TextArea from "./TextArea";

const initialValues: ContactRequest = {
    content: "",
    senderEmail: "",
    subject: ""
}

const SendEmailForm: React.FC = () => {
    const { mutateAsync, isLoading, isError, isSuccess, reset } = useContact();

    return <div className="block">
        <Formik
            initialValues={initialValues}
            validationSchema={ContactRequestSchema.required()}
            onSubmit={async (values) => {
                const castedValues = ContactRequestSchema.validateSync(values);
                await  mutateAsync(castedValues);
            }}
            onReset={() => {
                reset();
            }}
        >
            <Form>
                <div className={cx("message is-danger", { "is-hidden": !isError})}>
                    <div className="message-body">
                        There was a problem with sending your message. Please try again later.
                    </div>
                </div>
                <div className={cx("message is-success", { "is-hidden": !isSuccess})}>
                    <div className="message-body">
                        Your message was sent. Thank you!
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <TextField
                            name="senderEmail"
                            type="email"
                            label="Your email address"
                        />
                    </div>
                    <div className="column">
                        <TextField
                            name="subject"
                            type="text"
                            label="Subject"
                        />
                    </div>
                </div>
                <TextArea
                    name="content"
                    label="Message"
                />
                <div className="buttons is-right">
                    <button
                        className={cx("button is-primary is-outlined", {
                            "is-loading": isLoading
                        })}
                        type="reset"
                    >Clear form</button>
                    <button
                        className={cx("button is-primary", {
                            "is-loading": isLoading,
                            "is-hidden": isSuccess
                        })}
                        disabled={isSuccess}
                        type="submit"
                    >
                        <span className="icon is-small">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span>
                            Send
                        </span>
                    </button>
                    <button
                        className={cx("button is-success has-text-white", {
                            "is-hidden": !isSuccess
                        })}
                        type="button"
                        disabled
                    >
                        <span className="icon is-small">
                            <i className="fas fa-check"></i>
                        </span>
                        <span>
                            Sent
                        </span>
                    </button>
                </div>
            </Form>
        </Formik>
    </div>;
}

export default SendEmailForm;
