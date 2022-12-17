import { FormGroup, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Alert, AlertTitle } from "@mui/material"
import classNames from "classnames/bind";
import { FastField, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import styles from "./Account.module.scss";
import React, { useState } from "react";
import DatePickerField from "~/components/custom-fields/DatePickerField/DatePickerField";
const cx = classNames.bind(styles);
const options = [
  { id: "1", value: "nam" },
  { id: "2", value: "nu" },
];
const validationShema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Họ tên tối thiểu 2 ký tự")
    .matches(/^[A-Za-z ]*$/, "Họ tên chỉ bao gồm ký tự chữ và dấu cách")
    .required("Thông tin bắt buộc "),
  sex: Yup.string().required("Bạn chưa chọn giới tính "),
  "identity-card-number": Yup.string().matches(
    /^[0-9]+$/,
    "Số CMND/CCCD chỉ bao gồm số"
  ),
  birthday: Yup.string().required("Thông tin bắt buộc"),
  email: Yup.string()
    .email("Email không đúng định dạng")
    .required("Thông tin bắt buộc"),
  province: Yup.string().required("Thông tin bắt buộc"),
  district: Yup.string().required("Thông tin bắt buộc"),
  commune: Yup.string().required("Thông tin bắt buộc"),
  address: Yup.string().required("Thông tin bắt buộc"),
});
function Account() {
  const currentUser1 = useSelector((state) => console.log(state));
  const currentUser = useSelector((state) => state.user.current);
  const initialValues = {
    fullname: "tu",
    phoneNumber: currentUser.phoneNumber,
    sex: "",
    "identity-card-number": "",
    birthday: "",
    email: "",
    province: "",
    district: "",
    commune: "",
    address: "",
  };
  const handleSubmit = (value) => {
    // console.log(value);

    var data = JSON.stringify({
      "name": "Lê Hoàng Y",
      "gender": 0,
      "phone_number": "0334566733",
      "dob": "1998-1-1",
      "active": 1
    });

    var config = {
      method: 'post',
      url: '127.0.0.1:8000/api/admin/customers',
      headers: {
        'Authorization': 'Bearer 8|sF6f2qPvFj60cRhja96VIpcBmqjv0QOWKurNJW0J',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setAlert(true)
        setTimeout(() => setAlert(false), 2000)
      })
      .catch(function (error) {
        console.log(error);
        setAlert(true)
        setTimeout(() => setAlert(false), 2000)
      });
  };

  const [alert, setAlert] = useState(false)
  return (
    <div className={cx("wrapper")}>
      <div className={alert ? cx("alert-shown") : cx("alert-hidden")}>
        <Alert severity="success">
          <AlertTitle>Thành công</AlertTitle>
          Thêm thông tin thành công
        </Alert>
      </div>
      <div className={cx("title")}>Thông tin cá nhân</div>
      <div className={cx("body")}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
        >
          {(props) => {
            //do somthing here
            // console.log(props);
            return (
              <>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="fullname"
                          component={InputMuiField}
                          label="Họ & tên"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="phoneNumber"
                          component={InputMuiField}
                          label="Số điện thoại"
                          disabled
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="sex"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Giới tính"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="identity-card-number"
                          component={InputMuiField}
                          label="Số CMND/CCCD"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Field
                            name="birthday"
                            component={DatePickerField}
                            label="Ngày sinh"
                            inputFormat="DD/MM/YYYY"
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="email"
                          component={InputMuiField}
                          label="Email"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="province"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Tỉnh/Thành phố"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="district"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Quận/Huyện"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="commune"
                          component={SelectMuiField}
                          id="id"
                          value="value"
                          initId=""
                          label="Phường/Xã"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <Field
                          name="address"
                          component={InputMuiField}
                          label="Địa chỉ"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <button type="submit" className={cx("btn-submit")}>
                    Lưu thay đổi
                  </button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Account;
