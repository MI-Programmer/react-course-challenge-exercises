import { useState } from "react";

/* eslint-disable react/prop-types */

const styleButton = {
  border: "none",
  background: "transparent",
  marginLeft: "5px",
  fontSize: "15px",
  fontFamily: "inherit",
  cursor: "pointer",
};

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  collapseButtonText = "Show less",
  expandButtonText = "Show more",
  expanded = false,
  buttonColor = "blue",
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const displayText = isExpanded
    ? children
    : children
        .split(" ")
        // .map((word, i) => (i + 1 <= collapsedNumWords ? word : "")) This is my idea in my mind
        .slice(0, collapsedNumWords)
        .join(" ") + "...";

  return (
    <div className={className}>
      {displayText}
      <button
        style={{
          color: buttonColor,
          ...styleButton,
        }}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
