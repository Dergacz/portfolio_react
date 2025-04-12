import React, { useState } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>{children}</div>
    </div>
  );
};
