import React, { useState, useEffect } from 'react';
import '../styles/Dropdown.css';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    console.log("test");
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.dropdown') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedOption ? selectedOption : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={() => handleSelectOption('Option 1')}>Option 1</li>
          <li onClick={() => handleSelectOption('Option 2')}>Option 2</li>
          <li onClick={() => handleSelectOption('Option 3')}>Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
