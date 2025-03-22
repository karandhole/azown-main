import { React, useContext, useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { userTempArr } from "../../../Constant/userTemplates";
import { useParams } from "react-router-dom";

const PreviewPage = () => {
  const [editor, seteditor] = useState(null);
  const [myHtml, setHtml] = useState(null);
  const [myCss, setCss] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    const tempData =  userTempArr[parseInt(id)-1]
    const editor = grapesjs.init({
      container: "#editor",
    });
    seteditor(editor);
    editor.loadProjectData(tempData.projectData);
    setHtml(editor.getHtml());
    setCss(editor.getCss());
    }, []);

  return (
    <div>
      <div id="editor" style={{ display: "none" }}></div>

      {myHtml && (
        <>
          <style>{myCss}</style>
          <div dangerouslySetInnerHTML={{ __html: myHtml }}></div>
        </>
      )}
    </div>
  );
};

export default PreviewPage;
