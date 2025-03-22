import { React, useContext, useEffect, useState } from "react";
import grapesjs from 'grapesjs';
import { PremiumContext } from "../../../../context/PremiumContext";
import propertyContext from "../../../../context/PropertyContext";
import { useParams } from "react-router-dom";

const DefaultView = () => {
  const [editor, seteditor] = useState(null);
  const [myHtml, setHtml] = useState(null);
  const [myCss, setCss] = useState(null);
  const {host} = useContext(propertyContext);
  const [edit,setEdit] = useState(false);
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
        container: "#editor",
      });
      seteditor(editor);
      const json = await res.json();
      // console.log(json.template_data.template_data)
      const myData = json.template_data.template_data;
      editor.loadProjectData(JSON.parse(myData));
      setHtml(editor.getHtml());
      setCss(editor.getCss());
      setEdit(false);
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

  // useEffect(() => {
  //   const editor = grapesjs.init({
  //     container: "#editor",
  //   });
  //   seteditor(editor);
  //   // editor.loadProjectData(templateData.projectData);
  //   // setHtml(editor.getHtml());
  //   // setCss(editor.getCss());
  //   getTemplateData();
  // }, []);

  return (
 <div style={{height:'30rem',padding:'1rem',position:'relative',backgroundColor:'#ccccb2',overflowY:'scroll', background: '-webkit-linear-gradient(-45deg, white, #27AE60)',opacity:'.9' ,marginTop:'1rem',marginBottom:'2rem'}}>
      <div id="editor" style={{ display: "none" }}></div>

  {edit && <>
  
       <style>{myCss}</style>
      <div style={{fontSize:'5px'}} dangerouslySetInnerHTML={{ __html: myHtml }}></div> 
  </>}
  <button style={{position:'fixed',left: '50%',top:'90%',transform: 'translate(-50%,-50%)' ,width:'8rem',backgroundColor:'#27ae62',border:'none',fontWeight:'bold'}} className='btn fs-4 rounded'>Edit</button>
    </div>    
  )
}

export default DefaultView

// background: #ccccb2; /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #ccccb2, #757519); /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #ccccb2, #757519);

// background: #D1913C;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #FFD194, #D1913C);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #FFD194, #D1913C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
