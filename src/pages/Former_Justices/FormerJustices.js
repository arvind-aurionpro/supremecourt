import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
const FormerJustices = () => {
  useEffect(()=>{
    setwebTitle('FormerJustices')
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
      },
      {
        url: "/FormerJustices",
        text: "Former Justices",
        active:true
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
        th:'NAME OF THE HON’BLE JUDGE',
        colspan:''
    },
    {
        th:'DATE OF APPOINTMENT',
        colspan:''
    },
    {
        th:'HELD OFFICE TILL',
        colspan:''
    }
    
]

const newtabledata = [
{
    data:[
        
        {
            td:' Hon’ble Mr. Justice Sir Saiyid Fazl Ali',
            colspan:''
        },
        {
            td:'26/01/1950',
            colspan:''
        },
        {
            td:'18/09/1951',
            colspan:''
        }
    ]
},

{
    data:[
        
        {
            td:' Hon’ble Mr. Justice N. Chandrasekhara Aiyar',
            colspan:''
        },
        {
            td:'23/09/1950',
            colspan:''
        },
        {
            td:'24/01/1953',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Vivian Bose',
            colspan:''
        },
        {
            td:'05/03/1951',
            colspan:''
        },
        {
            td:'08/06/1956',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Ghulam Hasan',
            colspan:''
        },
        {
            td:'08/09/1952',
            colspan:''
        },
        {
            td:'05/11/1954*',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice Natwarlal Harilal Bhagwati',
            colspan:''
        },
        {
            td:'08/09/1952',
            colspan:''
        },
        {
            td:'06/06/1959',
            colspan:''
        }
    ]
},
{
    data:[
        
        {
            td:'Hon’ble Mr. Justice B. Jagannadhadas',
            colspan:''
        },
        {
            td:'09/03/1953',
            colspan:''
        },
        {
            td:'26/07/1958',
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
                  <h3 className="common_text_color">Former Justices</h3>
                  <p>
                    <span><Link to="/">Home</Link></span> {'>'}  Former Justices
                  
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


export default FormerJustices