import classNames from "classnames/bind";
import styles from "./AccountCustomer.module.scss";
import React, { useState } from "react";
import images from "~/assets/images/logo";
import { Avatar, FormGroup } from "@mui/material";
import { useSelector } from "react-redux";
import logoList from "~/assets/images/logo";
import { ArrowLeft } from "~/assets/Icons";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import { Form } from "react-router-dom";
import InputField from "~/components/custom-fields/InputField";
const cx = classNames.bind(styles);
const validationShema = Yup.object().shape({
  recieptNumber: Yup.string().required("Thông tin bắt buộc"),
});
const initialValues = {
  recieptNumber: "",
};
function AccountCustomer() {
  const currentUser = useSelector((state) => state.user.current);
  const [singUpping, setSingUpping] = useState(false);

  console.log(singUpping);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {singUpping && (
          <button
            className={cx("btn_back")}
            onClick={() => {
              setSingUpping(false);
            }}
          >
            <ArrowLeft width="1.8rem" height="1.8rem" color="var(--primary)" />
          </button>
        )}
        <div className={cx("modal-logo")}>
          <Avatar
            src={logoList.logo1}
            alt="logo"
            sx={{
              bgcolor: "#fff",
              border: "1px solid var(--border-color)",
              width: "84px",
              height: "84px",
            }}
          />
        </div>
        <div className={cx("cus_name")}>Nguyễn Anh Tú</div>
        <span className={cx("phone_number")}>{currentUser.phoneNumber}</span>

        <div className={cx("separater")}></div>
        {!singUpping && (
          <>
            <button
              className={cx("sign_up")}
              onClick={() => setSingUpping(true)}
            >
              Đăng kí thành viên
            </button>
            <span className={cx("footer")}>
              Hãy mua hàng với hóa đơn từ{" "}
              <strong style={{ color: "var(--primary)" }}>65.000 VNĐ</strong> để
              có thể đăng ký và hưởng quyền lợi của thành viên Phúc Long
            </span>
          </>
        )}
        {singUpping && (
          <div>
            <div>aaaaaaaaaaa</div>
            <Formik
              initialValues={initialValues}
              onSubmit={() => {}}
              validationSchema={validationShema}
            >
              {(props) => {
                console.log(singUpping);
                return (
                  <Form>
                    <FormGroup>
                      <FastField
                        name="recieptNumber"
                        component={InputField}
                        label="Họ & tên"
                        placeholder="Nhập vào số hóa đơn xét điều kiện"
                      />
                    </FormGroup>
                    <button type="submit">Kiểm tra</button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountCustomer;
