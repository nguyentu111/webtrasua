import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./QuantityBtns.module.scss";
const cx = classNames.bind(styles);
function QuantityBtns({ value, setValue, canZero }) {
  const handleDecrease = () => {
    if (value > 1) setValue((prev) => prev - 1);
    else if (canZero && value === 1) setValue(0);
  };
  const handleIncrease = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <div className={cx("wrapper")}>
      <button
        onClick={handleDecrease}
        className={cx("btn", { active: value > 0 })}
      >
        <FontAwesomeIcon icon={faSubtract} />
      </button>
      <span className={cx("value")}>{value}</span>
      <button
        onClick={handleIncrease}
        className={cx("btn", { active: value > 0 })}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default QuantityBtns;
