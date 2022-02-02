import Link from "next/link";
import styled from "styled-components";

type Props = {
  points: string[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(
    var(--background-color),
    var(--background-color),
    var(--background-color),
    var(--background-color),
    var(--border-color)
  );
  color: var(--font-color);
`;

const StyledLink = styled.a`
  margin: 1rem;
  text-decoration: none;
`;

const Menu = ({ points }: Props): JSX.Element => {
  const MenuPoints = points.map((el: string, index) => (
    <Link href={el} key={index} passHref>
      <StyledLink>{el.toLocaleUpperCase()}</StyledLink>
    </Link>
  ));

  return <Wrapper>{MenuPoints}</Wrapper>;
};

export default Menu;
