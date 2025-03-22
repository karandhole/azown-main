import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import propertyContext from "../../../../context/PropertyContext";
import { successMsg } from "../../../notification";
import { ToastContainer } from "react-toastify";
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import Loader from "../../../loader";
import { useParams } from "react-router-dom";

const PreviewEdited = () => {
    const [editor, seteditor] = useState(null);
    const [myHtml, setHtml] = useState(null);
    const [myCss, setCss] = useState(null);
    const {host} = useContext(propertyContext);
    const [view,setView] = useState(false);
    const [editOpt,setEditOpt] = useState(false);
    const [showLoader,setShowLoader] = useState(false)
    const {id} = useParams()
  
    const getTemplateData = async ()=>{
      setShowLoader(true)
      const res = await fetch(`${host}/user/get-template-data/${id}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        }
      })
      if(res.ok){
        const editor = grapesjs.init({
          container:'#editor',
          storageManager: false,
          plugins:[gjsPresetWebpage,gjsblocksbasic,gjspluginforms,gjsStylebg,gjsnavbar],
          pluginsOpts:{
            gjsPresetWebpage:{},
            gjsblocksbasic:{},
            gjspluginforms:{},
            gjsStylebg:{},
            gjstabs:{},
            gjsnavbar:{},
            grjscomponentcountdown:{},
            btnLabel: 'Export',
          }
        });
        
        seteditor(editor);
        const json = await res.json();
        // console.log(json.template_data.template_data)
        const myData = json.template_data.template_data;
        if(myData){
        editor.loadProjectData(JSON.parse(myData));
        setHtml(editor.getHtml());
        setCss(editor.getCss());
        setView(true);
        setShowLoader(false)
        }
      }
      else{
        console.log("Some Error Occured");
      }
    }
  
    useEffect(() => {
    
      // editor.loadProjectData(templateData.projectData);
      // setHtml(editor.getHtml());
      // setCss(editor.getCss());
      getTemplateData();
    }, []);

    const handleEdit = () => {
 setEditOpt(!editOpt)
 setView(!view)
    }

    const updateTemplateData = async ()=>{
      setShowLoader(true)
      const getProjectData = editor.getProjectData();
      const jsonData = JSON.stringify(getProjectData);
      const res = await fetch(`${host}/user/update-tempalate-data`,{
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
          "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
        },
        body:JSON.stringify({template_data:jsonData})
      })
      if(res.ok){
        const json = await res.json();
        successMsg("Profile Updated Successfully");
        setHtml(editor.getHtml());
        setCss(editor.getCss());
        setEditOpt(!editOpt)
        setView(!view)
        setShowLoader(false)
      }
    }
  
  return (
    <div>
      <ToastContainer />
      {showLoader &&  <Loader />}
    <div>
      <div id="editor" style={{ display: editOpt ? "block" :"none" }}></div>

      {view && (
        <>
          <style>{myCss}</style>
          <div dangerouslySetInnerHTML={{ __html: myHtml }}></div>
        </>
      )}
    </div>
    <div className="d-flex fixed-bottom w-25 mx-auto"  >
    <button className=" btn mb-3 rounded d-block  mx-auto btn-primary" onClick={()=>handleEdit()} type="button"> {editOpt? "Cancel Changes" : "Edit Page"}</button>
   {editOpt &&  <button className="btn  theme-bg mb-3 rounded d-block  mx-auto" onClick={()=>updateTemplateData()} type="button"> Save Changes</button>}
    </div>
    </div>
  );
};

export default PreviewEdited;
