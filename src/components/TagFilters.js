import React from "react";

function TagFilter({ tags, selectedTag, onSelectTag }) {
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    onSelectTag(selectedOptions);
  };

  return (
    <div className="tag-filter styled-select">
      <h3>Filter by Tag</h3>
      <select
        value={selectedTag}
        onChange={handleSelectChange}
        className="tag-select"
      >
        {tags.map((tag) => (
          <option key={tag.slug} value={tag.slug}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagFilter;
