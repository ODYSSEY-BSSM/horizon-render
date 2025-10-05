import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';

interface GreetingMessageProps {
  date?: string;
  userName?: string;
}

const GreetingMessage = ({
  date = new Date()
    .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\./g, '.')
    .replace(/ /g, ''),
  userName = '홍길동',
}: GreetingMessageProps) => {
  return (
    <StyledContainer>
      <StyledDate>{date}</StyledDate>
      <StyledTitleWrapper>
        <StyledArrow>&gt; </StyledArrow>
        <StyledTitle>{userName}님, 돌아오셨군요!</StyledTitle>
      </StyledTitleWrapper>
    </StyledContainer>
  );
};

export default GreetingMessage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

const StyledDate = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: ${tokens.colors.neutral[600]};
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StyledArrow = styled(Text)`
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: -0.36px;
  color: ${tokens.colors.black};
`;

const StyledTitle = styled(Text)`
  font-size: 24px;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: -0.36px;
  color: ${tokens.colors.black};
`;
