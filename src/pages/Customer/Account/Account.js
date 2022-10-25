import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { listItems as accountMenu } from "~/constant/accountMenu";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import routes from "~/config/routes";
import { ArrowRight } from "~/components/Icons";
import { FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import InputField from "~/components/custom-fields/InputField";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import { useSelector } from "react-redux";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import SelectField from "~/components/custom-fields/SelectField";
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
});
function Account() {
  const currentUser = useSelector((state) => state.user.current);

  const initialValues = {
    fullname: "tu",
    phoneNumber: currentUser.phoneNumber,
    sex: "",
  };
  const handleSubmit = () => {};
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Thông tin cá nhân</div>
      <div className={cx("body")}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationShema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
        >
          {({ setFieldValue }) => {
            //do somthing here

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
                          getOptionLabel="label"
                          id="id"
                          value="value"
                          initId=""
                          label="Giới tính"
                          options={options}
                          nooptionstext="Không tìm thấy bản ghi nào!"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
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
