import Iframe from "react-iframe";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  margin-bottom: 2rem;
`;

const LottoApp = () => {
  return (
    <>
      <Wrapper>
        <Iframe
          url="https://klebauter-lotto.vercel.app"
          width="100%"
          height="100%"
        />
      </Wrapper>
    </>
  );
};

export default LottoApp;
