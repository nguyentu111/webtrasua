import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SearchIcon } from "~/assets/Icons";
import { useDebounce } from "~/hooks";
import styles from "./Order.module.scss";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const cx = classNames.bind(styles);
function Order() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const firstBtn = useRef();
  const debounced = useDebounce(searchValue, 500);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(true);
  const [choosingTab, setChoosingTab] = useState({
    id: 1,
    offsetLeft: 0,
    offsetWidth: 0,
  });

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchAPI = async () => {
      setLoading(true);
      setSearchResult([]);
      const result = await searchServices(debounced);

      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);
  //////
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(" ")) return;
    setSearchValue(searchValue);
  };
  const handleChangeTab = (e, id) => {
    const ref = getComputedStyle(e.target);
    setChoosingTab({
      id: id,
      offsetLeft: e.target.offsetLeft,
      offsetWidth:
        ref.paddingRight === "0px"
          ? e.target.offsetWidth + 20
          : e.target.offsetWidth,
    });
  };
  useLayoutEffect(() => {
    const ref = firstBtn.current;
    const styleRef = getComputedStyle(ref);
    if (choosingTab.id === 1) {
      setChoosingTab({
        id: 1,
        offsetLeft: ref.offsetLeft,
        offsetWidth:
          styleRef.paddingRight === "0px"
            ? ref.offsetWidth + 20
            : ref.offsetWidth,
      });
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span className={cx("title")}>Lịch sử đơn hàng</span>
        <div className={cx("search")}>
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon
              width="1.4rem"
              height="1.4rem"
              color={"var(--primary)"}
              className={cx("search-icon")}
            />
          </button>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Tìm kiếm theo mã đơn hàng ..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {}}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          )}
        </div>
      </div>
      <div className={cx("menu")}>
        <button
          ref={firstBtn}
          data-id={1}
          onClick={(e) => handleChangeTab(e, 1)}
        >
          <div className={cx("menu_item", { active: choosingTab.id === 1 })}>
            CHỜ THANH TOÁN
          </div>
        </button>
        <button data-id={2} onClick={(e) => handleChangeTab(e, 2)}>
          <div className={cx("menu_item", { active: choosingTab.id === 2 })}>
            ĐƠN HÀNG MỚI
          </div>
        </button>
        <button data-id={3} onClick={(e) => handleChangeTab(e, 3)}>
          <div className={cx("menu_item", { active: choosingTab.id === 3 })}>
            ĐANG XỬ LÍ
          </div>
        </button>
        <button data-id={4} onClick={(e) => handleChangeTab(e, 4)}>
          <div className={cx("menu_item", { active: choosingTab.id === 4 })}>
            ĐANG GIAO
          </div>
        </button>
        <button data-id={5} onClick={(e) => handleChangeTab(e, 5)}>
          <div className={cx("menu_item", { active: choosingTab.id === 5 })}>
            HOÀN THÀNH
          </div>
        </button>
        <button data-id={6} onClick={(e) => handleChangeTab(e, 6)}>
          <div className={cx("menu_item", { active: choosingTab.id === 6 })}>
            HỦY
          </div>
        </button>
        <div
          className={cx("slider")}
          style={{
            left: choosingTab.offsetLeft,
            width: choosingTab.offsetWidth,
          }}
        ></div>
      </div>
      <div className={cx("transaction")}>
        <div className={cx("no_product")}>Không có đơn hàng nào</div>
      </div>
    </div>
  );
}

export default Order;
