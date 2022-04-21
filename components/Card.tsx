import { useState } from 'react';
import styled, { css } from 'styled-components';
import { DownArrow } from '../icons/Arrows';
import { heightTransOpen, heightTransClose } from './css';

type Props = {
  headline: string;
  text: string;
  button?: boolean;
};

type StyleProps = {
    Height?: boolean;
    rotated?: boolean;
}

const Wrapper = styled.div<StyleProps>`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  ${({ Height }) => (Height ? `${heightTransOpen}` : `${heightTransClose}`)}
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 10px var(--border-color);
  background-color: var(--grey-1);

  @media only screen and (min-width: 540px) {
    justify-self: center;
    max-width: 700px;
  }
`;

const Opener = styled.button`
  position: absolute;
  padding: 0;
  border-radius: 50px;
  bottom: -25px;
  background-color: #000;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  box-shadow: 0 0 10px var(--font-color-4);
`;

const Rotate = (deg: string) => css`
  transform: translate(50%, -50%) rotate(${deg});
  transition: transform 1s;
`;

const StyledIcon = styled.div<StyleProps>`
  position: absolute;
  right: 50%;
  top: 50%;
  ${({ rotated }) => (rotated ? Rotate('180deg') : Rotate('0deg'))}
  fill: #fff;
  width: 50px;
  height: 50px;
`;

const TextWrapper = styled.div`
  overflow: hidden;
`;

const Card = ({ headline, text, button }: Props & StyleProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  return (
    <Wrapper Height={open}>
      <InnerWrapper>
        <h2>{headline}</h2>
        <TextWrapper>
          <p>{text}</p>
        </TextWrapper>
        {button && (
          <Opener onClick={toggleOpen}>
            <StyledIcon rotated={rotate}>
              <DownArrow />
            </StyledIcon>
          </Opener>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Card;
