import { useEffect, useState } from 'react';
import PriceCard from './components/PriceCard';
import './index.css';

interface Plan {
  id: number;
  name: string;
  pricePerMonth: number;
  features: string[];
  highlighted: boolean;
}

function App() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      {plans.map((plan) => (
        <PriceCard
          key={plan.id}
          name={plan.name}
          price={plan.pricePerMonth}
          features={plan.features}
          highlighted={plan.highlighted}
        />
      ))}
    </div>
  );
}

export default App;