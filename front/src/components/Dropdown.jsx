import { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import '../App.css';

export default function Dropdown({ id = "default-dropdown", placeholder, options, onClickDropdown }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState('');
  const dropdownRef = useRef(null);

  const onClickOption = (e) => {
    onClickDropdown(e.target.value);
    setSelectedDropdown(e.target.innerText);
    setIsDropdown(false);
  };

  const onClickSelect = () => {
    setIsDropdown(!isDropdown);
  };

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" id={id} ref={dropdownRef}>
      <button className="select-button" type="button" onClick={onClickSelect}>
        <div className={`select ${selectedDropdown !== '' ? 'selected' : ''}`}>
          {selectedDropdown === '' ? placeholder : selectedDropdown}
        </div>
      </button>
      {isDropdown && (
        <div className="dropdown">
          {options.map((option) => (
            <button
              className="option"
              value={option.value}
              key={option.value}
              onClick={onClickOption}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}