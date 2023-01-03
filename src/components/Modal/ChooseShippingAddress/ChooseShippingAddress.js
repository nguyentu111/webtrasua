import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import styles from "./BookBavarage.module.scss";

const styleModal = {
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};
const cx = classNames.bind(styles);

function ChooseShippingAddress({
  openModel,
  setOpenModel,
  handleConfirm,
  setAddressChoosed,
}) {
  const currentUser = useSelector((state) => state.user.current);
  return (
    <div onClick={(e) => e.preventDefault()}>
      <Modal
        open={openModel}
        onClose={() => setOpenModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={styleModal} alignItems="center">
          <div className={cx("wapper")}>
            <button
              className={cx("modal-close")}
              onClick={() => setOpenModel(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div style={{ display: "flex", gap: "20px" }}>
              <h2 style={{ flexWrap: "nowrap", whiteSpace: "nowrap" }}>
                Chọn địa chỉ
              </h2>
              <select onChange={(e) => setAddressChoosed(e.target.value)}>
                {currentUser.information.addresses.map((ad) => (
                  <option value={ad.id}>{ad.address}</option>
                ))}
              </select>
            </div>
            <button className={cx("add-to-cart")} onClick={handleConfirm}>
              <FontAwesomeIcon icon={faCartPlus} />
              <span style={{ marginLeft: "10px" }}>Giao hàng</span>
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ChooseShippingAddress;
