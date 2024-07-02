import React from "react";
import Header from "./components/Header";
import MainSection from "./components/Hero";
import CardsSection from "./components/Cards";
import Pyramid from "./components/Pyramid";
import InformationSection from "./components/Information";
import ArticleSlider from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <CardsSection />
      <Pyramid />
      <InformationSection />
      <ArticleSlider />
      <Footer />
    </div>
  );
}

export default App;
