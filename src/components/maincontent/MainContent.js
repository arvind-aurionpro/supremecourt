import Tiles from "../tiles/Tiles";
import ListOfMeeting from "../meetinglist/ListOfMeeting";
import NoticeHighlight from "../noticehighlight/NoticeHighlight";
import Calendar from "react-calendar";


const MainContent = () => {
  let fullDate = new Date();
  let date = fullDate.getDate();
  //let month = fullDate.getMonth()

  return (
    <div className="row pt-2 mainbody">
      <div className="col-sm-3 leftside">
        <div className="leftside_content">
          <h6 className="common_text_color" style={{paddingLeft:'11px'}}>List of Meetings</h6>
          <div className="mb-3">
            <ListOfMeeting
              date={date}
              month={"MAR"}
              listText={
                "It is a long established fact that a reader will be distracted "
              }
              url={"#"}
            />
          </div>
          <div className="mb-3">
            <ListOfMeeting
              date={date + 1}
              month={"MAR"}
              listText={
                "It is a long established fact that a reader will be distracted "
              }
              url={"#"}
            />
          </div>

          <div className="mb-3">
            <ListOfMeeting
              date={date + 2}
              month={"MAR"}
              listText={
                "It is a long established fact that a reader will be distracted "
              }
              url={"#"}
            />
          </div>

          <div className="mb-3">
            <ListOfMeeting
              date={date + 3}
              month={"MAR"}
              listText={
                "It is a long established fact that a reader will be distracted "
              }
              url={"#"}
            />
          </div>
        </div>

        <div className="leftside_content mt-3">
          <h6 className="common_text_color"  style={{paddingLeft:'11px'}}>Notice & key Highlight</h6>
          <marquee direction="up">
            <div className="mb-3">
              <NoticeHighlight
                listText={
                  "It is a long established fact that a reader will be distracted by the readable content "
                }
                url={"#"}
              />
            </div>
            <div className="mb-3">
              <NoticeHighlight
                listText={
                  "It is a long established fact that a reader will be distracted "
                }
                url={"#"}
              />
            </div>
            <div className="mb-3">
              <NoticeHighlight
                listText={
                  "It is a long established fact that a reader will be distracted "
                }
                url={"#"}
              />
            </div>
            <div className="mb-3">
              <NoticeHighlight
                listText={
                  "It is a long established fact that a reader will be distracted "
                }
                url={"#"}
              />
            </div>
          </marquee>
        </div>
      </div>

      <div className="col-sm-9 rightside">
        <div className="row">
          <div className="col-sm-4 pb-3">
            <Calendar />
          </div>
          <div className="col-sm-8 pb-3">
            <div className="row">
              <div className="col-sm-6 pb-3">
                <Tiles
                  icon="/img/tile_icons/judes-icon.svg"
                  url="/ChiefJusticeAndJudges"
                  text="Chief Justice & Judges"
                  tooltipsText="To know more about Hon'ble chief justice and judges and their profile, Click below !"
                />
              </div>
              <div className="col-sm-6 pb-3">
                <Tiles
                  icon="/img/tile_icons/live-streaming-icon.svg"
                  url=""
                  text="Live Streaming"
                  tooltipsText="To watch court proceedings of Constitution Bench Matters and Ceremonial Bench, Click here !"
                />
              </div>
              <div className="col-sm-6 ">
                <Tiles
                  icon="/img/tile_icons/e-commitee-icon.svg"
                  url=""
                  text="e-commitee"
                  tooltipsText="Do u want to redirect yourself to E-committee, Supreme Court of Indian official Website - Click below !"
                />
              </div>
              <div className="col-sm-6 ">
                <Tiles
                  icon="/img/tile_icons/e-filling-icon.svg"
                  url=""
                  text="e-filling & RTI"
                  tooltipsText="Want to E-fill your returns or raise a RTI rquest via Online RTI portal , Click Below !"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/important-links-icon.svg"
              url=""
              text="Important Links"
              tooltipsText="If you want to know more about Examination patterns and question papers, Ministry of Law & Justice, SCLSC, Parliament & Constituition of India then Click below !"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/judges-library-icon.svg"
              url=""
              text="Judges-Library"
              tooltipsText="Do you want to see library brochure,Catalogues, Current Journals & Journal holdings then Click below !"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/recruitments-icon.svg"
              url=""
              text="Recruitments"
              tooltipsText="To view advertisements, Online applications, Results, notices & Admit card for various examinations then click below !"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/statistics-icon.svg"
              url="/Statistics"
              text="Statistics"
              tooltipsText="To know about Summary of Types of Matters and pending mataters in SUPREME COURT OF INDIA till date, Click below !"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/tenders-icon.svg"
              url=""
              text="Tenders"
              tooltipsText="To view Notice Inviting Tenders , Please click here !"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/e-visitor-icon.svg"
              url=""
              text="E-visitor Pass"
              tooltipsText="Want to get your visitor pass online on single click, Click below !"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
