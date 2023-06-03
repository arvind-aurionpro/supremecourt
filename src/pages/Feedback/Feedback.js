import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { setwebTitle } from "../../utils/functions";
import InputField from "../../components/InputField/InputField";
import RadioButton from "../../components/radioButton/RadioButton";
import TextArea from "../../components/textarea/TextArea";
import MultiFileUpload from "../../components/fileUpload/MultiFileUpload";
import { GlobalModal } from "../../components/modal/globalModal";
import { useNavigate } from 'react-router-dom';
const Feedback = () => {
  useEffect(() => {
    setwebTitle("Feedback");
  }, []);
  const navigate = useNavigate();
 
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [show, setShow] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const [showMore, setShowMore] = useState(false);

  
  const today = new Date();

  const initialState = {
    name: "",
    date: today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear(),
    email: "",
    mobile: "",
    ipAddress: "",
    infoEasy: 1,
    navigateEasy: 1,
    designEasy: 1,
    communicateEasy: 1,
    relevantEasy: 1,
    featureExpected: 1,
    additionalInformation: 1,
    suggestionAddtionalInformation: "",
    meetExpectation: 1,
    overallImpression: "",
    informative: "",
    visualPleasing: "",
    finalComments: "",
    demo_image: "",
  };
  const formReducer = (state, action) => {
    switch (action.type) {
      case "name": {
        return {
          ...state,
          name: action.payload,
        };
      }
      case "mobile": {
        return {
          ...state,
          mobile: action.payload,
        };
      }
      case "email": {
        return {
          ...state,
          email: action.payload,
        };
      }
      case "infoEasy": {
        return {
          ...state,
          infoEasy: action.payload,
        };
      }
      case "navigateEasy": {
        return {
          ...state,
          navigateEasy: action.payload,
        };
      }
      case "designEasy": {
        return {
          ...state,
          designEasy: action.payload,
        };
      }
      case "communicateEasy": {
        return {
          ...state,
          communicateEasy: action.payload,
        };
      }
      case "relevantEasy": {
        return {
          ...state,
          relevantEasy: action.payload,
        };
      }
      case "featureExpected": {
        return {
          ...state,
          featureExpected: action.payload,
        };
      }
      case "additionalInformation": {
        return {
          ...state,
          additionalInformation: action.payload,
        };
      }
      case "meetExpectation": {
        return {
          ...state,
          meetExpectation: action.payload,
        };
      }
      case "ipAddress": {
        return {
          ...state,
          ipAddress: action.payload,
        };
      }
      case "informative": {
        return {
          ...state,
          informative: action.payload,
        };
      }
      case "visual_pleasing": {
        return {
          ...state,
          visualPleasing: action.payload,
        };
      }
      case "suggestionAddtionalInformation": {
        return {
          ...state,
          suggestionAddtionalInformation: action.payload,
        };
      }
      case "demo_image": {
        return {
          ...state,
          demo_image: action.payload,
        };
      }

      default:
        return {
          ...state,
        };
    }
  };

  const [allstate, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ipAddress = data.ip;
        dispatch({ type: "ipAddress", payload: ipAddress });
      })
      .catch((error) => {
        return error;
      });
  }, []);


  const rowsData = [
    {
      label:
        "Did you find the information on the website page clear and easy to understand?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) => dispatch({ type: "infoEasy", payload: e.target.value }),
    },
    {
      label:
        "Were you able to navigate the website pages easily and find what you were looking for?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "navigateEasy", payload: e.target.value }),
    },
    {
      label:
        "Did the design and layout of the website page appeal to you visually?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "designEasy", payload: e.target.value }),
    },
    {
      label:
        "Did the website page effectively convey the purpose or message it intended to communicate?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "communicateEasy", payload: e.target.value }),
    },
    {
      label:
        "Were the images, graphics, or multimedia elements on the website page relevant and engaging?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "relevantEasy", payload: e.target.value }),
    },
    {
      label:
        "Did the website page provide the information or features you expected to find?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "featureExpected", payload: e.target.value }),
    },
    {
      label:
        "Is there any additional information or content you would like to see on the website page?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "additionalInformation", payload: e.target.value }),
    },
    {
      label:
        "Did the website page meet your expectations in terms of providing a positive user experience?",
      radio: [
        { label: "Yes", checked: true, value: 1 },
        { label: "No", checked: false, value: 0 },
      ],
      onchange: (e) =>
        dispatch({ type: "meetExpectation", payload: e.target.value }),
    },
  ];

  const handleRating = (e) => {
    const checkNull = e.target.getAttribute("name");
    if (checkNull) {
      const [cls, val] = e.target.getAttribute("name").split(",");
      let element = document.querySelectorAll("." + cls);
      element.forEach((currentEle) => {
        currentEle.classList.remove("rating-color");
      });
      element.forEach((currentEle, indexis) => {
        if (indexis <= val - 1) {
          currentEle.classList.add("rating-color");
        }
      });
      dispatch({ type: cls, payload: val });
    }
  };

  const modalCallBack = () => {
    setShow(false);
    if(!modalError){
      navigate("/")
    }
    
  };
  const formSubmit = () => {
    if (!allstate.name || !allstate.email || !allstate.mobile) {
      setModalError(true);
      setShow(true);
      setModalMessage("Name, Email, Mobile can not be Null ");
      return;
    }else if(allstate.demo_image != '' && allstate.demo_image.length > 10){
      setModalError(true);
      setShow(true);
      setModalMessage("Maximum 10 files allowed");
      return;
    }

    const isMobile = (mobile) => {
      if (mobile.length === 10) {
        let mobileRegex = /^[6-9]\d{9}$/.test(mobile);
        return mobileRegex;
      } else {
        return false; 
      }
    };

    const isEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    if(!isEmail(allstate.email)){
      setModalError(true);
      setShow(true);
      setModalMessage("Please Enter valid email");
      return;
    }

    if(!isMobile(allstate.mobile)){
      setModalError(true);
      setShow(true);
      setModalMessage("Please Enter valid mobile number");
      return;
    }

 



    const formData = new FormData();

      if (allstate.demo_image != "") {
        allstate.demo_image.forEach((file) => {
          formData.append("demo_image", file);
        });
      }

      for (let data in allstate) {
        if (data != "demo_image") {
          formData.append(data, allstate["" + data]);
        }
      }


      fetch("https://ffts.aurionpro.com:3001/sci/SCIFeedBackForm", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.status) {
            setModalError(false);
            setShow(true);
            setModalMessage(data.data);
          } else {
            setModalError(true);
            setShow(true);
            setModalMessage(data.error);
          }
        })
        .catch((error) => {
          setModalError(true);
          setShow(true);
          setModalMessage(error);
          //console.log(error, "Error uploading files:", error);
        });
        console.log(allstate);
   };

  const handleDelete = (index) => {
    setSelectedFiles((prevSelectedFiles) => {
      const updatedFiles = [...prevSelectedFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });

  };
  useEffect(() => {
    dispatch({ type: "demo_image", payload: selectedFiles });
  }, [selectedFiles]);

  return (
    <>
      <BasePage active_nav={""}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="right-panel">
                  <h3 className="common_text_color">Feedback Form</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Feedback Form
                  </p>

                  <div className="row">
                    <div className="col-sm-3">
                      <InputField
                        type="text"
                        placeholder="Enter your full name"
                        label="Name"
                        onchange={(e) =>
                          dispatch({ type: "name", payload: e.target.value })
                        }
                        value={allstate.name}
                        mandatory = {true}
                      />
                    </div>
                    <div className="col-sm-3">
                      <InputField
                        type="text"
                        placeholder=""
                        label="Date"
                        value={allstate.date}
                        readonly={true}
                      />
                    </div>
                    <div className="col-sm-3">
                      <InputField
                        type="email"
                        placeholder="Enter your email id"
                        label="Email ID"
                        onchange={(e) =>
                          dispatch({ type: "email", payload: e.target.value })
                        }
                        value={allstate.email}
                        mandatory = {true}
                      />
                    </div>
                    <div className="col-sm-3">
                      <InputField
                        type="number"
                        placeholder="Enter your mobile number"
                        label="Mobile"
                        onchange={(e) =>
                          dispatch({ type: "mobile", payload: e.target.value })
                        }
                        value={allstate.mobile}
                        mandatory = {true}
                      />
                    </div>
                  </div>

                  <div className="row mt-5">
                    <RadioButton
                      className={"col-sm-6 py-2"}
                      rowsData={rowsData}
                    />
                  </div>

                  <div className="row">
                    <div className="col-sm-6 py-2">
                      <div className="row">
                        <div className="col-1">{"9"}</div>
                        <div className="col-11">
                          {" "}
                          What is your overall impression of the site?
                        </div>

                        <div className="col-1 pt-3"></div>
                        <div className="col-11 pt-3">
                          <b>Informative </b>

                          <div className="ratings" onClick={handleRating}>
                            <i
                              className="fa fa-star  pe-2 star informative"
                              name="informative,1"
                            ></i>
                            <i
                              className="fa fa-star pe-2 star informative"
                              name="informative,2"
                            ></i>
                            <i
                              className="fa fa-star  pe-2 star informative"
                              name="informative,3"
                            ></i>
                            <i
                              className="fa fa-star  pe-2 star informative"
                              name="informative,4"
                            ></i>
                            <i
                              className="fa fa-star star informative"
                              name="informative,5"
                            ></i>
                          </div>

                          <div className="pt-3">
                            <b className="">Visual Pleasing </b>
                            <div className="ratings" onClick={handleRating}>
                              <i
                                className="fa fa-star  pe-2 star visual_pleasing"
                                name="visual_pleasing,1"
                              ></i>
                              <i
                                className="fa fa-star  pe-2 star visual_pleasing"
                                name="visual_pleasing,2"
                              ></i>
                              <i
                                className="fa fa-star  pe-2 star visual_pleasing"
                                name="visual_pleasing,3"
                              ></i>
                              <i
                                className="fa fa-star  pe-2 star visual_pleasing"
                                name="visual_pleasing,4"
                              ></i>
                              <i
                                className="fa fa-star star visual_pleasing"
                                name="visual_pleasing,5"
                              ></i>
                            </div>
                          </div>

                          <div className="mt-3">
                            Attach document for any input/comments/reference (only jpeg, jpg, png, doc, docx, pdf) are allowed
                            <div className="">
                              <MultiFileUpload selectedFiles = {selectedFiles} setSelectedFiles={setSelectedFiles} setShowMore = {setShowMore} showMore = {showMore}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                    {allstate.demo_image.length > 0 && showMore &&(
        <div>
         
            {allstate.demo_image.map((file, index) => (
              <>
              <div className='me-1' style={{width:"9%", display:'inline-block',position:'relative'}} onClick={() => handleDelete(index)}>

                 <img src={URL.createObjectURL(file)} alt={file.name} style={{width:'100%'}} />
                 <i class="fa fa-times position-absolute" aria-hidden="true" style={{top:'0',right:'0',cursor:'pointer',padding:'2px',background:'white'}}></i>
              </div>
             
              
              </>
              
            
            ))}
          
        </div>
      )}
                    </div>
                    <div className="col-sm-6"></div>

                    <div className="col-sm-9 more_information mt-3">
                      <TextArea
                        label="Please add any comments you have for improving the website. We welcome suggestions on specific areas for improvements, features you would like to see added to the site, and examples of what you consider good websites."
                        onchange={(e) =>
                          dispatch({
                            type: "suggestionAddtionalInformation",
                            payload: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-sm-12 mt-3">
                      <button
                        className="btn submit w-25"
                        onClick={() => formSubmit()}
                      >
                        Submit
                      </button>

                      <GlobalModal
                        showModal={show}
                        message={modalMessage}
                        type={
                          !modalError
                            ? "api_success_handling"
                            : "api_failed_handling"
                        }
                        btn2Name="OK"
                        btn2CallBack={modalCallBack}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </BasePage>
    </>
  );
};
export default Feedback;
