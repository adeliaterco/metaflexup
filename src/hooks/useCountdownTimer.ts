import { useState, useEffect } from 'react';

export const useCountdownTimer = (initialMinutes: number = 15) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const stored = localStorage.getItem('upsellTimer');
    const startTime = localStorage.getItem('upsellStartTime');
    
    if (stored && startTime) {
      const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
      const remaining = (initialMinutes * 60) - elapsed;
      return remaining > 0 ? remaining : 0;
    }
    
    localStorage.setItem('upsellTimer', String(initialMinutes * 60));
    localStorage.setItem('upsellStartTime', String(Date.now()));
    return initialMinutes * 60;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return { minutes, seconds, formatted, isExpired: timeLeft <= 0 };
};
