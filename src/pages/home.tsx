import Card from '@/components/Card';
import TextInput from '@/components/TextInput';

const Home = () => {
  return (
    <div className="page-container">
      <div className="container">
        <Card
          label="Card Label"
          title="Card Title1"
          author="author1"
          grade={3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Card
          label="Card Label"
          title="Card Title2"
          author="author2"
          grade={4}
        />
        <Card label="Card Label" title="Card Title3" author="author3" />
        <Card
          landscape
          title="Card Title4"
          author="author2"
          grade={4}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
      <div className="container column">
        <TextInput />
        <TextInput value="This is disabled text." disabled />
        <TextInput value="This is read-only text." readOnly />
      </div>
    </div>
  );
};

export default Home;
