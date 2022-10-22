import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import logoList from "~/assets/images/logo";
import styles from "./ModalSigin.module.scss";
import Validator from "~/constant/validator/validator";
import "./ModalSignin.css";
const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "328px",
  borderRadius: "10px",
};
const cx = classNames.bind(styles);

function ModalSignin({ openModel, setOpenModel }) {
  const handleSubmit = () => {
    Validator({
      form: "#form-1",
      formGroupSelector: ".form-group",
      errorSelector: ".form-message",
      rules: [Validator.isRequired("#singin-input", "Thông tin bắt buộc")],
      onSubmit: function (data) {
        console.log(data);
      },
    });
  };

  return (
    <Modal
      open={openModel}
      onClose={() => setOpenModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModal} alignItems="center">
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
        <button
          className={cx("modal-close")}
          onClick={() => setOpenModel(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className={cx("modal-content")}>
          <div className={cx("modal-title")}>Phúc long xin chào</div>
          <div className={cx("modal-sub-title")}>Đăng nhập</div>
          <form action="" method="POST" className={cx("form")} id="form-1">
            <div className={cx("modal-body")}>
              {/* <input
                type="text"
                className={cx("modal-input")}
                placeholder="Số điện thoại hoặc mã khách hàng..."
              /> */}
              <div className="form-group">
                <input
                  id="singin-input"
                  name="singin-input"
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className={"form-control"}
                  autoComplete="off"
                />
                <span className={"form-message"}></span>
              </div>
              <button className={cx("form-submit")} onClick={handleSubmit}>
                Đăng nhập
              </button>

              {/* <div className="modal-btn">
                <Button
                  variant="contained"
                  onClick={handleClickBtn}
                  sx={{
                    
                  }}
                >
                  ĐĂNG NHẬP
                </Button>
              </div> */}
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalSignin;
