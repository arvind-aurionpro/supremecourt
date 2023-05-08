import BasePage from "../../components/basepage/BasePage"
import CJAJ from "../../components/cjaj/CJAJ";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
const ChiefJusticeAndJudges = () => {
  useEffect(()=>{
    setwebTitle('Chief Justice & Judges')
  },[])
  const leftLinkData = {
    header: "Chief Justice & Judges",
    data: [
      {
        url: "",
        text: "Chief Justice & Judges",
      },
      {
        url: "",
        text: "Former Chief Justice & Judges",
      },
    ]
  }
    return(
        <>
        <BasePage >
        
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
                  <h3 className="common_text_color">Chief Justice & Judges</h3>
                <p>
                  <span><Link to="/">Home</Link></span> {'>'}  Chief Justice & Judges
                
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
               
                
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-xl-4">
                    <CJAJ img='/img/judges/hon-judges.png' name='Dr. Justice D.Y. Chandrachud' dob='11-11-1959' doa='13-05-2016' dor='10-11-2024' url='/JudgeProfile1'/>
                   
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-xl-4 ">
                  <CJAJ img='/img/judges/hon-judges2.png' name='Mr. Justice Sanjay Kishan Kaul' dob='26-12-1958' doa='17-02-2017' dor='25-12-2023' url=''/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-xl-4 ">
                  <CJAJ img='/img/judges/hon-judges3.png' name='Mr. Justice K.M. Joseph' dob='17-06-1958' doa='07-08-2018' dor='16-06-2023' url=''/>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6 col-xl-4 ">
                  <CJAJ img='/img/judges/hon-judges4.png' name='Mr. Justice Mukeshkumar Rasikbhai Shah' dob='26-12-1958' doa='17-02-2017' dor='25-12-2023' url=''/>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6 col-xl-4">
                  <CJAJ img='/img/judges/hon-judges5.png' name=' Mr. Justice Ajay Rastogi ' dob='26-12-1958' doa='17-02-2017' dor='25-12-2023' url=''/>
                  </div>

                  <div className="col-12 col-sm-6 col-md-6 col-xl-4">
                  <CJAJ img='/img/judges/hon-judges6.png' name='Mr. Justice Dinesh Maheshwari ' dob='26-12-1958' doa='17-02-2017' dor='25-12-2023' url=''/>
                  </div>


                 
                </div>

                <div className="pagination_container" style={{float:'right'}}>
                    <Pagination/>
                  

                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
        
        </BasePage>
        
        </>
    )


}
export default ChiefJusticeAndJudges;