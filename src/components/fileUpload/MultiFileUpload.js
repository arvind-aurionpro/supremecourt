import { useState, useRef } from "react";

const MultiFileUpload = (props) => {
  
  const {selectedFiles, setSelectedFiles,setShowMore,showMore} = props;

  const inputTypeFile = useRef();
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
   
   
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
   
  };



  const inputStyle = {
    display: "none",
  };

  
  return (
    <div>
      <input
        type="file"
        multiple
        style={inputStyle}
        onChange={handleFileChange}
        ref={inputTypeFile}
        accept="image/png, image/jpeg , image/jpg , .doc, .docx, .pdf"
      />
      <span className="attach_file" onClick={() => inputTypeFile.current.click()}>
        <i
          className="fa fa-paperclip"
          aria-hidden="true"
        ></i>{" "}
        Attach {" "}
      </span>
      <small>{selectedFiles.length>0?' ( '+selectedFiles.length+' files Selected )'   :' (no file selected)'}</small>
      <small onClick={()=>setShowMore(!showMore)} style={{cursor:'pointer'}}>{selectedFiles.length>0 && !showMore?' (  Show Files )'   :selectedFiles.length>0 && showMore ?' ( Hide Files)':''}</small>
     
    </div>
  );
};

export default MultiFileUpload;
