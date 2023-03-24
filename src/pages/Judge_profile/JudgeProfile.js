import { useEffect } from "react";
import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import { darkMode } from "../../utils/functions";
const JudgeProfile = () =>{

    return(
        <>
        <BasePage darkMode = {true}>
        
        <main className="my-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="left-link-panel darkmode">
                <h4 className="darkmode">Chief Justice &amp; Judges</h4>
                <span />
                <ul>
                  <li><a href="#">Chief Justice &amp; Judges</a></li>
                  <li><a href="#">Former Chief Justice &amp; Judges</a></li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="right-panel darkmode">
                <h3>Judges Profile</h3>
                <p>
                  <span><Link to="/">Home</Link></span> &gt; <span><Link to="/ChiefJusticeAndJudges">Chief Justice &amp; Judges</Link></span>  &gt; Juges Profile
                </p>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-6 col-xl-4 judges-photos darkmode">
                    <img src="/img/judges/hon-judges.png" alt="Hon'ble Dr. Justice D.Y. Chandrachud" />
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-xl-8 profile-txt darkmode">
                    <div>
                      <h5 className="noleftbdr">Hon'ble Dr. Justice D.Y. Chandrachud</h5>
                      <p>
                        The Chief Justice of India
                        <span className="dob"><b>(DoB.)</b> 11-11-1959</span>
                      </p>
                      <p>
                        <b>Term of Office:</b>
                        <b>(DoA)</b> 13-05-2016
                        <b>(DoR)</b> 10-11-2024
                      </p></div>
                  </div>
                  <div className="col-12 py-5 profile-txt darkmode">
                    <h5>Education</h5>

                    <p className="pb-3 pleft-23"><span className="bullet">&#8226;</span> BA with Honours in Economics from St Stephen's College, New Delhi. LLB from Campus Law Centre, Delhi University.</p>
                    <h5>Qualification</h5>  
                    <p className="pb-3 pleft-23"><span className="bullet">&#8226;</span> Obtained LLM degree and a Doctorate in Juridical Sciences (SJD) from Harvard Law School, USA.</p>
                    <h5>Professional Career</h5>    
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Delivered lectures at the Australian National University, Harvard Law School, Yale Law School and the University of Witwatersrand, South Africa. Speaker at conferences organised by bodies of the United Nations including United Nations High Commission on Human Rights, International Labour Organisation and United Nations Environmental Program, the World Bank and Asian Development Bank.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Visiting Professor at Oklahoma University School of Law, USA.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Visiting Professor of Comparative Constitutional Law at the University of Mumbai.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Practised law at the Supreme Court of India and the Bombay High Court.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Visiting Professor of Comparative Constitutional Law at the University of Mumbai.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Practised law at the Supreme Court of India and the Bombay High Court.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Designated as Senior Advocate by the Bombay High Court in June 1998.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Additional Solicitor General of India from 1998 until appointment as a Judge.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Judge of the Bombay High Court from 29 March 2000 until appointment as Chief Justice of the Allahabad High Court. Director of Maharashtra Judicial Academy.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Chief Justice of the Allahabad High Court from 31 October 2013 until appointment to the Supreme Court.</p>
                    <p className="pleft-23"><span className="bullet">&#8226;</span> Appointed Judge of the Supreme Court of India on 13 May 2016.</p>
                  </div>
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

export default JudgeProfile;