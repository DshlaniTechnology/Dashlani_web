// Component/Loader.js
import React from 'react';

function Loader() {
  return (
    <div className="custom-loader">
      <svg className="custom-spinner" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
}

export default Loader;
