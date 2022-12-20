import { FormGroup } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "~/components/custom-fields/InputField";
import styles from "./FormPhone.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true

const cx = classNames.bind(styles);
function FormPhone({ setForm, setPhoneNumber }) {
  const navigate = useNavigate()
  const [otp, setOTP] = useState()
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
    axios.post('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/login-customer', { phone_number: values.sdt }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/login-customer'
      }
    }).then(data => {
      setOTP(data)
      console.log(data)
    })
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
