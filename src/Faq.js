import React, { useState } from "react";
import faqData from "../data/faqData";
import Navbar from "./Navbar";
import Explore from "./Explore";
import ContactSection from "./ContactSection";
import "../styles/faq.css";
import faqImage from "../images/faqImage.jpg";
const Faq = () => {
  const [background, setBackground] = useState(false);
  const [isHamburger, setHamburger] = useState(false);
  const [active, setActive] = useState(false);
  const handleBack = () => {
    setBackground(!background);
  };
  const handleBackground = () => {
    setHamburger(false);
  };

  return (
    <>
      <div style={{ position: "fixed", top: "0", width: "100%", zIndex: "6" }}>
        <Navbar />
        <Explore
          handleBack={handleBack}
          setHamburger={setHamburger}
          isHamburger={isHamburger}
        />
      </div>
      <div
        className="back"
        style={{ visibility: background ? "visible" : "hidden" }}
        onClick={() => {
          setBackground(!background);
          handleBackground();
        }}
      ></div>
      <div className="faq_top">
        {/* <img src={faqImage} className="faq_image" /> */}
        <p className="faq_top_txt">Frequently Asked Questions</p>
      </div>
      <div>
        <div className="faq_body">
          <div className="faq_questions">
            {faqData.map((item) => {
              return (
                <a href={`#faq${item.id}`}>
                  <div
                    // style={{ paddingLeft: "2%", paddingRight: "2%" }}
                    key={item.id}
                  >
                    <p className="questions_text">{item.question}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="faq_answers">
            {faqData.map((item) => {
              return (
                <div key={item.id} className="faq_answers_body">
                  <h1 id={`faq${item.id + 1}`} className="faq_questions_text">
                    {item.question}
                  </h1>
                  <p className="faq_answers_text">{item.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};
export default Faq;
