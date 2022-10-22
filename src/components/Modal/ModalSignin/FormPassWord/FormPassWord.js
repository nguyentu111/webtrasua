import { FormGroup } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "~/components/custom-fields/InputField";
import styles from "./FormPassWord.module.scss";
const cx = classNames.bind(styles);

function FormPassWord({ setForm, phoneNumber }) {
  console.log({ phoneNumber });
  const validationShema = Yup.object().shape({
    password: Yup.string().required("Thông tin bắt buộc"),
  });
  const handleSubmit = (values) => {
    //call api here
    console.log(phoneNumber, values.password);

    return;
  };
  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={validationShema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        //do somthing here
        // console.log(values, errors, touched);
        return (
          <Form>
            <div className={cx("modal-sub-title")}>
              Đăng nhập cho số điện thoại
            </div>
            <div className={cx("sdt")}>{phoneNumber}</div>
            <FastField // thằng này ko render lại khi cả components re-render
              name="password"
              component={InputField}
              placeholder="Nhập mật khẩu*"
              type="password"
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

export default FormPassWord;
