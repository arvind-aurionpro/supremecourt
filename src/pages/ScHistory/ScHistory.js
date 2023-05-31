import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
const ScHistory = () => {
  useEffect(()=>{
    setwebTitle('History')
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
        active:true
      },
      {
        url: "/FormerChiefJustices",
        text: "Former chief Justices",
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
                  <h3 className="common_text_color">History</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} History
                  </p>
                  

                  <div className="row">
                    <div className="col-sm-8">
                      <p>
                      Supreme Court of India came into existence on 26th January, 1950 and is located on Tilak Marg, New Delhi. The Supreme Court of India functioned from the Parliament House till it moved to the present building. It has a 27.6 metre high dome and a spacious colonnaded verandah. For a peek inside, you'll have to obtain a visitor's pass from the front office.
                      </p>
                      <p>
                      On the 28th of January, 1950, two days after India became a Sovereign Democratic Republic, the Supreme Court came into being. The inauguration took place in the Chamber of Princes in the Parliament building which also housed India's Parliament, consisting of the Council of States and the House of the People. It was here, in this Chamber of Princes, that the Federal Court of India had sat for 12 years between 1937 and 1950. This was to be the home of the Supreme Court for years that were to follow until the Supreme Court acquired its own present premises.
                      </p>
                    </div>
                    <div className="col-sm-4"></div>

                    <div className="col-sm-12">
                      <p>
                      The inaugural proceedings were simple but impressive. They began at 9.45 a.m. when the Judges of the Federal Court - Chief Justice Harilal J.Kania and Justices Saiyid Fazl Ali, M. Patanjali Sastri, Mehr Chand Mahajan, Bijan Kumar Mukherjea and S.R.Das - took their seats. In attendance were the Chief Justices of the High Courts of Allahabad, Bombay, Madras, Orissa, Assam, Nagpur, Punjab, Saurashtra, Patiala and the East Punjab States Union, Mysore, Hyderabad, Madhya Bharat and Travancore-Cochin. Along with the Attorney General for India, M.C. Setalvad were present the Advocate Generals of Bombay, Madras, Uttar Pradesh, Bihar, East Punjab, Orissa, Mysore, Hyderabad and Madhya Bharat. Present too, were the Prime Minister, other Ministers, Ambassadors and diplomatic representatives of foreign States, a large number of Senior and other Advocates of the Court and other distinguished visitors.
                      </p>
                      <p>
                      Taking care to ensure that the Rules of the Supreme Court were published and the names of all the Advocates and agents of the Federal Court were brought on the rolls of the Supreme Court, the inaugural proceedings were over and put under part of the record of the Supreme Court.


                      </p>
                      <p>
                      After its inauguration on January 28, 1950, the Supreme Court commenced its sittings in a part of the Parliament House. The Court moved into the present building in 1958. The building is shaped to project the image of scales of justice. The Central Wing of the building is the Centre Beam of the Scales. In 1979, two New Wings - the East Wing and the West Wing - were added to the complex. In all there are 19 Court Rooms in the various wings of the building. The Chief Justice's Court is the largest of the Courts located in the Centre of the Central Wing.
                      </p>
                      <p>
                      The original Constitution of 1950 envisaged a Supreme Court with a Chief Justice and 7 puisne Judges - leaving it to Parliament to increase this number. In the early years, all the Judges of the Supreme Court sat together to hear the cases presented before them. As the work of the Court increased and arrears of cases began to cumulate, Parliament increased the number of Judges from 8 in 1950 to 11 in 1956, 14 in 1960, 18 in 1978, 26 in 1986, 31 in 2009 and 34 in 2019 (current strength). As the number of the Judges has increased, they sit in smaller Benches of two and three - coming together in larger Benches of 5 and more only when required to do so or to settle a difference of opinion or controversy.


                      </p>
                      <p>
                      The Supreme Court of India comprises the Chief Justice and 33 other Judges appointed by the President of India. Supreme Court Judges retire upon attaining the age of 65 years. In order to be appointed as a Judge of the Supreme Court, a person must be a citizen of India and must have been, for atleast five years, a Judge of a High Court or of two or more such Courts in succession, or an Advocate of a High Court or of two or more such Courts in succession for at least 10 years or he must be, in the opinion of the President, a distinguished jurist. Provisions exist for the appointment of a Judge of a High Court as an Ad-hoc Judge of the Supreme Court and for retired Judges of the Supreme Court or High Courts to sit and act as Judges of that Court.
                      </p>
                      <p>
                      The Constitution seeks to ensure the independence of Supreme Court Judges in various ways. A Judge of the Supreme Court cannot be removed from office except by an order of the President passed after an address in each House of Parliament supported by a majority of the total membership of that House and by a majority of not less than two-thirds of members present and voting, and presented to the President in the same Session for such removal on the ground of proved misbehaviour or incapacity. A person who has been a Judge of the Supreme Court is debarred from practising in any court of law or before any other authority in India.
                      </p>
                      <p>
                      The proceedings of the Supreme Court are conducted in English only. Supreme Court Rules, 1966 and Supreme Court Rules 2013 are framed under Article 145 of the Constitution to regulate the practice and procedure of the Supreme Court.
                      </p>
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
export default ScHistory;
