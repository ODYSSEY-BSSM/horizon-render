import { tokens } from '@horizon/tokens';
import { Text } from '@horizon/ui';

const SignInContent = () => {
  return (
    <div>
      <div>
        {/*로고*/}
        <Text variant='H1' color={tokens.colors.primary[500]}>
          HORIZON
        </Text>
      </div>
      <div>{/*폼*/}</div>
      <div>{/*버튼*/}</div>
    </div>
  );
};

export default SignInContent;
