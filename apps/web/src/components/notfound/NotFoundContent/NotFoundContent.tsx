import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';

export type Props = {
  showMainMessage?: boolean;
};

const NotFoundContent = ({ showMainMessage = true }: Props) => {
  return (
    <>
      {showMainMessage && (
        <StyledMainMessage>흠... 요청하신 페이지를 찾을 수 없습니다.</StyledMainMessage>
      )}
      <StyledSubMessage>
        <p>존재하지 않는 주소를 입력하셨거나,</p>
        <p>요청하신 페이지의 주소가 수정/삭제되어 페이지를 찾을 수 없습니다.</p>
      </StyledSubMessage>
    </>
  );
};

export default NotFoundContent;

const StyledMainMessage = styled.h2`
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
  }
`;
