import React from 'react';

export const Card = ({description}) => {
  return <div className="card">
    <div className="container">
      <p>{description}</p>
    </div>
  </div>;
}