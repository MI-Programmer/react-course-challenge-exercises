import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ faqs }) => {
  const [isOpen, setIsOpen] = useState(Array(faqs.length).fill(false));

  const handleOpen = (idx) =>
    setIsOpen((open) =>
      open.map((value, index) => (idx === index ? !value : value))
    );

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          faq={faq}
          index={index}
          isOpen={isOpen}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
