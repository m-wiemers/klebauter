import Link from "next/link";
import styled, { css } from "styled-components";

type Props = {
  points: string[];
  active: string;
};

type StyleProps = {
  active: boolean;
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

const ActiveStyle = css`
  background-image: linear-gradient(
    var(--background-color),
    var(--background-color),
    var(--background-color),
    var(--font-color-2)
  );
`;

const StyledLink = styled.a<StyleProps>`
  margin: 1rem;
  text-decoration: none;
  ${({ active }) => active && ActiveStyle}
  padding: 0.5rem;
`;

const Menu = ({ points, active }: Props): JSX.Element => {
  const MenuPoints = points.map((el: string, index) => (
    <Link href={el == "home" ? "/" : el} key={index} passHref>
      <StyledLink active={active == `/${el}`}>
        {el.toLocaleUpperCase()}
      </StyledLink>
    </Link>
  ));

  return <Wrapper>{MenuPoints}</Wrapper>;
};

export default Menu;
