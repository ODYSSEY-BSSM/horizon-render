import { useEffect, useMemo, useState } from 'react';

export const useSlotMachine = () => {
  const [digits, setDigits] = useState(['4', '0', '4']);
  const [spinningStates, setSpinningStates] = useState([false, false, false]);

  const handleDigitClick = (index: number) => {
    if (spinningStates[index]) {
      setSpinningStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    } else {
      setSpinningStates((prev) => prev.map(() => true));
    }
  };

  useEffect(() => {
    const intervals: Array<ReturnType<typeof setInterval> | null> = spinningStates.map(
      (isSpinning, index) => {
        if (isSpinning) {
          return setInterval(() => {
            setDigits((prev) => {
              const newDigits = [...prev];
              const currentDigit = Number.parseInt(newDigits[index], 10);
              let nextDigit: number;

              if (index === 0 || index === 2) {
                nextDigit = currentDigit >= 9 ? 1 : currentDigit + 1;
              } else {
                nextDigit = currentDigit <= 1 ? 9 : currentDigit - 1;
              }
              newDigits[index] = nextDigit.toString();
              return newDigits;
            });
          }, 100);
        }
        return null;
      },
    );

    return () => {
      for (const interval of intervals) {
        if (interval) {
          clearInterval(interval);
        }
      }
    };
  }, [spinningStates]);

  const isJackpot = useMemo(
    () => !spinningStates.some(Boolean) && digits.every((d) => d === '7'),
    [digits, spinningStates],
  );

  return {
    digits,
    spinningStates,
    isJackpot,
    handleDigitClick,
  };
};
