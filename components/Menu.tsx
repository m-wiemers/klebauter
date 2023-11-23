import Link from 'next/link';
import styled, { css } from 'styled-components';

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
  position: fixed;
  width: 100%;
  color: var(--font-color);
`;

const ActiveStyle = css`
  border-bottom: 2px solid var(--border-color);
`;

const StyledLink = styled.a<StyleProps>`
  margin: 1rem;
  text-decoration: none;
  ${({ active }) => active && ActiveStyle}
  padding: 0.5rem;
`;

const Menu = ({ points, active }: Props): JSX.Element => {
  const MenuPoints = points.map((el: string, index) => (
    <Link href={el == 'home' ? '/' : el} key={index} passHref>
      <StyledLink active={active == 'home' ? active == el : active == `/${el}`}>
        {el.toLocaleUpperCase()}
      </StyledLink>
    </Link>
  ));

  return <Wrapper>{MenuPoints}</Wrapper>;
};

export default Menu;
