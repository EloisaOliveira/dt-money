import { GlobalStyle } from "./assets/styles/global";
import { Dasboard } from "./components/Dashboard";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header/>
      <Dasboard />
      <GlobalStyle />
    </>
  );
}