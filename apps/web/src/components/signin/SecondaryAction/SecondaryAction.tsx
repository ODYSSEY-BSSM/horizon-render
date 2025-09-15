import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';
import { Flexbox } from '@horizon/utils';

interface SecondaryActionProps {
  onSignUpClick?: () => void;
}

const SecondaryAction = ({ onSignUpClick }: SecondaryActionProps) => {
  return (
    <Flexbox justify='start'>
      <Flexbox gap='4px'>
        <Text variant='B2' color={tokens.colors.neutral[600]}>
          아직 계정이 없으신가요?
        </Text>
        <Text
          as='button'
          type='button'
          variant='B2'
          color={tokens.colors.primary[500]}
          onClick={onSignUpClick}
          style={{ cursor: 'pointer' }}
        >
          회원가입하기
        </Text>
      </Flexbox>
    </Flexbox>
  );
};

export default SecondaryAction;
