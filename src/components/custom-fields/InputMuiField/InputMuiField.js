import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Label } from "reactstrap";
import styles from "./InputMuiFied.module.scss";
import classNames from "classnames/bind";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
const cx = classNames.bind(styles);
InputMuiFied.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputMuiFied.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputMuiFied(props) {
  const {
    field,
    form,
    type,
    label,
    placeholder,
    disabled,
    autoFocus,
    defaultValue,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = Boolean(errors[name]); // có message lỗi và touched=true thì trả ra true
  // console.log('form: ', form);
  console.log(showError);
  // console.log('field: ', field);

  return (
    <FormGroup>
      {/* <input
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        // invalid={showError}
        className={cx("input", { invalid: showError })}
        autoFocus={autoFocus}
      /> */}

      <TextField
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        error={showError}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        InputLabelProps={{
          style: {
            fontSize: "1.4rem",
          },
          shrink: true,
          classes: cx("input_label"),
        }}
        fullWidth
        InputProps={{
          style: { fontSize: "1.4rem" },
        }}
      />

      <span className={cx("error")}>{errors[name]}</span>
    </FormGroup>
  );
}

export default InputMuiFied;
