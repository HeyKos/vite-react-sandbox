import React from "react";
import { Field } from "formik";


export interface LabeledInputProperties {
    htmlId: string,
    inputType: string | undefined,
    label: string,
    placeholderText: string,
}

export const LabeledInput: React.FC<LabeledInputProperties> = (props) => {
    return (
        <div className="form-group">
            <label
                className="form-label"
                htmlFor={props.htmlId}>
                    {props.label}
            </label>
            <Field
                class="form-control"
                id={props.htmlId}
                name={props.htmlId}
                type={props.inputType}
                placeholder={props.placeholderText} />
        </div>
    );
};
