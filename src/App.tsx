import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./styles/global.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
