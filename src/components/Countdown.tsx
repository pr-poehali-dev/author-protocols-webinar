import { useEffect, useState } from 'react';

interface CountdownProps {
  target: Date;
  compact?: boolean;
}

const pad = (n: number) => String(n).padStart(2, '0');

const Countdown = ({ target, compact = false }: CountdownProps) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'дней', value: time.days },
    { label: 'часов', value: time.hours },
    { label: 'минут', value: time.minutes },
    { label: 'секунд', value: time.seconds },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 font-display tabular-nums">
        {units.map((u, i) => (
          <span key={u.label} className="flex items-center gap-1.5">
            <span className="text-gold font-bold text-lg leading-none">{pad(u.value)}</span>
            {i < units.length - 1 && <span className="text-gold/40">:</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map((u) => (
        <div
          key={u.label}
          className="relative flex flex-col items-center justify-center w-[72px] sm:w-[92px] py-4 rounded-xl bg-card/80 backdrop-blur border border-gold/20 gold-border-glow"
        >
          <span className="font-display text-3xl sm:text-5xl font-bold gold-text-gradient tabular-nums leading-none">
            {pad(u.value)}
          </span>
          <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
