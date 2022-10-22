import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Button, Input, Modal, TextField } from "@mui/material";
import { height } from "@mui/system";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import logoList from "~/assets/images/logo";
import styles from "./ModalSigin.module.scss";
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
  const [inputValue, setInputValue] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const refInput = useRef();
  const checkValue = (value) => {
    if (value.trim() === "") {
      setErrorInput("Thông tin bắt buộc");
      return false;
    } else return true;
  };
  const handleClickBtn = () => {
    const bool = checkValue(refInput.current.value);
    if (bool) console.log(refInput.current.value);
  };
  const handleBlur = () => {
    checkValue(refInput.current.value);
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
          <div className={cx("modal-body")}>
            <input
              ref={refInput}
              type="text"
              className={cx("modal-input", { error: errorInput === "" })}
              placeholder="Số điện thoại hoặc mã khách hàng..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleBlur}
            />
            <label
              style={{
                fontSize: "1.4rem",
                color: "red",
                display: errorInput ? "error" : "",
                marginBottom: "16px",
              }}
            >
              {errorInput}
            </label>
            <div className="modal-btn">
              <Button
                variant="contained"
                onClick={handleClickBtn}
                sx={{
                  width: "100%",
                  backgroundColor: "var(--primary)",
                  fontWeight: "600",
                  fontSize: "1.4rem",
                  marginBottom: "10px",
                  "&: hover": {
                    opacity: 0.9,
                    backgroundColor: "var(--primary)",
                  },
                }}
              >
                ĐĂNG NHẬP
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalSignin;
