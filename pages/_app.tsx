import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { ResetStyle, GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
