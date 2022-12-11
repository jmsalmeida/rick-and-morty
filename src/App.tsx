import GlobalStyle from "./theme/globalStyles";
import { Home } from "./pages/home";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
