
import { useParams } from "react-router";
import FlexH1stGrow from "../components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import { useSelector } from "react-redux";



const Editor = () => {
  return (
    <FlexH1stGrow>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </FlexH1stGrow>
  );
};

export default Editor;
