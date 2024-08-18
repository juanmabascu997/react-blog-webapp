import React, { useState } from "react";
import "./TagClearButton.css";
import { GrClear } from "react-icons/gr";

function TagClearButton({ onSelectTag }) {

  const toggleFilterVisibility = () => {
    onSelectTag("");
  };

  return (
    <div className="tag-clear-container">
      <button
        className="tag-clear-float-button"
        onClick={toggleFilterVisibility}
      >
        <GrClear />
      </button>
    </div>
  );
}

export default TagClearButton;
