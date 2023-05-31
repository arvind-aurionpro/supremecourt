import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
const FormerChiefJustices = () => {
  useEffect(()=>{
    setwebTitle('FormerChiefJustices')
  },[])



  const leftLinkData = {
    header: "Other Links",
    data: [
      {
        url: "/Constitution",
        text: "Constitution",
      },
      {
        url: "/History",
        text: "History",
       
      },
      {
        url: "/FormerChiefJustices",
        text: "Former chief Justices",
        active:true
      },
      {
        url: "/FormerJustices",
        text: "Former Justices",
      },
      {
        url: "",
        text: "Sitemap",
      },
    ]
  }


  const newheaders = [
        
    {
        th:'S.NO',
        colspan:''
    },
    {
        th:'NAME',
        colspan:''
    },
    {
        th:'DATE OF APPOINTMENT (D.O.A)',
        colspan:''
    },
    {
        th:'DATE OF APPOINTMENT (D.O.A) as (C.J.I)',
        colspan:''
    }
    ,
    {
        th:'HELD OFFICE TILL',
        colspan:''
    }
    
]

const newtabledata = [
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Harilal Jekisundas Kania',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        }
        ,
        {
            td:'06/11/1951*',
            colspan:''
        }
    ]
},

{
    data:[
        
        {
            td:'Hon’ble Mr. Justice M. Patanjali Sastri',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'07/11/1951',
            colspan:''
        }
        ,
        {
            td:'03/01/1954',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Mehr Chand Mahajan',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'04/01/1954',
            colspan:''
        }
        ,
        {
            td:'22/12/1954',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Bijan Kumar Mukherjea',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'23/12/1954',
            colspan:''
        }
        ,
        {
            td:'31/01/1956**',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Sudhi Ranjan Das',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'01/02/1956',
            colspan:''
        }
        ,
        {
            td:'30/09/1959',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Bhuvneshwar Prasad Sinha',
            colspan:''
        },
        {
            td:'03/12/1954',
            colspan:''
        },
        {
            td:'01/10/1959',
            colspan:''
        }
        ,
        {
            td:'31/01/1964',
            colspan:''
        }
    ]
},


]



  return (
    <>
      <BasePage active_nav={''}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
              <LeftLinkPanel data={leftLinkData} />
              </div>
              <div className="col-9">
                <div className="right-panel">
                <div className="row">
                  <div className="col-8">
                  <h3 className="common_text_color">Former Chief Justices</h3>
                  <p>
                    <span><Link to="/">Home</Link></span> {'>'}  Former Chief Justices
                  
                  </p>
                  </div>
                  <div className="col-4">
                    <span>SORT BY</span>
                    <select style={{width:'40%',display:"inline-block"}} className="form-select ms-2">
                        <option defaultValue={''}>A to Z</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                  </div>
                </div>
                
                  <Table
                  headers = {newheaders}
                  tabledata ={newtabledata}
                  />
          
                  

                     <div
                    className="pagination_container"
                    style={{ float: "right" }}
                  >
                    <Pagination />
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


export default FormerChiefJustices