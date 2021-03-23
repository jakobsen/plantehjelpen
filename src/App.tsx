import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SearchCard from "./components/SearchCard";
import FooterPicture from "./components/FooterPicture";

function App() {
  return (
    <>
      <Header />
      <FooterPicture />
      <SearchCard />

      <GlobalStyles />
    </>
  );
}

export default App;
