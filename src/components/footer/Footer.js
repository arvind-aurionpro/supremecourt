import CommonFooter from "./CommonFooter";
import { Link } from "react-router-dom";
import SocialMedia from "../socialmedia/SocialMedia";
const Footer = () => {
  const content_1 = {
    header: "JUDGES & PROFESSIONALS",
    list: [
      { text: "Assets of Judges", url: "https://main.sci.gov.in/assets-judges" },
      { text: "Constitution", url: "https://main.sci.gov.in/constitution" },
      { text: "Former Chief Justices", url: "https://main.sci.gov.in/former-chief-justices" },
      { text: "Former Justices", url: "https://main.sci.gov.in/former-justices" },
      { text: "History", url: "https://main.sci.gov.in/history" },
      { text: "Jurisdiction", url: "https://main.sci.gov.in/jurisdiction" },
    ],
   

  };
  const content_2 = {
    header: "ABOUT COURT",
    list: [
      { text: "Amenities", url: "https://main.sci.gov.in/amenities" },
      { text: "AOR Examination", url: "https://main.sci.gov.in/aor_examination" },
      { text: "Officers / Officials", url: "https://main.sci.gov.in/officers-officials" },
      { text: "Officers Servant Rules", url: "https://main.sci.gov.in/officers-servant-rules-1961" },
      { text: "Organizational Structure", url: "https://main.sci.gov.in/organizational-structure" },
      { text: "Pay Scales", url: "https://main.sci.gov.in/payscales" },
      { text: "Telephone Directory", url: "https://main.sci.gov.in/telephone-directory" },
      { text: "Web infomation Manager", url: "#" },  
      
      
    ],
  };
  const content_3 = {
    header: "LEGAL RESOURCES",
    list: [
      { text: "Accounts", url: "https://main.sci.gov.in/principal-accounts-office" },
      { text: "Corona Steps", url: "https://main.sci.gov.in/corona_steps" },
      { text: "Grievance Management", url: "https://main.sci.gov.in/grievance" },
      { text: "Practice And Procedure", url: "https://main.sci.gov.in/publication" },
      { text: "SC Rules - 1966", url: "https://main.sci.gov.in/supreme-court-rules-1966" },
      { text: "SC Rules - 2013", url: "https://main.sci.gov.in/supreme-court-rules-2013" },
    ],
  };
  const content_4 = {
    header: "MEDIA AND PUBLIC",
    list: [
      { text: "Disclaimer", url: "https://main.sci.gov.in/disclaimer" },
      { text: "Employee Corner", url: "https://registry.sci.gov.in/our_people" },
      { text: "Forms", url: "https://main.sci.gov.in/forms" },
      { text: "Guidelines & Orders", url: "https://main.sci.gov.in/guidelines-orders" },
      { text: "India Code", url: "https://www.indiacode.nic.in/" },
      { text: "Senior Advocates Designation", url: "https://main.sci.gov.in/senior_advocates_designation" },
      { text: "WebCast", url: "https://webcast.gov.in/scindia" },
    ],
  };

  return (
    <>
    <div className=" top_footer darkmode" style={{textAlign:'center'}}>
     <span className=""><Link to="/accessbilityStatement">Accessibility Statement</Link></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Help</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Privacy Policy</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Hiperlinking Policy</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Contact Us</a></span>
     <span className="">&nbsp;|&nbsp; <Link to="/copyrightPolicy">Copyright Policy</Link></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Careers</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Terms & Conditions</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Feedback</a></span>
     <span className="">&nbsp;|&nbsp; <a href="#">Sitemap</a></span>
    </div>
      <div className="footer darkmode">
        {/* < SocialMedia /> */}
        <div className="row ">
          <div className="col-3">
            <CommonFooter data={content_1} />
          </div>
          <div className="col-3">
            <CommonFooter data={content_2} />
          </div>
          <div className="col-3">
            <CommonFooter data={content_3} />
          </div>
          <div className="col-3">
            <CommonFooter data={content_4} />
          </div>
        </div>
        <hr />
        <div className="row text-center py-5">
          <div className="col-12 position-relative">
            <p className="text-uppercase">Correspondence</p>
            <p>
              The Registrar, Supreme Court of India, Tilak Marg, New
              Delhi-110001
            </p>
            <p>
              e-mail : supremecourt@nic.in &nbsp; | &nbsp; Contact Details :
              011-23116400, 23116401, 23116402, 23116403
            </p>
            <div className="position-absolute digitalindia">
            <a target='_blank' href="https://www.india.gov.in/"><img src="/img/india-gov2.png" style={{width:"40%"}}/></a>&nbsp;&nbsp;
              <img src="/img/digitalindia.png" style={{width:"50%"}}/>
              </div>
          </div>
        </div>

        
      </div>
      <div className="row footer_end">
            <div className="col-2">
                <p className="text_color">Content managed by</p>
                <p>The Supreme Court of India</p>
            </div>
            <div className="col-3">
                <p className="text_color">Website designed, developed & hosted by</p>
                <p className="niclogo"><img src="/img/niclogo.png" className="" style={{width:'100%'}}/></p>
            </div>
            <div className="col-3">
                <p className="text_color">Other Links</p>
                <p><Link to="/">Feedback</Link> | <Link to="">Website polices</Link>  | <Link to="">Help</Link></p>
            </div>
            <div className="col-2">
                <p className="text_color">Last Updated on</p>
                <p>02/05/2023</p>
            </div>
            <div className="col-2">
                <p className="text_color">Total Visitors</p>
                <p>120000</p>
            </div>
        </div>
    </>
  );
};
export default Footer;
