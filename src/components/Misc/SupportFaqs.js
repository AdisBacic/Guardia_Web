import { Grow } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const faqs = [
  {
    question: 'Vad innebär  artikelhantering med GDPR?',
    answer: "En viktig aspekt av GDPR är 'rätten att bli glömd', vilket innebär att individens data bör raderas när den inte längre är nödvändig för det ursprungliga syftet. Guardia tillämpar detta genom att flagga användare som inte varit aktiva under en längre tid. Detta gör det möjligt för administratörer att enkelt identifiera och, om nödvändigt, radera användarprofiler för att upprätthålla GDPR-konformitet.",
  }, 
  {
    question: 'Kan flera person vara registrerade på samma plats?',
    answer: 'Ja! Guardia är en molnbaserad tjänst som är tillgänglig från alla enheter med internetuppkoppling. Detta gör det möjligt för flera användare att logga in och hantera samma artiklar samtidigt.',
  },
  {
    question: 'Vilka artiklar kan jag hantera?',
    answer: 'Guardia tillåter alla typer av artiklar att lagras och hanteras. Det kan vara allt från datorer till kaffemaskiner. Det är upp till dig! Guardia är det optimala verktyget för strukturerad artikelhantering.',
  },   
  {
    question: 'Hur börjar jag använda Guardia?',
    answer: 'Boka ett demo med oss! Vi kommer att gå igenom Guardia och hur det kan hjälpa dig och ditt företag. Om du är intresserad av att använda Guardia tveka inte att kontakta oss!',
    link: '/demo',
    linkText: 'Boka demo!',
  },  
  
];

const SupportFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggle = index => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleDemoClick = () => {
    navigate('/demo'); // Programmatically navigate to the "/demo" route
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
                {faq.link === '/demo' ? (
                  <p className="text-gray-500 dark:text-gray-400">
                    <button className="text-blue-600 dark:text-blue-500 hover:underline" onClick={handleDemoClick}>
                      {faq.linkText}
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    <a href={faq.link} className="text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      {faq.linkText}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </Grow>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SupportFaqs;