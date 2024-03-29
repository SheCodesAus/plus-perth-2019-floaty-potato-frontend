import React from "react";
import BannerBoard from "../organisms/BannerBoard";
import FilterBoard from "../organisms/FilterBoard";
import MovieGrid from "../organisms/MovieGrid";
import "./Mainpage.css"
import MainTemplate from "../templates/MainTemplate";

const MainPage = ({ handleLogin, loggedIn, handleLogout, movies, providers, onSearch, filterMovie, ...props }) => {
  return (
    <div className="page-container">
      <MainTemplate handleLogin={handleLogin} loggedIn={loggedIn} handleLogout={handleLogout} >
        <BannerBoard onSearch={onSearch} />
        <FilterBoard providerList={providers} filterMovie={filterMovie} />
        <MovieGrid movies={movies} />
      </MainTemplate>

    </div>
  );
}
export default MainPage;

