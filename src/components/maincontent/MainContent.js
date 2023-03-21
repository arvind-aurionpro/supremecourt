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
                  tooltipsText="Chief Justice & Judges"
                />
              </div>
              <div className="col-sm-6 pb-3">
                <Tiles
                  icon="/img/tile_icons/live-streaming-icon.svg"
                  url=""
                  text="Live Streaming"
                  tooltipsText="Live Streaming"
                />
              </div>
              <div className="col-sm-6 ">
                <Tiles
                  icon="/img/tile_icons/e-commitee-icon.svg"
                  url=""
                  text="e-commitee"
                  tooltipsText="e-commitee"
                />
              </div>
              <div className="col-sm-6 ">
                <Tiles
                  icon="/img/tile_icons/e-filling-icon.svg"
                  url=""
                  text="e-filing & RTI"
                  tooltipsText="e-filing & RTI"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/important-links-icon.svg"
              url=""
              text="Important Links"
              tooltipsText="Important Links"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/judges-library-icon.svg"
              url=""
              text="Judges-Library"
              tooltipsText="Judges-Library"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/recruitments-icon.svg"
              url=""
              text="Recruitments"
              tooltipsText="Recruitments"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/statistics-icon.svg"
              url="/Statistics"
              text="Statistics"
              tooltipsText="Statistics"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/tenders-icon.svg"
              url=""
              text="Tenders"
              tooltipsText="Tenders"
            />
          </div>
          <div className="col-sm-4 pb-3">
            <Tiles
              icon="/img/tile_icons/e-visitor-icon.svg"
              url=""
              text="E-visitor Pass"
              tooltipsText="e-visitor Pass"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
