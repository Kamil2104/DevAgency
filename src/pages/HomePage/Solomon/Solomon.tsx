import React from "react";

import Video from "./components/Video";
import Title from "./components/Title";
import AboutSolomon from "./components/AboutSolomon";
import Functionalities from "./components/Functionalities";

import { FunctionalityCard } from "./interfaces/interfaces";

import "./Solomon.css";
import "./SolomonResponsiveness.css";

const Solomon: React.FC = () => {
  const functionalities: FunctionalityCard[] = [
    {
      title: "Conduct risk analysis",
      description: "Evaluate potential risks to guide decisions",
    },
    {
      title: "Summarize documents",
      description: "Condense texts into concise summaries",
    },
    {
      title: "Efficient pre-research",
      description: "Quickly gather relevant legal information",
    },
  ];

  return (
    <section className="solomonBackgroundContainer">
      <section className="solomon" >
        <Video />
        <Title />
        <div className="solomonColumns">
          <AboutSolomon />
          <Functionalities functionalities={functionalities} />
        </div>
      </section>
    </section>
  );
};

export default Solomon;
