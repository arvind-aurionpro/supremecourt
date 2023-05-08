import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import { setwebTitle } from "../../utils/functions";
import { useEffect } from "react";
const AccessbilityStatement = () => {
  useEffect(()=>{
    setwebTitle('Accessibility Statement')
  },[])
  return (
    <>
      <BasePage>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="right-panel">
                  <div className="row">
                    <div className="col-12">
                      <p>
                        <span>
                          <Link to="/">Home</Link>
                        </span>{" "}
                        {">"} Accessibility Statement
                      </p>
                      <h3
                        className="common_text_color"
                        style={{ textAlign: "center" }}
                      >
                        Accessibility Statement
                      </h3>

                      <div className="contant my-4">
                        We are committed to ensure that the Ministry of Social
                        Justice's website is accessible to all users
                        irrespective of device in use, technology or ability. It
                        has been built, with an aim, to provide maximum
                        accessibility and usability to its visitors. As a result
                        this website can be viewed from a variety of devices
                        such as Desktop / Laptop computers, web-enabled mobile
                        devices; wap phones; PDAs, etc. We have put in our best
                        efforts to ensure that all information on this website
                        is accessible to people with disabilities. For example,
                        a user with visual disability can access this website
                        using assistive technologies, such as screen readers and
                        screen magnifiers. We also aim to be standards compliant
                        and follow principles of usability and universal design,
                        which should help all visitors of this website. This
                        website is designed using HTML 4.01 Transitional to meet
                        Guidelines for Indian Government Websites and also
                        adheres to level AA of the Web Content Accessibility
                        Guidelines (WCAG) 2.0 laid down by the World Wide Web
                        Consortium (W3C). Part of the information in the website
                        is also made available through links to external
                        Websites. External Websites are maintained by the
                        respective departments who are responsible for making
                        these sites accessible. Ministry of Social Justice is
                        working towards making its website accessible for
                        persons with disabilities, however currently Portable
                        Document Format (PDF) files are not accessible. In
                        addition, information provided in Hindi language is also
                        not accessible. If you have any problem or suggestion
                        regarding the accessibility of this website, please
                        write to Us to enable us to respond in a helpful manner.
                        Do let us know the nature of the problem along with your
                        contact information. In addition, you can request for
                        information in alternate accessible format, such as
                        Braille, audio etc by
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </main>
      </BasePage>
    </>
  );
};
export default AccessbilityStatement;
