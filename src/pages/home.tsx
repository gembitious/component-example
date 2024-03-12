import Card from '@/components/Card';
import TextInput from '@/components/TextInput';

const Home = () => {
  return (
    <div className="page-container">
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="container">
        <TextInput />
      </div>
    </div>
  );
};

export default Home;
