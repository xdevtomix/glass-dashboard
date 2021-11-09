import styled, { StyleSheetManager } from "styled-components";

import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Dashboard />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;