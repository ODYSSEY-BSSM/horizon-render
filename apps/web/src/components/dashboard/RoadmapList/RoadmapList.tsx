import styled from '@emotion/styled';
import { tokens } from '@horizon/tokens';
import { Icon, Text } from '@horizon/ui';

interface RoadmapListProps {
  viewType?: 'list' | 'thumbnail';
  property?: 'default' | 'empty';
}

const RoadmapList = ({ viewType = 'list', property = 'default' }: RoadmapListProps) => {
  const handleAddRoadmap = () => {
    // TODO: 로드맵 추가 기능 구현
  };

  if (property === 'empty') {
    return (
      <StyledContainer>
        <StyledHeader>
          <StyledHeaderLeft>
            <StyledTitle>로드맵 리스트</StyledTitle>
          </StyledHeaderLeft>
          <StyledHeaderRight>
            <StyledViewToggle>
              <StyledViewToggleButton active={viewType === 'list'}>
                <Icon
                  name='list'
                  size='24px'
                  color={viewType === 'list' ? tokens.colors.black : tokens.colors.neutral[500]}
                />
                <Text
                  color={
                    viewType === 'list' ? tokens.colors.neutral[700] : tokens.colors.neutral[500]
                  }
                >
                  리스트
                </Text>
              </StyledViewToggleButton>
              <StyledViewToggleButton active={viewType === 'thumbnail'}>
                <Icon
                  name='calendar_view_month'
                  size='24px'
                  color={
                    viewType === 'thumbnail' ? tokens.colors.black : tokens.colors.neutral[500]
                  }
                />
                <Text
                  color={
                    viewType === 'thumbnail'
                      ? tokens.colors.neutral[700]
                      : tokens.colors.neutral[500]
                  }
                >
                  썸네일
                </Text>
              </StyledViewToggleButton>
            </StyledViewToggle>
            <StyledAddButton onClick={handleAddRoadmap}>
              <Icon name='add' size='20px' color={tokens.colors.white} />
              <Text color={tokens.colors.white} variant='B2'>
                새 로드맵
              </Text>
            </StyledAddButton>
          </StyledHeaderRight>
        </StyledHeader>

        <StyledFilterTabs>
          <StyledFilterTab active>전체</StyledFilterTab>
          <StyledFilterTab>내 로드맵</StyledFilterTab>
          <StyledFilterTab>팀 로드맵</StyledFilterTab>
          <StyledFilterTab>학습 완료</StyledFilterTab>
          <StyledFilterTab>학습 진행중</StyledFilterTab>
        </StyledFilterTabs>

        <StyledEmptyContent>
          <StyledEmptyMessage>
            <Text variant='ST' color={tokens.colors.neutral[600]}>
              아직 로드맵이 없습니다.
            </Text>
            <Text
              variant='B1'
              color={tokens.colors.primary[500]}
              style={{ cursor: 'pointer' }}
              onClick={handleAddRoadmap}
            >
              새 로드맵 만들기
            </Text>
          </StyledEmptyMessage>
        </StyledEmptyContent>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledHeaderLeft>
          <StyledTitle>로드맵 리스트</StyledTitle>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledViewToggle>
            <StyledViewToggleButton active={viewType === 'list'}>
              <Icon
                name='list'
                size='24px'
                color={viewType === 'list' ? tokens.colors.black : tokens.colors.neutral[500]}
              />
              <Text
                color={
                  viewType === 'list' ? tokens.colors.neutral[700] : tokens.colors.neutral[500]
                }
              >
                리스트
              </Text>
            </StyledViewToggleButton>
            <StyledViewToggleButton active={viewType === 'thumbnail'}>
              <Icon
                name='calendar_view_month'
                size='24px'
                color={viewType === 'thumbnail' ? tokens.colors.black : tokens.colors.neutral[500]}
              />
              <Text
                color={
                  viewType === 'thumbnail' ? tokens.colors.neutral[700] : tokens.colors.neutral[500]
                }
              >
                썸네일
              </Text>
            </StyledViewToggleButton>
          </StyledViewToggle>
          <StyledAddButton onClick={handleAddRoadmap}>
            <Icon name='add' size='20px' color={tokens.colors.white} />
            <Text color={tokens.colors.white} variant='B2'>
              새 로드맵
            </Text>
          </StyledAddButton>
        </StyledHeaderRight>
      </StyledHeader>

      <StyledFilterTabs>
        <StyledFilterTab active>전체</StyledFilterTab>
        <StyledFilterTab>내 로드맵</StyledFilterTab>
        <StyledFilterTab>팀 로드맵</StyledFilterTab>
        <StyledFilterTab>학습 완료</StyledFilterTab>
        <StyledFilterTab>학습 진행중</StyledFilterTab>
      </StyledFilterTabs>

      <StyledContent>{/* 로드맵 리스트가 들어갈 자리 */}</StyledContent>
    </StyledContainer>
  );
};

export default RoadmapList;

const StyledContainer = styled.div`
  width: 1080px;
  background-color: ${tokens.colors.white};
  border: 1px solid ${tokens.colors.neutral[200]};
  border-radius: 12px;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  height: 88px;
  box-sizing: border-box;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderRight = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StyledTitle = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: ${tokens.colors.neutral[800]};
  letter-spacing: -0.2px;
`;

const StyledViewToggle = styled.div`
  display: flex;
  background-color: ${tokens.colors.neutral[100]};
  border-radius: 8px;
  padding: 4px;
`;

const StyledViewToggleButton = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? tokens.colors.white : 'transparent')};
`;

const StyledAddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 10px 20px;
  height: 40px;
  background-color: ${tokens.colors.primary[500]};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${tokens.colors.primary[600]};
  }
`;

const StyledFilterTabs = styled.div`
  display: flex;
  padding: 0 24px;
  border-bottom: 2px solid ${tokens.colors.neutral[100]};
`;

const StyledFilterTab = styled.div<{ active?: boolean }>`
  padding: 10px 4px;
  margin-right: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ active }) => (active ? tokens.colors.primary[500] : tokens.colors.neutral[500])};
  border-bottom: 2px solid ${({ active }) => (active ? tokens.colors.primary[500] : 'transparent')};
  cursor: pointer;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledEmptyContent = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
  padding: 80px 0;
`;

const StyledContent = styled.div`
  padding: 24px;
  min-height: 400px;
`;
