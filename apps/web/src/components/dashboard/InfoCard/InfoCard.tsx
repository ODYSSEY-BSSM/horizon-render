import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon, Text } from '@horizon/ui';

interface InfoCardProps {
  count?: string;
  subCount?: string;
  category: 'my roadmaps' | 'team roadmaps' | 'connected school';
  hasItem?: 'true' | 'false';
}

const InfoCard = ({ count = '10', subCount = '10', category, hasItem = 'true' }: InfoCardProps) => {
  const getIcon = () => {
    switch (category) {
      case 'my roadmaps':
        return 'map';
      case 'team roadmaps':
        return 'group';
      case 'connected school':
        return 'school';
      default:
        return 'map';
    }
  };

  const getTitle = () => {
    switch (category) {
      case 'my roadmaps':
        return '내 로드맵';
      case 'team roadmaps':
        return '팀 로드맵';
      case 'connected school':
        return '연결된 학교';
      default:
        return '';
    }
  };

  const getDescription = () => {
    if (category === 'connected school' && hasItem === 'false') {
      return '연결된 학교가 없습니다';
    }

    switch (category) {
      case 'my roadmaps':
        return `${subCount}개 로드맵 진행중`;
      case 'team roadmaps':
        return `${subCount}개 팀 참여중`;
      default:
        return '';
    }
  };

  const getDisplayValue = () => {
    if (category === 'connected school' && hasItem === 'false') {
      return '연결되지 않았습니다.';
    }
    return count;
  };

  const getDescriptionIcon = () => {
    if (category === 'connected school' && hasItem === 'false') {
      return 'cancel';
    }

    switch (category) {
      case 'my roadmaps':
        return 'file_export';
      case 'team roadmaps':
        return 'group';
      default:
        return '';
    }
  };

  return (
    <StyledCard>
      <StyledContent>
        <StyledTextContent>
          <StyledTitle>{getTitle()}</StyledTitle>
          <StyledValue $isError={category === 'connected school' && hasItem === 'false'}>
            {getDisplayValue()}
          </StyledValue>
          <StyledDescriptionWrapper>
            <Icon
              name={getDescriptionIcon()}
              size='16px'
              color={
                category === 'connected school' && hasItem === 'false'
                  ? '#ff0000'
                  : tokens.colors.neutral[500]
              }
            />
            <StyledDescription>{getDescription()}</StyledDescription>
          </StyledDescriptionWrapper>
        </StyledTextContent>
        <StyledIconContainer>
          <Icon name={getIcon()} size='32px' color={tokens.colors.primary[500]} />
        </StyledIconContainer>
      </StyledContent>
    </StyledCard>
  );
};

export default InfoCard;

const StyledCard = styled.div`
  width: 344px;
  height: 136px;
  background-color: ${tokens.colors.white};
  border-radius: 12px;
  border: 1px solid ${tokens.colors.neutral[200]};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 24px 24px 24px 24px;
  display: flex;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92px;
  flex: 1;
`;

const StyledTitle = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${tokens.colors.neutral[500]};
`;

const StyledValue = styled(Text)<{ $isError?: boolean }>`
  font-size: ${({ $isError }) => ($isError ? '24px' : '32px')};
  font-weight: ${({ $isError }) => ($isError ? '800' : '900')};
  line-height: ${({ $isError }) => ($isError ? '34px' : '44px')};
  letter-spacing: ${({ $isError }) => ($isError ? '-0.36px' : '-0.64px')};
  color: ${tokens.colors.neutral[800]};
  max-width: ${({ $isError }) => ($isError ? '224px' : 'none')};
  overflow: ${({ $isError }) => ($isError ? 'hidden' : 'visible')};
  text-overflow: ${({ $isError }) => ($isError ? 'ellipsis' : 'initial')};
  white-space: ${({ $isError }) => ($isError ? 'nowrap' : 'normal')};
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const StyledDescription = styled(Text)`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: ${tokens.colors.neutral[500]};
`;

const StyledIconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${tokens.colors.primary[100]};
  border-radius: 8px;
  flex-shrink: 0;
`;
