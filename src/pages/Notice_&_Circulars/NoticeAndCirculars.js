import BasePage from "../../components/basepage/BasePage";
import TableWithActions from "../../components/table_with_actions/TableWithActions";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
const NoticeAndCirculars = () => {

  const data = [
    {
      description:'Helpline Numbers of Court Masters/ Court Modarators for 15.03.23',
      date:'15/mar/2023'
    },
    {
      description:'Helpline Numbers of Court Masters/ Court Modarators for 15.03.23',
      date:'16/mar/2023'
    },
    {
      description:'Helpline Numbers of Court Masters/ Court Modarators for 15.03.23',
      date:'17/mar/2023'
    },
    {
      description:'Helpline Numbers of Court Masters/ Court Modarators for 15.03.23',
      date:'18/mar/2023'
    }
    
  ]


  const leftLinkData = {
    header: "Related Links",
    data: [
      {
        url: "",
        text: "List of Meetings",
      },
      {
        url: "",
        text: "Notices and Key Highlights",
      },
    ]
  }

  return (
    <>
      <BasePage active_nav={7}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
              <LeftLinkPanel data={leftLinkData} />
              </div>
              <div className="col-9">
                <div className="right-panel">
                  <h3 className="common_text_color">Notice & Circulars</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Notice & Circulars
                  </p>
                  <div className="row filter_options">
                    <h6 className="common_text_color">Advance Filter</h6>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Search
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="serach.."
                        />
                        
                      </div>
                    </div>
                    <div className="col-2">

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Year
                        </label>
                      <select className="form-select">
                        <option defaultValue={'All'} >All</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                    </div>

                    <div className="col-2">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Date
                        </label>
                      <select className="form-select">
                        <option defaultValue={'All'} >All</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                    </div>
                    <div className="col-2">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" style={{visibility:'hidden'}}>
                          Date
                        </label><br/>
                      <button className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                  </div>


                  <div className="row all_list">

                    <TableWithActions data = {data}/>

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
  );
};
export default NoticeAndCirculars;
