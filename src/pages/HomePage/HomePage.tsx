import React, { Suspense } from "react";

import useFormContext from "../../hooks/useFormContext";
import useFormVisibility from "../../hooks/useFormVisibility";

import HeaderHero from "./HeaderHero/HeaderHero";
const Solomon = React.lazy(() => import("./Solomon/Solomon"));
const Boosts = React.lazy(() => import("./Boosts/Boosts"));
const AboutUs = React.lazy(() => import("./AboutUs/AboutUs"));
const GetInTouch = React.lazy(() => import("../../components/Sections/GetInTouch/GetInTouch"));
const Footer = React.lazy(() => import("../../components/Sections/Footer/Footer"));
import Form from "../../components/Sections/Form/Form";

const HomePage: React.FC = () => {
  const { isFormDisplayed } = useFormContext();
  const { isFormVisible } = useFormVisibility();

  return (
    <section className="homePage">
      <HeaderHero />
      <Suspense fallback={<div>Loading...</div>}>
        <Solomon />
        <Boosts />
        <AboutUs />
        <GetInTouch />
        <Footer />
      </Suspense>
      {isFormVisible && <Form isFormDisplayed={isFormDisplayed} />}
    </section>
  );
};

export default HomePage;
