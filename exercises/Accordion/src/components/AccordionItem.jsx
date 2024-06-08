function AccordionItem({ faq, index, isOpen, handleOpen }) {
  return (
    <div
      className={`item ${isOpen[index] ? "open" : ""}`}
      onClick={() => handleOpen(index)}
    >
      <p className="number">0{index + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{isOpen[index] ? "-" : "+"}</p>

      {isOpen[index] ? <div className="content-box">{faq.text}</div> : null}
    </div>
  );
}

export default AccordionItem;
