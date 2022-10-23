import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { listItems as accountMenu } from "~/constant/accountMenu";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import routes from "~/config/routes";
import { ArrowRight } from "~/components/Icons";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import InputField from "~/components/custom-fields/InputField";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import { useSelector } from "react-redux";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import SelectField from "~/components/custom-fields/SelectField";
const cx = classNames.bind(styles);

const validationShema = Yup.object().shape({
  fullname: Yup.string().required("Thông tin bắt buộc"),
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
          {(formikProps) => {
            //do somthing here
            // console.log(values, errors, touched);
            return (
              <>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="fullname"
                          component={InputField}
                          label="Họ & tên"
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="phoneNumber"
                          component={InputField}
                          defaultValue={currentUser.phoneNumber}
                          label="Số điện thoại"
                          disabled
                        />
                      </FormGroup>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="sex"
                          component={SelectField}
                          label="Giới tính"
                          options={[
                            { value: "1", label: "nam" },
                            { value: "2", label: "nu" },
                          ]}
                        />
                      </FormGroup>
                    </Grid> */}
                    <Grid item xs={12} md={6}>
                      <FormGroup>
                        <FastField
                          name="sex"
                          component={SelectMuiField}
                          getOptionLabel="label"
                          label="Giới tính"
                          options={[
                            { value: "1", label: "nam" },
                            { value: "2", label: "nu" },
                          ]}
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
