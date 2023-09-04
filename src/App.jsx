import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App bg-secondary vh-100">
      <header className="App-header p-5 d-flex flex-column gap-5 ">
        <h1>learning react</h1>
        <ButtonComponent buttonText="ciao mare!" />
        <ImageComponent src="https://images6.alphacoders.com/131/1319843.png" alt="Denji & Power" />
      </header>
    </div>
  );
}

export default App;
