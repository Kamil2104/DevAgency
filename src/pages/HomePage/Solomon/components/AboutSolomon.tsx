import React from "react"

import Button from "../../../../components/SmallComponents/Button/Button"

import './styles/AboutSolomon.css'

const AboutSolomon: React.FC = () => {
    return (
        <div className="aboutSolomon">
            <h3> What is <span className="gradientedText"> Solomon? </span> </h3>
            <p className="description"> <span className="whiteText"> Solomon is an AI-powered </span> legal tool that streamlines risk analysis, document summaries and legal research, helping your firm work smarter. </p>
            <Button text="Learn more" onClick={() => console.log("Redirecting to Solomon")} />
        </div>
    )
}

export default AboutSolomon