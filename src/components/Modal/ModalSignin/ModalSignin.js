import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { useState } from "react";
import logoList from "~/assets/images/logo";
import FormPassWord from "./FormPassWord/FormPassWord";
import FormPhone from "./FormPhone/FormPhone";
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
  const [form, setForm] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
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

          <div className={cx("modal-body")}>
            {form === 1 && (
              <FormPhone setForm={setForm} setPhoneNumber={setPhoneNumber} />
            )}
            {form === 2 && (
              <FormPassWord setForm={setForm} phoneNumber={phoneNumber} />
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalSignin;
