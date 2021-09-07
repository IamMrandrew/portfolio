import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { ResetStyle, GlobalStyle, COLOR } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={COLOR}>
      <ResetStyle />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
