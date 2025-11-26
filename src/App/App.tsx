import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import MemeForm from "./components/MemeForm/MemeForm";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer image={undefined} meme={emptyMeme} basePath="" />
          <MemeForm />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}
export default App;
