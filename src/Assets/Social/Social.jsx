import React from 'react';
import './Social.css';

export const Social = ({ children, url }) => {
  return (
    <a className="social" href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
