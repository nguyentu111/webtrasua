import { FormGroup } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "~/components/custom-fields/InputField";
import styles from "./FormPhone.module.scss";
const cx = classNames.bind(styles);

function FormPhone({ setForm, setPhoneNumber }) {
  const validationShema = Yup.object().shape({
    sdt: Yup.string()
      .required("Thông tin bắt buộc")
      .test(
        "len",
        "Số điện thoại không đúng. Vui lòng nhập lại",
        (val) => !isNaN(val) && val.length === 10
      ),
  });
  const handleSubmit = (values) => {
    setForm(2);
    setPhoneNumber(values.sdt);
  };
  return (
    <Formik
      initialValues={{ sdt: "" }}
      validationSchema={validationShema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        //do somthing here
        // console.log(values, errors, touched);
        return (
          <Form>
            <div className={cx("modal-title")}>Phúc long xin chào</div>
            <div className={cx("modal-sub-title")}>Đăng nhập</div>
            <FastField // thằng này ko render lại khi cả components re-render
              name="sdt"
              component={InputField}
              placeholder="Nhập số điện thoại*"
            />
            <FormGroup>
              <button type="submit" className={cx("btn-submit")}>
                ĐĂNG NHẬP
              </button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormPhone;
