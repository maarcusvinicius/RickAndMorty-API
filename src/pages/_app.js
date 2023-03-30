import { ModalProvider } from "../contexts/ModalContext";
import { DataProvider } from "../contexts/DataContext";
import { ThemeProvider } from "styled-components";
import { combineTheme, dark } from "../styles/themes";

import GlobalStyle from "../styles/global";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(combineTheme(dark));

  return (
    <DataProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Component {...pageProps} />
        </ThemeProvider>
      </ModalProvider>
    </DataProvider>
  );
}

export default MyApp;