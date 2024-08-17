import React, { useState } from "react";
import TagFilter from "./TagFilters";
import "./TagFilterButton.css";
import { FaFilter } from "react-icons/fa";

function TagFilterButton({ tags, selectedTag, onSelectTag }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="tag-filter-container">
      <button
        className="tag-filter-float-button"
        onClick={toggleFilterVisibility}
      >
        <FaFilter />
      </button>
      {isFilterVisible && (
        <div className="tag-filter-popup">
          <TagFilter
            tags={tags}
            selectedTag={selectedTag}
            onSelectTag={onSelectTag}
          />
        </div>
      )}
    </div>
  );
}

export default TagFilterButton;
