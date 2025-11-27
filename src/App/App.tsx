import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import Thumbnail from "./pages/Thumbnail";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Footer from "./components/ui/Footer/Footer";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <Routes>
          <Route Component={Home} path="/home"></Route>
          <Route Component={Thumbnail} path="/thumbs"></Route>
          <Route Component={Editor} path="/editor/:id"></Route>
          <Route Component={Editor} path="/editor"></Route>
        </Routes>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}
export default App;
