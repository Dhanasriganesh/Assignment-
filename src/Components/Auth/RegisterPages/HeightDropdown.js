// HeightDropdown.js
import React from 'react';

const HeightDropdown = ({ type, onChange, value, children }) => {
  // Render a regular select element if type is not provided or not recognized
  if (type !== 'text') {
    return (
      <select onChange={onChange} value={value}>
        {children}
      </select>
    );
  }

  // Render a text input element as a fallback
  return (
    <input type="text" onChange={onChange} value={value} readOnly />
  );
};

export default HeightDropdown;
