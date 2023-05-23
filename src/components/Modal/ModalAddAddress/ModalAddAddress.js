import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, FormGroup, Grid, Modal } from "@mui/material";
import classNames from "classnames/bind";
import { FastField, Field, Form, Formik } from "formik";
import styles from "./ModalAddAddress.module.scss";
import InputMuiField from "~/components/custom-fields/InputMuiField/InputMuiField";
import SelectMuiField from "~/components/custom-fields/SelectMuiField/SelectMuiField";
import { axiosClient } from "~/utils/request";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
const styleModal = {
  backgroundColor: "#fff",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: "432px",
  borderRadius: "10px",
  padding: "20px",
};

const initialValues = {
  address: "",
};
const validationShema = Yup.object().shape({
  address: Yup.string()
    .min(2, "Họ tên tối thiểu 2 ký tự")
    .required("Thông tin bắt buộc "),
});
const cx = classNames.bind(styles);
function ModalAddAddress({ openModel, setOpenModel }) {
  const currentUser = useSelector((state) => state.user.current);

  const handleSubmit = async (value) => {
    // fetch(
    //   `https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/admin/customers/${currentUser.information.id}/add-address`,
    //   {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, *cors, same-origin
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer " + currentUser.token,
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //       "X-CSRF-TOKEN": "{{csrf_token()}}",
    //     },
    //     body: JSON.stringify({
    //       address: value,
    //     }), // body data type must match "Content-Type" header
    //   }
    // )
    //   .then((data) => data.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    try {
      const data = await axios.post(
        `https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/admin/customers/${currentUser.information.id}/add-address`,
        {
          address: value,
        },
        {
          headers: {
            Authorization: "Bearer " + currentUser.token,
            Accept: "application/json",
            "X-CSRF-TOKEN": "{{csrf_token()}}",
          },
        }
      );
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      open={openModel}
      onClose={() => setOpenModel(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModal} alignItems="center">
        <button
          className={cx("modal-close")}
          onClick={() => setOpenModel(false)}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className={cx("modal-content")}>
          <div className={cx("modal-title")}>Thêm địa chỉ giao hàng</div>
          <div className={cx("modal-content")}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationShema}
              onSubmit={handleSubmit}
              validateOnBlur={true}
            >
              {(props) => {
                //do somthing here

                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <FormGroup>
                          <FastField
                            name="address"
                            component={InputMuiField}
                            label="Địa chỉ"
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>
                    <button type="submit" className={cx("btn-submit")}>
                      Lưu
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <div className={cx("modal-body")}></div>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalAddAddress;
