import BasePage from "../../components/basepage/BasePage";
import TableWithActions from "../../components/table_with_actions/TableWithActions";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
const CauseList = () => {
  const data = [
    {
      description:
        "Helpline Numbers of Court Masters/ Court Modarators for 15.03.23",
      date: "15/mar/2023",
    },
    {
      description:
        "Helpline Numbers of Court Masters/ Court Modarators for 15.03.23",
      date: "16/mar/2023",
    },
    {
      description:
        "Helpline Numbers of Court Masters/ Court Modarators for 15.03.23",
      date: "17/mar/2023",
    },
    {
      description:
        "Helpline Numbers of Court Masters/ Court Modarators for 15.03.23",
      date: "18/mar/2023",
    },
  ];

  const leftLinkData = {
    header: "Other Cause List",
    data: [
      {
        url: "#",
        text: "Court No",
      },
      {
        url: "#",
        text: "Judges Wise",
      },
      {
        url: "#",
        text: "Index",
      },
      {
        url: "#",
        text: "AOR",
      },
      {
        url: "#",
        text: "Party Name",
      },
      {
        url: "#",
        text: "Advance",
      },
      {
        url: "#",
        text: "Advance Single Judge",
      },
      {
        url: "#",
        text: "Single Judge",
      },
      {
        url: "#",
        text: "Chamber",
      },
      {
        url: "#",
        text: "Final Elimination",
      },
      {
        url: "#",
        text: "Terminal",
      },
      {
        url: "#",
        text: "Weekly",
      },
      {
        url: "#",
        text: "Terminal",
      },
      {
        url: "#",
        text: "Advance Elimination",
      },
      {
        url: "#",
        text: "Previous List",
      },
      {
        url: "#",
        text: "Vacation Advance",
      },
    ],
  };


  return (
    <>
      <BasePage active_nav={4}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <LeftLinkPanel data={leftLinkData} />
              </div>
              <div className="col-9">
                <div className="right-panel">
                  <h3 className="common_text_color">Cause List</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Cause List
                  </p>

                  <div className="filter_options">
                    <div style={{ width: "90%", display: "inline-block" }}>
                      <div className="row ">
                        <h6 className="common_text_color">Advance Filter</h6>

                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Hon'ble Court
                            </label>
                            <select className="form-select">
                              <option defaultValue={''}>Hon'ble Court</option>
                              <option value={1}>Hon'ble Court1</option>
                              <option value={2}>Hon'ble Court2</option>
                              <option value={3}>Hon'ble Court3</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Stage</label>
                            <select className="form-select">
                              <option defaultValue={''}>Miscellaneous</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Main/Supplementry
                            </label>
                            <select className="form-select">
                              <option defaultValue={''}>Main</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Cause List Date
                            </label>
                            <select className="form-select">
                              <option defaultValue={''}>DD-MM-YYYY</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{ width: "10%", display: "inline-block" }}>
                      <div className="row ">
                        <div className="col-12">
                        <h6 className="common_text_color" style={{visibility:'hidden'}}>Advance </h6>
                          <div className="form-group">
                            <label
                              htmlFor="exampleInputEmail1"
                              style={{ visibility: "hidden" }}
                            >
                              Date
                            </label>
                            <br />
                            <button className="btn btn-primary ms-1">Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive pt-5 pb-3">
                    <table className="couselist" style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <th colSpan={13}>
                            <center>CONSOLIDATED LIST</center>
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={5}>
                            <center>JUDGE</center>
                          </th>
                          <th colSpan={2} rowSpan={2}>
                            <center>CHAMBER</center>
                          </th>
                          <th colSpan={2} rowSpan={2}>
                            <center>SINGLE JUDGE</center>
                          </th>
                          <th colSpan={2} rowSpan={2}>
                            <center>REVIEW &amp; CURATIVE</center>
                          </th>
                          <th colSpan={2} rowSpan={2}>
                            <center>REGISTRAR</center>
                          </th>
                        </tr>
                        <tr>
                          <th colSpan={3}>
                            <center>MISCELLANEOUS</center>
                          </th>
                          <th colSpan={2}>
                            <center>REGULAR</center>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <center>Advance</center>
                          </th>
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>{" "}
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>
                          <th>
                            <center>MAIN</center>
                          </th>
                          <th>
                            <center>SUPPL.</center>
                          </th>
                        </tr>
                        <tr>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                17-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                                
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                17-03-2023
                              </a>
                            </center>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                            </center>
                          </td>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                20-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                21-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td />
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                21-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                21-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                21-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                21-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                22-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#"
                              >
                                22-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                23-03-2023
                              </a>
                              <center />
                            </center>
                          </td>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                23-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td>
                            <center>
                              <a
                                href="#" 
                              >
                                24-03-2023
                              </a>
                            </center>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>



                  <div className="row mt-3">
                    <div className="col-4">
                    <h6 className="common_text_color">Listing Notices</h6>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-2"><button className="btn common_text_color archive_button">ARCHIVE</button></div>
                  </div>


                  <div className="row all_list couse_list_table">
                    <TableWithActions data={data} />
                  </div>
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
export default CauseList;
