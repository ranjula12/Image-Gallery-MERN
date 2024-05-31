import "./App.css";
import ImageUpload from "./components/Upload";
import Footer from "./components/FooterCustom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload Component</h1>
      </header>
      <main>
        <ImageUpload />
        <Footer />
      </main>
    </div>
  );
}

export default App;
