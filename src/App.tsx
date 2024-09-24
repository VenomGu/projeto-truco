"use client";
import React from "react";
import GlobalStyle from "./styles/global";
import { Container } from "./pages/PlayerCards/styles";
import PlayerCards from "./pages/PlayerCards/Index";

const App: React.FC = () => {
  return (
    <>
      <Container>
        <PlayerCards />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default App;
