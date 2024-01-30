// This component was created by Yaswanth Vasudevan (8830598)
import React ,{useState} from 'react';
import './FAQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const faqData = [
    {
        question: 'What are your service hours?',
        answer: 'Our service hours are from 8:00 AM to 6:00 PM, Monday through Friday.'
      },
      {
        question: 'Do you offer warranties for your cars?',
        answer: 'Yes, we offer warranties on all our certified pre-owned vehicles. Please see our warranty page for more details.'
      },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-card-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-card ${openIndex === index ? 'open' : ''}`}
          >
            <div
              className="faq-card-header"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="faq-question">{item.question}</h3>
              <div className="faq-icon">
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                />
              </div>
            </div>
            <div className={`faq-card-content ${openIndex === index ? 'open' : ''}`}>
              <p className="faq-answer">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;