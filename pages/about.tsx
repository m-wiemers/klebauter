import styled from 'styled-components';
import Card from '../components/Card';

const Wrapper = styled.div`
  width: 100vw;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  min-width: 50vw;
`;

const LifeWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  width: 100%;
`;

const text =
  'Hi! Ich bin Marcel, ein Front-End-Devoloper mit Ambitionen zum Full-Stack. In meiner derzeitigen Anstellung Verantwortlich für automatisierte e2e-Tests.';

const About = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Card headline="About me" text={text} />
        <Card headline="Eckdaten" text="...über mich">
          <LifeWrapper>
            <p>Name:</p>
            <p>Marcel</p>
          </LifeWrapper>
        </Card>
      </InnerWrapper>
    </Wrapper>
  );
};

export default About;
