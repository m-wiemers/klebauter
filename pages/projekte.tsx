import Card from '../components/Card';
import Spacer from '../helpers/Spacer';

const Projects = () => {
  return (
    <>
      <p>
        Diese Prokjekte sind privat entstanden. Aus eigenen Ideen und garantiert
        nicht perfekt.
      </p>
      <Spacer Height="2rem" />
      <Card
        headline="Hangman"
        text="Aktuelles Projekt mit dem bekannten Spiel"
        link="https://hangman.klebauter.de"
        linkText="Hangman spielen"
      />
      <Card
        headline="Memory"
        text="Lust auf einen alten Klassiker?"
        link="https://memo.klebauter.de"
        linkText="Memory spielen"
      />
      <Card
        headline="6 Richtige"
        text="Wenn es beim Schreibwarengeschäft mal nicht klappen will"
        link="https://lotto.klebauter.de"
        linkText="6 Richtige spielen"
      />
    </>
  );
};

export default Projects;
