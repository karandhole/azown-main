import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import { UserContext } from "../../../../context/UserContext";
import propertyContext from "../../../../context/PropertyContext";
import { successMsg,warningMsg } from "../../../notification";
import { ToastContainer } from "react-toastify";
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import { useParams } from "react-router-dom";
import Loader from "../../../loader";
import { templateDataArr } from "../../../Constant/PropertyTempData";

const PropTempPrev = () => {
  
  const {host} = useContext(UserContext)
  const {propId,tempId} = useParams();
  const [editor, seteditor] = useState(null);
  const [myHtml, setHtml] = useState(null);
  const [myCss, setCss] = useState(null);
  const [view,setView] = useState(false);
  const [editOpt,setEditOpt] = useState(false);
  const [showLoader,setShowLoader] = useState(false)


  useEffect(() => {
    setShowLoader(true)
   const tempData =  templateDataArr[parseInt(tempId)-1]
   

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
      editor.loadProjectData(tempData.projectData);
      setHtml(editor.getHtml());
      setCss(editor.getCss());
      setView(true);
      setShowLoader(false)
      editor.on('asset:upload:end', (e) => {
        for(let ele in e.data){
          if(e.data[ele].src.length > 1500000){
            warningMsg('Oops! Image too large. Please select smaller than 1MB image.')
            editor.AssetManager.remove(e.data[ele].src)
          }
        }
         
        });
  }, []);


  const handleEdit = () => {
  setEditOpt(!editOpt)
  setView(!view)
  
  }

  const convertStringToFile = (jsonString,fileName) => {
    // const jsonData = JSON.stringify(jsonString)
    const blob = new Blob([jsonString],{type:'application/json'});
    const file = new File([blob],fileName,{type:'application/json'});
    
    return file
  }

  const updateTemplateData = async ()=>{
    setShowLoader(true)
    const getProjectData = editor.getProjectData();
    const jsonData = JSON.stringify(getProjectData);
    console.log(jsonData)
    const myFile = convertStringToFile(jsonData,'templateData.json')
    const formData = new FormData()
    formData.append('jsonFile',myFile);
    formData.append('propId',propId);
    // const res = await fetch(`${host}/property/update-primium-template/${propId}`,{
      const res = await fetch(`https://api.azown.com/property/update-primium-template/${propId}`,{
      method:"PUT",
      headers:{
        
        "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
      },
      body:formData
    })
    if(res.ok){
      const json = await res.json();
      successMsg("Profile Updated Successfully");
      setHtml(editor.getHtml());
      setCss(editor.getCss());
      setEditOpt(!editOpt)
      setView(!view)
      setShowLoader(false)
      
    }else{
      setShowLoader(false)
    }
  }

return (
  <div>
    <ToastContainer />
    {showLoader && <Loader/>}
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
export default PropTempPrev;
