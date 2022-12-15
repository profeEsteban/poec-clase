import { Button } from '@mui/material';
import Title from 'renderer/components/Title';

interface HomeProps {
  title: string;
}
function Home({ title }: HomeProps) {
  return (
    <div>
      <Title title={title} />
      <Button>Ver perfil</Button>
    </div>
  );
}

export default Home;
