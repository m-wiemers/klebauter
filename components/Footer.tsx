import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #000;
  background-image: linear-gradient(
    var(--background-color),
    var(--background-color),
    var(--background-color),
    var(--font-color-2)
  );

  @media only screen and (max-width: 540px) {
    background-image: none;
  }
`;

const InnerWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    justify-content: none;
    text-align: center;
  }
`;

const StyledP = styled.p`
  color: var(--font-color-1);
  padding-bottom: 1rem;

  @media only screen and (max-width: 540px) {
    margin: 0.1rem;
    padding: 0;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledP>marcel wiemers</StyledP>
        <StyledP>westfalenweg 30a</StyledP>
        <StyledP>33332 gütersloh</StyledP>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
