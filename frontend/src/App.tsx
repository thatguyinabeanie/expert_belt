import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { styled } from "@nextui-org/react"

import { createTheme, NextUIProvider } from "@nextui-org/react";
import AppNavBar from './components/navbar/Navbar';

import Routing from './Routing';

export const Box = styled("div", {
  boxSizing: "border-box",
});

export const Layout = ({ children }: {children: React.ReactNode}) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
});

function App() {
  return (
    <React.StrictMode>
      <NextUIProvider theme={theme}>

        <title>VGC Data</title>
        <Layout>
          <AppNavBar />

          <Routing />

        </Layout>
        </NextUIProvider>
      </React.StrictMode>
  );
}

export default App;
