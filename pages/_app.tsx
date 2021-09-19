import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import { ResetStyle, GlobalStyle } from "../styles/GlobalStyle";
import theme from "../styles/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}
export default MyApp;
