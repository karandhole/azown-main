import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import { UserContext } from "../../../../context/UserContext";
import { ToastContainer } from "react-toastify";
import gjsPresetWebpage from"grapesjs-preset-webpage";
import gjsblocksbasic from "grapesjs-blocks-basic";
import gjspluginforms from "grapesjs-plugin-forms";
import gjsStylebg from "grapesjs-style-bg";
import gjsnavbar from "grapesjs-navbar";
import { useParams } from "react-router-dom";
import Loader from "../../../loader";

const ProfileActive = () => {
    const [editor, seteditor] = useState(null);
    const [myHtml, setHtml] = useState(null);
    const [myCss, setCss] = useState(null);
    const {host} = useContext(UserContext);
    const [view,setView] = useState(false);
    const [editOpt,setEditOpt] = useState(false);
    const [showLoader,setShowLoader] = useState(false)
    const {id} = useParams();
    const getTemplateData = async ()=>{
        setShowLoader(true)
      const res = await fetch(`${host}/user/get-template-data/${id}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
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
        setShowLoader(false)
        }
      }
      else{
        console.log("Some Error Occured");
        setShowLoader(false)
      }
    }
   
    const getUserData = async (id) => {
        setShowLoader(true)
        const response = await fetch(`${host}/user/get-user-detail/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            
          },
    
    
    
        });
        if (response.ok) {
          const userData = await response.json();
          if(new Date(userData.primium_expiry_date) > new Date()){
            getTemplateData();
            console.log(userData.primium_expiry_date)
          }else{
            setShowLoader(false)
            document.body.innerHTML =  '<h1 style="display:flex;align-items:center;justify-content:center;height:70vh;">Premium Not Active!</h1>';
          }
    
        } else {
            setShowLoader(false)
          console.log("Some error in fetching user data");
        }
      };
  
    useEffect(() => {
      
      getUserData(id);
    }, []);

   
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
    {/* <div className="d-flex fixed-bottom w-25 mx-auto"  >
    <button className=" btn mb-3 rounded d-block  mx-auto btn-primary" onClick={()=>handleEdit()} type="button"> {editOpt? "Cancel Changes" : "Edit Page"}</button>
   {editOpt &&  <button className="btn  theme-bg mb-3 rounded d-block  mx-auto" onClick={()=>updateTemplateData()} type="button"> Save Changes</button>}
    </div> */}
    </div>
  );
};

export default ProfileActive;
