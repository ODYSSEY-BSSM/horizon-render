import HomeClient from '@/clients/home/home';

export const metadata = {
  title: 'HORIZON — Dashboard',
  description: '나의 학습 현황과 로드맵을 한 눈에.',
};

const HomePage = () => {
  return <HomeClient />;
};

export default HomePage;
