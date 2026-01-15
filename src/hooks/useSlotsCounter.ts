import { useState, useEffect } from 'react';

export const useSlotsCounter = (initialSlots: number = 81) => {
  const [slots, setSlots] = useState<number>(() => {
    const stored = sessionStorage.getItem('vagasUpsell');
    return stored ? parseInt(stored) : initialSlots;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slots > 50 && Math.random() > 0.65) {
        setSlots((prev) => {
          const newValue = prev - 1;
          sessionStorage.setItem('vagasUpsell', String(newValue));
          return newValue;
        });
      }
    }, Math.random() * 60000 + 45000);

    return () => clearInterval(interval);
  }, [slots]);

  return slots;
};
