import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import AccountMenu from "~/components/AccountMenu/AccountMenu";
import styles from "./Account.module.scss";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);
function Account({ setOpenModel }) {
  // useEffect(() => {
  //   setActiveItem(selectedItem === 0 ? true : false);
  // }, []);
  const currenUser = useSelector((state) => state.user.current);

  const renderTippy = (attrs) => {
    return (
      <div className={cx("wrapper-tippy")} tabIndex="-1" {...attrs}>
        <AccountMenu />
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive={true}
        render={renderTippy}
        delay={[0, 200]}
        animation={false}
        placement="bottom-end"
        hideOnClick={false}
      >
        <button
          className={cx("btn_user")}
          onClick={() => setOpenModel(!currenUser.phoneNumber)}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
      </Tippy>
    </div>
  );
}

export default Account;
