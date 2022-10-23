import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
  const { field, options, form, label, placeholder, disabled } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  console.log(form);
  const showError = errors[name] && touched[name];
  // console.log(errors[name]);
  const selectedValue = options.find((option) => option.value === value);
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: "",
      },
    };
    field.onChange(changeEvent);
  };
  const handleOnBlur = (e) => {
    const selectedOption = e.target.value;
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onBlur(changeEvent);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field} // field có 4 thuộc tính là name , value, onChange,onBlur
        value={selectedValue}
        onChange={handleSelectedOptionChange} //override onchange trong ..field
        // onBlur={handleOnBlur}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />

      {/* FormFeedback cần thằng đứng trước nó (ở đây là select) có class is-invalid, thằng input có sẵn 
      thuộc tính invalid sẽ tự thêm class is-invalid khi lỗi, còn select thì ko nên phải tự thêm, css ô select cũng phải tự thêm */}
    </FormGroup>
  );
}

export default SelectField;
