// import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons/HeaderIcon";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";

//header này dùng chung cho các layout
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchServices(debounced);

      setSearchResult(result.data);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(" ")) return;
    setSearchValue(searchValue);
  };
  return (
    <div>
      {/* the div on top to delete tippy warning */}
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PoperWrapper>
              <div className={cx("account-label")}>Account</div>
              {/* {searchResult.map((result) => (
                 <AccountItem key={result.id} data={result} />
              ))} */}
            </PoperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Bạn muốn mua gì ..."
            spellCheck={false}
            onChange={handleChange}
            onFocus={(e) => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon icon={faSpinner} className={cx("loading")} />
          )}
          {/* loadding */}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon className={cx("search-icon")} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}
export default Search;
