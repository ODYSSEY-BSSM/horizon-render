import { useEffect, useState } from 'react';

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
    }
  };

  const handleContainerClick = () => {
    setSpinningStates([true, true, true]);
  };

  useEffect(() => {
    const intervals: (NodeJS.Timeout | null)[] = spinningStates.map((isSpinning, index) => {
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
        }, 50);
      }
      return null;
    });

    return () => {
      for (const interval of intervals) {
        if (interval) {
          clearInterval(interval);
        }
      }
    };
  }, [spinningStates]);

  return {
    digits,
    spinningStates,
    handleDigitClick,
    handleContainerClick,
  };
};
