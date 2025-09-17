'use client';

import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Button } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type React from 'react';

const NotFound = () => {
  const [digits, setDigits] = useState(['4', '0', '4']);
  const [spinningStates, setSpinningStates] = useState([false, false, false]);

  const handleDigitClick = (e: React.MouseEvent, index: number) => {
    if (spinningStates[index]) {
      e.stopPropagation();
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

  return (
    <StyledContainer>
      <StyledWhiteCircle>
        <Flexbox direction='column' align='center' gap={40}>
          <StyledNotFoundTextContainer onClick={handleContainerClick}>
            {digits.map((digit, index) => (
              <StyledDigit
                // biome-ignore lint/suspicious/noArrayIndexKey: Fixed array with 3 elements, order won't change
                key={`digit-${index}`}
                onClick={(e) => handleDigitClick(e, index)}
                isSpinning={spinningStates[index]}
              >
                {digit}
              </StyledDigit>
            ))}
          </StyledNotFoundTextContainer>
          <Flexbox direction='column' gap={20} align='center'>
            <StyledMainMessage>흠... 요청하신 페이지를 찾을 수 없습니다.</StyledMainMessage>
            <StyledSubMessage>
              <p>존재하지 않는 주소를 입력하셨거나,</p>
              <p>요청하신 페이지의 주소가 수정/삭제되어 페이지를 찾을 수 없습니다.</p>
            </StyledSubMessage>
          </Flexbox>
          <Button as={Link} href='/' size='large'>
            메인으로 돌아가기
          </Button>
        </Flexbox>
      </StyledWhiteCircle>
    </StyledContainer>
  );
};

export default NotFound;

const StyledContainer = styled.div`
  background-color: ${tokens.colors.primary[200]};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledWhiteCircle = styled.div`
  background-color: ${tokens.colors.white};
  width: 1200px;
  height: 1200px;
  border-radius: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledNotFoundTextContainer = styled.div`
  display: flex;
  gap: 0;
  cursor: pointer;
`;

const StyledDigit = styled.span<{ isSpinning: boolean }>`
  font-family: 'SUIT Variable', sans-serif;
  font-weight: bold;
  font-size: 240px;
  line-height: 200px;
  color: ${tokens.colors.neutral[800]};
  margin: 0;
  text-align: center;
  user-select: none;
  cursor: pointer;
  min-width: 150px;
`;

const StyledMainMessage = styled.p`
  font-family: 'SUIT Variable', sans-serif;
  font-size: 32px;
  font-weight: normal;
  color: ${tokens.colors.black};
  margin: 0;
  line-height: normal;
  text-align: center;
`;

const StyledSubMessage = styled.div`
  font-family: 'SUIT Variable', sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: ${tokens.colors.neutral[500]};
  line-height: normal;
  text-align: center;

  p {
    margin: 0;
    text-align: center;
  }
`;
