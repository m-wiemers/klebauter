import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  flex: 1;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default MyApp;
