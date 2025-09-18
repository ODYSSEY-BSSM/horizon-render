import { useEffect, useState } from 'react';

export const useSlotMachine = () => {
  const [digits, setDigits] = useState(['4', '0', '4']);
  const [spinningStates, setSpinningStates] = useState([false, false, false]);
  const [isJackpot, setIsJackpot] = useState(false);

  const handleDigitClick = (index: number) => {
    // 스핀 중이면 해당 숫자만 멈춤
    if (spinningStates[index]) {
      setSpinningStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    } else {
      // 스핀 중이 아니면 전체 슬롯머신 시작
      setSpinningStates([true, true, true]);
    }
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
        }, 300);
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

  useEffect(() => {
    if (!spinningStates.some((state) => state) && digits.every((digit) => digit === '7')) {
      setIsJackpot(true);
    } else {
      setIsJackpot(false);
    }
  }, [digits, spinningStates]);

  return {
    digits,
    spinningStates,
    isJackpot,
    handleDigitClick,
  };
};
