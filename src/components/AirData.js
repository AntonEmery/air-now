import React from 'react';

  function AirData({O3, PM}) {
    return (
      <div>
        <p>O3: {O3}</p>
        <p>PM2.5: {PM}</p>
      </div>
    );
  }

export default AirData;