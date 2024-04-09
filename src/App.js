import "./App.css";
import NpmSpeechRecognitionComponent from "./components/NpmSpeechRecognitionComponent";

const App = () => {
  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <NpmSpeechRecognitionComponent />
    </div>
  );
};

export default App;
