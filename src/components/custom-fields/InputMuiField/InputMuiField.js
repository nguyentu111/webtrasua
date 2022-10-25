import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Label } from "reactstrap";
import styles from "./InputMuiFied.module.scss";
import classNames from "classnames/bind";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
import { ErrorMessage } from "formik";
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
  const { field, form, type, label, placeholder, disabled, autoFocus } = props;
  const { name } = field;

  const { errors, touched, setTouched, setFieldError } = form;
  const showError = errors[name] && touched[name]; // có message lỗi và touched=true thì trả ra true

  return (
    <FormGroup>
      <TextField
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        // defaultValue={defaultValue}
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: showError ? "1px solid red" : "1px solid #333",
          },
          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: "var(--primary)",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: showError
              ? "1px solid red"
              : "2px solid var(--primary) !important",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "1.4rem",
            color: showError && "red",
          },
          shrink: true,
        }}
        fullWidth
        InputProps={{
          style: {
            fontSize: "1.4rem",
            borderColor: showError ? "red" : "#333",
          },
          ...field,
        }}
      />
      {showError && <span className={cx("error")}>{errors[name]}</span>}
    </FormGroup>
  );
}

export default InputMuiFied;
