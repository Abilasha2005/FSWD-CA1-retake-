import React from 'react'

const ServiceCard = ({ServiceTitle,ServiceDescription}) => {
  return (
    <div>
        <h2>{ServiceTitle}</h2>
        <p>{ServiceDescription}</p>
    </div>
  );
}

export default ServiceCard;
