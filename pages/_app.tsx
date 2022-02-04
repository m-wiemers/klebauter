import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

const ContentWrapper = styled.div`
  flex: 1;
  margin: 6rem 2rem 2rem 2rem;
  color: var(--font-color);
  text-align: center;

  @media only screen and (max-width: 540px) {
    margin: 5rem 0.5rem 0.5rem 0.5rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const menupoints = ["home", "privat", "beruf"];

  return (
    <>
      <Menu
        points={menupoints}
        active={router.pathname == "/" ? "home" : router.pathname}
      />
      <ContentWrapper>
        <Component {...pageProps} />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default MyApp;
