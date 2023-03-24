import BasePage from "../../components/basepage/BasePage";
import TableWithActions from "../../components/table_with_actions/TableWithActions";
import Pagination from "../../components/pagination/Pagination";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
const Dashboard = () => {
  const data = [
    {
      description:
        "An overview of the new scheme for automated listing of cases",
      date: "10/jul/2023",
    },
    {
      description:
        "NOTICE REGARDING CANCELLATION OF SPECIAL BENCHES IN HONBLE CHIEF JUSTICE COURT AND COURT NO.12 ON 16.03.2023 (THURSDAY) ",
      date: "16/mar/2023",
    },
    {
      description:
        "Notice regarding deletion of Chamber Matter listed on 16.3.23 in Court No. 17 (Item No.1710)",
      date: "17/mar/2023",
    },
    {
      description:
        "NOTICE REGARDING LISTING OF Writ Petition (Civil) No. 202 of 1995 ON 15.03.2023",
      date: "18/mar/2023",
    },
  ];

  const leftLinkData = {
    header: "Dashboard",
    icon:'/img/dashboard/dashboard-icon.svg',
    data: [
      {
        url: "#",
        text: "Case List",
        icon:"/img/dashboard/case-list-icon.svg"
      },
      {
        url: "#",
        text: "Personalization",
        icon:"/img/dashboard/personalization-icon.svg"
      },
      {
        url: "#",
        text: "Setting",
        icon:"/img/dashboard/settings-icon.svg"
      },
      {
        url: "#",
        text: "Logout",
        icon:"/img/dashboard/logout-icon.svg"
      },
    ],
  };

  return (
    <>
      <BasePage showlogout={true} active_nav={2}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <LeftLinkPanel data={leftLinkData} />
              </div>
              <div className="col-9">
                <div className="right-panel">
                  <h3 className="common_text_color">Dashboard</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Dashboard
                  </p>

                  <div className="dashboard_headeing pb-5 pt-2 row">

                    <div className="col-sm-4">
                      <Calendar />
                    </div>
                    <div className="col-sm-5">
                      <div className="casecontent">
                        <div className="row py-3">
                          <div className="col-sm-1 mb-3">
                            <img src="/img/arrow-right.svg" style={{width:'20px'}}/>
                          </div>
                          <div className="col-sm-11  mb-3">
                            <Link to=''>
                              24 cases in this notice - Tabular data
                            </Link>
                          </div>
                          <div className="col-sm-1  mb-3">
                          <img src="/img/arrow-right.svg" style={{width:'20px'}}/>
                          </div>
                          <div className="col-sm-11  mb-3">
                            <Link to=''>
                             
                                26 cases in appearence of party

                            </Link>
                          </div>
                          <div className="col-sm-1  mb-3">
                          <img src="/img/arrow-right.svg" style={{width:'20px'}}/>
                          </div>
                          <div className="col-sm-11  mb-3">
                            <Link to=''>
                            15 cases in objection

                            </Link>
                          </div>
                          <div className="col-sm-1  mb-3">
                          <img src="/img/arrow-right.svg" style={{width:'20px'}}/>
                          </div>
                          <div className="col-sm-11  mb-3">
                            <Link to=''>
                            20 cases in petioner evidence

                            </Link>
                          </div>
                          <div className="col-sm-1  mb-3">
                          <img src="/img/arrow-right.svg" style={{width:'20px'}}/>
                          </div>
                          <div className="col-sm-11  mb-3">
                            <Link to=''>
                            25 cases in cross examination

                            </Link>
                          </div>

                          
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">

                    
                      <div className="row dashboard_count_tile dashboard_tile_bg2 py-2 mb-2">
                        <div className="col-sm-8">
                          <p>Total Cases</p>
                          <h5 className="common_text_color">342342</h5>
                        </div>
                        <div className="col-sm-4 py-2">
                        <img src="/img/dashboard_tile_icon/casesicon.svg" alt='casesicon' style={{width:'100%'}}/>
                        </div>
                      </div>
                      <div className="row dashboard_count_tile dashboard_tile_bg1 py-2 mb-2">
                        <div className="col-sm-8">
                          <p>Closed Cases</p>
                          <h5 className="common_text_color">87687</h5>
                        </div>
                        <div className="col-sm-4 py-2">
                        <img src="/img/dashboard_tile_icon/casesicon.svg" alt="casesicon" style={{width:'100%'}}/>
                        </div>
                      </div>

                      <div className="row dashboard_count_tile dashboard_tile_bg3 py-2 mb-2">
                        <div className="col-sm-8">
                          <p>Ongoling Cases</p>
                          <h5 className="common_text_color">546465</h5>
                        </div>
                        <div className="col-sm-4 py-2">
                        <img src="/img/dashboard_tile_icon/casesicon.svg" alt="casesicon" style={{width:'100%'}}/>
                        </div>
                      </div>
                   
                    </div>
                    
                  </div>

                  <div className="row mt-3">
                    <div className="col-4">
                      <h6 className="common_text_color">Listing Notices</h6>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-2">
                      <button className="btn common_text_color archive_button">
                        ARCHIVE
                      </button>
                    </div>
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

export default Dashboard;
