import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4em 1fr 4em;
  width: 100vw;
  height: 100vh;
  grid-template-areas: "header" "content" "footer";
  overflow: hidden;
  color: var(--font-color);
  text-align: center;
`;

const ContentWrapper = styled.div`
  margin: 0 1rem;
  grid-area: content;
  overflow: auto;
  height: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const menupoints = ["home", "privat", "beruf"];

  console.log(router.pathname);

  return (
    <>
      <Wrapper>
        <Menu
          points={menupoints}
          active={router.pathname == "/" ? "home" : router.pathname}
        />
        <ContentWrapper>
          <Component {...pageProps} />
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </>
  );
}

export default MyApp;
