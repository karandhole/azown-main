import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import propertyContext from "../../../../context/PropertyContext";
import { ToastContainer } from "react-toastify";
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import { useParams } from "react-router-dom";
import Loader from "../../../loader";


const ActivePropertyTemp = () => {
    const [editor, seteditor] = useState(null);
    const [myHtml, setHtml] = useState(null);
    const [myCss, setCss] = useState(null);
    const {host} = useContext(propertyContext);
    const [view,setView] = useState(false);
    const [editOpt,setEditOpt] = useState(false);
    const {id,pType} = useParams();
    const [showLoader,setShowLoader] = useState(false)

    async function  getTemplateData(){
      setShowLoader(true)
      const res = await fetch(`${host}/property/get-primium-template/${id}`,{
        method:"GET",
        headers:{
          "content-type":'application/json',
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
        
        const myData = json;
        if(myData){
        editor.loadProjectData(myData);
        setHtml(editor.getHtml());
        setCss(editor.getCss());
        setView(true);
        setShowLoader(false)
        }
      }
      else{
        console.log("Some Error Occured");
        setShowLoader(false)
      }
    }

  const checkExpiry = async (property_id,propType) => {
    if(propType === '1'){
             const res = await fetch(`${host}/property/rr-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){

        getTemplateData()
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
       
     }
}else if(propType === '2'){
         const res = await fetch(`${host}/property/rrs-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){
        getTemplateData()
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
    
     }
}else if(propType === '3'){
         const res = await fetch(`${host}/property/rpg-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){
        getTemplateData()
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
     
     }
}else if(propType === '4'){
         const res = await fetch(`${host}/property/rfm-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){
        getTemplateData();
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
      
     }
}else if(propType === '5'){
         const res = await fetch(`${host}/property/cmr-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){
        getTemplateData();
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
    
     }
}else if(propType === '6'){
         const res = await fetch(`${host}/property/cms-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  if(res.ok){
      const json = await res.json();
      if(new Date(json.primium_expiry_date)> new Date()){
        getTemplateData();
      }else{
        console.log("Premum isn't active")
        document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
      }
     }else{
       console.log("Not Updated")
      
     }
 
}else if(propType === '7'){
         const res = await fetch(`${host}/property/plot-detail/${property_id}`
  , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    
  });
  console.log(pType)
  if(res.ok){
        const json = await res.json();
        if(new Date(json.primium_expiry_date)> new Date()){
          getTemplateData();
        }else{
          console.log("Premum isn't active")
          document.body.innerHTML = '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
        }
     }else{
       console.log("Not Updated")
    
     }
}
  }
  
   
    useEffect(() => {
      checkExpiry(id,pType);
    }, []);
   
  return (
    <div>
      <ToastContainer />
      {showLoader && <Loader />}
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

export default ActivePropertyTemp;
