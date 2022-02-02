import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import styled from "styled-components";
import Menu from "../components/Menu";

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 2rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const menupoints = ["home", "privat", "reisen", "beruf"];

  return (
    <>
      <Menu points={menupoints} />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default MyApp;
