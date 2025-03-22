import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import { PremiumContext } from '../../../../context/PremiumContext'
import propertyContext from "../../../../context/PropertyContext";
import { successMsg, warningMsg } from "../../../notification";
import { ToastContainer } from "react-toastify";
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import { useParams } from "react-router-dom";

const PreviewActivePage = () => {
    const [editor, seteditor] = useState(null);
    const [myHtml, setHtml] = useState(null);
    const [myCss, setCss] = useState(null);
    const {host} = useContext(propertyContext);
    const [view,setView] = useState(false);
    const [editOpt,setEditOpt] = useState(false);
    const {id} = useParams();
    const getTemplateData = async ()=>{
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

        const myData = json.template_data.template_data;
        if(myData){
        editor.loadProjectData(JSON.parse(myData));
        setHtml(editor.getHtml());
        setCss(editor.getCss());
        setView(true);
        }
      }
      else{
        console.log("Some Error Occured");
      }
    }
   
  
    useEffect(() => {
      getTemplateData();
    }, []);

   
  return (
    <div>
      <ToastContainer />
    <div>
      <div id="editor" style={{ display: editOpt ? "block" :"none" }}></div>

      {view && (
        <>
          <style>{myCss}</style>
          <div dangerouslySetInnerHTML={{ __html: myHtml }}></div>
        </>
      )}
    </div>
    {/* <div className="d-flex fixed-bottom w-25 mx-auto"  >
    <button className=" btn mb-3 rounded d-block  mx-auto btn-primary" onClick={()=>handleEdit()} type="button"> {editOpt? "Cancel Changes" : "Edit Page"}</button>
   {editOpt &&  <button className="btn  theme-bg mb-3 rounded d-block  mx-auto" onClick={()=>updateTemplateData()} type="button"> Save Changes</button>}
    </div> */}
    </div>
  );
};

export default PreviewActivePage;
