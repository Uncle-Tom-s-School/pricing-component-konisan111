import React from 'react';

interface PriceCardProps {
  name: string;
  price: number;
  features: string[];
  highlighted: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ name, price, features, highlighted }) => {
  const displayPrice = price === 0 ? "Free" : `$${price}`;

  return (
    <div className={`price-card ${highlighted ? 'highlighted' : ''}`}>
      <h3>{name}</h3>
      <h1>{displayPrice}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>Try for Free</button>
    </div>
  );
};

export default PriceCard;