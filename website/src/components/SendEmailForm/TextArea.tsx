import React from "react";
import { FieldHookConfig, useField, useFormikContext } from "formik";
import cx from "classnames";

interface OwnProps {
  label?: string;
}

type Props = OwnProps & FieldHookConfig<string>;

const TextArea: React.FC<Props> = ({ label, ...restProps }) => {
  const [ field, meta ] = useField(restProps);
  const { isSubmitting } = useFormikContext();
  const renderInvalid = meta.touched && meta.error;
  const renderValid = meta.touched && !renderInvalid;
  const id = `text-area_${field.name}`;
  
  return <div className="field">
    <label className="label" htmlFor={id}>
      {label}
    </label>
    <div className="control">
      <textarea
        className={cx("textarea", {
          "is-danger": renderInvalid,
          "is-success": renderValid
        })}
        id={id}
        {...field}
        disabled={isSubmitting}
      />
    </div>
    <p
      className={cx("help is-danger", {
        "is-hidden": !renderInvalid
      })}
    >
      {meta.error}
    </p>
  </div>;
}

export default TextArea;
