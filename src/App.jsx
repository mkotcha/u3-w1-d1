import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App bg-dark bg-gradient vh-100">
      <header className="container py-5">
        <div className="d-flex flex-column gap-5 ">
          <h1 className="fw-bold text-white">learning react</h1>
          <ButtonComponent buttonText="ciao mare!" />
          <ImageComponent src="https://images6.alphacoders.com/131/1319843.png" alt="Denji & Power" />
        </div>
      </header>
    </div>
  );
}

export default App;
