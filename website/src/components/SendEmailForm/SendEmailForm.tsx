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
                        className={cx("button", {
                            "is-loading": isLoading,
                            "is-primary": !isSuccess,
                            "is-success": isSuccess
                        })}
                        disabled={isSuccess}
                        type="submit"
                    >Send</button>
                </div>
            </Form>
        </Formik>
    </div>;
}

export default SendEmailForm;
