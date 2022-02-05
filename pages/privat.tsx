import Card from "../components/Card";
import { mq } from "../helpers/mediaQueries";

const Private = (): JSX.Element => {
  return (
    <>
      <Card
        headline="Privat"
        text="Australien-Fan, Musikhörer, gescheiteter Gitarrenspieler, verheiratet, keine (eigenen) Kinder."
      />

      <Card
        headline="Lieblingsmusik"
        text="Punk like Green Day, Die Ärzte. Rock like Queen."
      />
    </>
  );
};

export default Private;
