import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { default as searchServices } from "~/services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "~/hooks";
import { Wrapper as PoperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon } from "~/assets/Icons";
import BavarageItem from "./BavarageItem/BavarageItem";
import BavarageItemLoading from "./BavarageItemLoading/BavarageItemLoading";
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
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchAPI = async () => {
      setLoading(true);
      setSearchResult([]);
      const result = await searchServices(debounced, signal);

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
          visible={(showResult && searchResult.length > 0) || loading}
          interactive
          onClickOutside={handleHideResult}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <div className={cx("bavarage-label")}>Kết quả tìm kiếm:</div>
                <div className={cx("reasult_wrapp")}>
                  {searchResult.map((result) => (
                    <BavarageItem key={result.data.id} data={result.data} />
                  ))}
                  {loading && (
                    <div style={{ marginBottom: "20px" }}>
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                      <BavarageItemLoading />
                    </div>
                  )}
                </div>
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <button
              className={cx("search-btn")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <SearchIcon width="1rem" className={cx("search-icon")} />
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
          </div>

          {/* loadding */}
        </HeadlessTippy>
      </div>
    </div>
  );
}

export default Search;
