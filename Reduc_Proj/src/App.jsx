import "./App.css";
import { Header } from "./components/Header";
import { ButtonUse } from "./components/ButtonsToInc";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./components/container";

function App() {
  return (
    <center>
      <Container>
        <Header />
        <ButtonUse />
      </Container>
    </center>
  );
}

export default App;