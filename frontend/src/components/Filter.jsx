import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Filter({
  section,
  sectionidx,
  activefilters,
  setactivefilters,
  activefilteroptions,
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAllOptions, setShowAllOptions] = useState(false); // for "Show more"

  const handleCheckboxChange = (e) => {
    const rawValue = e.target.value;
    const isChecked = e.target.checked;
    const value = section.id === "Year" ? Number(rawValue) : rawValue;

    const updatedFilters = activefilters.map((filter) => {
      if (filter.type === section.id) {
        const newOptions = isChecked
          ? [...filter.options, value]
          : filter.options.filter((opt) => opt !== value);
        return { ...filter, options: newOptions };
      }
      return filter;
    });

    setactivefilters(updatedFilters);
  };

  // Determine which options to show
  const displayOptions =
    section.id === "Company" && !showAllOptions
      ? section.options.slice(0, 3)
      : section.options;

  return (
    <div className="mb-4 border-b pb-2">
      {/* Filter Title and Toggle */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-semibold text-sm text-gray-700 uppercase">{section.name}</h2>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Filter Options */}
      {isExpanded && (
        <div className="mt-2">
          {displayOptions.map((option, idx) => (
            <div key={idx} className="mb-1">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`${section.id}-${idx}`}
                  name={`${section.id}[]`}
                  value={option.value}
                  checked={activefilteroptions.includes(
                    section.id === "Year" ? Number(option.value) : option.value
                  )}
                  onChange={handleCheckboxChange}
                  className="accent-blue-600"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            </div>
          ))}

          {/* Show more only for Company */}
          {section.id === "Company" && section.options.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllOptions(!showAllOptions)}
              className="text-blue-600 text-xs mt-1 hover:underline"
            >
              {showAllOptions ? "Show less" : `+${section.options.length - 3} more`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
