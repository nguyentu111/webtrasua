import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormGroup, Label } from "reactstrap";
import styles from "./SelectMuiField.module.scss";
import classNames from "classnames/bind";
import { Autocomplete, TextField } from "@mui/material";
import { fontSize } from "@mui/system";
import InputMuiFied from "../InputMuiField/InputMuiField";
const cx = classNames.bind(styles);
SelectMuiField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

SelectMuiField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function SelectMuiField(props) {
  const {
    field,
    form,
    label,
    disabled,
    options,
    readOnly,
    value,
    getOptionLabel,
  } = props;
  const { name } = field;
  const { errors, touched } = form;

  const showError = Boolean(errors[name]); // có message lỗi và touched=true thì trả ra true

  const [error, setError] = useState("");
  return (
    <FormGroup>
      <Autocomplete
        disablePortal
        disabled={disabled}
        readOnly={readOnly}
        options={options}
        fullWidth
        onChange={(e, newValue) => {}}
        onClose={(e) => {}}
        sx={{ width: " 100%" }}
        value={value}
        getOptionLabel={(option) => option[getOptionLabel]}
        className={cx("autocomplete")}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            sx={{ fontSize: "1.4rem" }}
            InputProps={{
              style: {
                "& *": {
                  fontSize: "100% !important",
                },
              },
            }}
            InputLabelProps={{
              style: {
                // fontSize: "1.4rem",
              },
              shrink: true,
            }}
            onBlur={(e) => {}}
            error={!!error}
            // InputProps={{
            //   style: { fontSize: "1.4rem" },
            // }}
          />
          // <InputMuiFied {...params} label={label} field={field} form={form} />
        )}
      />

      <span className={cx("error")}>{error}</span>
    </FormGroup>
  );
}

export default SelectMuiField;
