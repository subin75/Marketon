import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo2 from "../Icon/Logo2";
import Search from "../Icon/Search";
import Shopping from "../Icon/Shopping";
import "../scss/header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleShoppingClick = () => {
    navigate("/Home/Basket");
  };

  const handleCancel = () => {
    setShowSearch(false);
    setSearchText("");
  };

  const handleClear = () => {
    setSearchText("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText.trim())}`);
      setShowSearch(false);
    }
  };

  return (
    <div className="header-body">
      {!showSearch ? (
        <>
          <div className="logo2">
            <Logo2 />
          </div>
          <div className="icon-wrapper">
            <div className="search" onClick={() => setShowSearch(true)}>
              <Search />
            </div>
            <div className="shopping" onClick={handleShoppingClick}>
              <Shopping />
            </div>
          </div>
        </>
      ) : (
        <form className="search-mode" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <span className="search-icon"><Search /></span>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button type="button" className="clear-btn" onClick={handleClear}>×</button>
            )}
          </div>
          <button type="button" className="cancel-btn2" onClick={handleCancel}>취소</button>
        </form>
      )}
    </div>
  );
};

export default Header;