import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "~/hooks";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon } from "~/components/Icons";
import BavarageItem from "./BavarageItem/BavarageItem";
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

      setSearchResult(result);
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
      <div>
        {/* the div on top to delete tippy warning */}
        <HeadlessTippy
          visible={showResult && searchResult.length > 0}
          interactive
          onClickOutside={handleHideResult}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <div className={cx("bavarage-label")}>Kết quả tìm kiếm:</div>
                {searchResult.map((result) => (
                  <BavarageItem key={result.data.id} data={result.data} />
                ))}
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <button
              className={cx("search-btn")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SearchIcon width="1.6rem" className={cx("search-icon")} />
            </button>
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
          </div>
        </HeadlessTippy>
      </div>
    </div>
  );
}

export default Search;
