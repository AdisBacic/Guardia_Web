import { Grow } from '@mui/material';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Hur långt vingspan har en kungsörn?',
    answer: '4 meter men 2 om den flyger motsols 😶‍🌫️',
    link: '/',
    linkText: 'starta!',
  },  
  {
    question: 'Hur långt vingspan har en kungsörn?',
    answer: '4 meter men 2 om den flyger motsols 😶‍🌫️',
    link: '/',
    linkText: 'starta!',
  },  
];

const SupportFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    if (openIndex === index) {
      setOpenIndex(null); // close accordion if clicking the open one
    } else {
      setOpenIndex(index); // else open the clicked one and close others
    }
  };

  return (
    <div id="accordion-flush" data-accordion="collapse">
      {faqs.map((faq, index) => (
        <React.Fragment key={index}>
          <h2 id={`accordion-flush-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-flush-body-${index}`}
            >
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">{faq.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>

          {/* Wrap the accordion body with the Grow component */}
          <Grow in={openIndex === index} style={{ transformOrigin: '0 0 0' }} timeout={500}>
            <div
              id={`accordion-flush-body-${index}`}
              className={`${openIndex === index ? 'block' : 'hidden'}`}
              aria-labelledby={`accordion-flush-heading-${index}`}
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                <p className="text-gray-500 dark:text-gray-400">Tryck på denna länk för att <a href={faq.link} className="text-blue-600 dark:text-blue-500 hover:underline">{faq.linkText}</a></p>
              </div>
            </div>
          </Grow>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SupportFaqs;