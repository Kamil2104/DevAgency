import React from 'react'

import './styles/Button.css'

const Button: React.FC<{ text: string, onClick: () => void }> = React.memo(({ text, onClick }) => {
  return (
    <button className='originalBtn' onClick={onClick}>
      {text}
      <svg width="24" height="24" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 12.1758L19 12.1758M19 12.1758L13 6.17578M19 12.1758L13 18.1758"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
});

export default Button