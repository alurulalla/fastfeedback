import { CSSReset } from '@chakra-ui/css-reset';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '@/lib/auth';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { Global, css } from '@emotion/react';
// import { Global } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <>
          <GlobalStyle />
        </>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
