import React from 'react'
import { useState, useEffect,useContext } from "react";
import grapesjs from 'grapesjs';
import "grapesjs/dist/css/grapes.min.css";
import propertyContext from '../../../../context/PropertyContext';
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import { PremiumContext } from '../../../../context/PremiumContext';
import { successMsg } from '../../../notification';
import { userTempArr } from '../../../Constant/userTemplates';
import { useParams } from 'react-router-dom';
import Loader from '../../../loader';


const Grapesjs = () => {
  
  const [editor, seteditor] = useState(null);
  const [showLoader,setShowLoader] = useState(false)
  const premiumcontext = useContext(PremiumContext);
  const {templateData} = premiumcontext;
    const context = useContext(propertyContext);
    const { host} = context
    const [editorData,setEditorData] = useState(true)
    const {id} = useParams()
    //  const html = JSON.parse(venderEdit.html)
    //  const css = JSON.parse(venderEdit.html

    
 useEffect(() => {
  const tempData =  userTempArr[parseInt(id)-1]
  // console.log(tempData)
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
    }, []);

    // const updateTemplateData = async (data)=>{
    //   // console.log(JSON.stringify(data))
    //   const res = await fetch(`${host}/api/user/add-tempalate-data`,{
    //     method:"POST",
    //     headers:{
    //       "Content-Type": "application/json",
    //       "auth-token": JSON.parse(localStorage.getItem("userDetail")).authtoken,
    //     },
    //     body:JSON.stringify(data)
    //   })
    //   if(res.ok){
    //     const json = await res.json();
    //     console.log(json);
    //   }
    //   else{
    //     console.log("Some Error Occured");
    //   }
    // }
    
//        const setData = () =>{
// const getProjectData = editor.getProjectData();
// const jsonData = JSON.stringify(getProjectData); 
// updateTemplateData({tempalate_data:jsonData})

//    }

   const updateTemplateData = async ()=>{
    const getProjectData = editor.getProjectData();
    const jsonData = JSON.stringify(getProjectData);
    console.log(jsonData)
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
      console.log(json);
      setShowLoader(false)
  successMsg("Profile Updated Successfully")
    }else{
      setShowLoader(false)
    }
  }

   
  return (
    <div  className="col-lg-9 col-md-8 col-sm-12">
      {showLoader && <Loader/>}
      <div id='editor' className='border border-primary'></div>
      <button className='btn theme-bg rounded d-block mx-auto my-3' onClick={()=>{updateTemplateData();setShowLoader(true)}}>Save Changes</button >
      {/* <button className='btn btn-warning ml-2' onClick={()=>console.log(JSON.stringify(editor.getProjectData()))}>Save Changes</button> */}
  
    </div>
  )
}

export default Grapesjs


