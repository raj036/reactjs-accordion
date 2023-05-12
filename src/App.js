import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "Our Company Mission",
      answer:
        "We endeavor to place a Constico signature on all our projects by consistently meeting the requirements of the specifications and by delivering sustainable projects that are a superior value to the owner. We take pride in providing a quality product on time.",
      open: true,
    },
    {
      question: "Creative and Powerful",
      answer:
        "We take pride in providing a quality product on time. We endeavor to place a Constico  signature on all our projects by consistently meeting the requirements of the specifications and by delivering sustainable projects that are a superior value to the owner.",
      open: false,
    },
    {
      question: "Honest and Dependable",
      answer:
        "We endeavor to place a Constico signature on all our projects by consistently meeting the requirements of the specifications and by delivering sustainable projects that are a superior value to the owner",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
