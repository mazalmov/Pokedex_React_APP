
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  className: string; // Class name for styling
  label: string; // Button text
  action: 'navigate' | 'load'; // Determines the action type
  to?: string; // Path to navigate (for navigation buttons)
  onLoadMore?: () => void; // Function for "Load More" button
}

const DynamicButton: React.FC<ButtonProps> = ({ className, label, action, to, onLoadMore }) => {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleClick = () => {
    if (action === 'navigate' && to) {
      navigate(to); // Use navigate to redirect
    } else if (action === 'load' && onLoadMore) {
      onLoadMore(); // Call the load more function
    }
  };

  return (
    <nav className="navigation">
      <button className={`nav-button-${className}`} onClick={handleClick}>
        {label}
      </button>
    </nav>
  );
};

export default DynamicButton;
