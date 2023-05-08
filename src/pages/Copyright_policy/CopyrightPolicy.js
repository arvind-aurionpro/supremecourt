import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import { setwebTitle } from "../../utils/functions";
import { useEffect } from "react";
const CopyrightPolicy = () => {
  useEffect(()=>{
    setwebTitle('Copyright Policy')
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
                        {">"} Copyright Policy
                      </p>
                      <h3
                        className="common_text_color"
                        style={{ textAlign: "center" }}
                      >
                        Copyright Policy
                      </h3>

                      <div className="contant my-4">
                        Material featured on Ministry of Social Justice and
                        Empowerment (MSJE) site may be reproduced free of charge
                        in any format or media without requiring specific
                        permission. This is subject to the material being
                        reproduced accurately and not being used in a derogatory
                        manner or in a misleading context. Where the material is
                        being published or issued to others, the source must be
                        prominently acknowledged. However, the permission to
                        reproduce this material does not extend to any material
                        on this site, which is identified as being the copyright
                        of a third party. Authorization to reproduce such
                        material must be obtained from the copyright holders
                        concerned. These terms and conditions shall be governed
                        by and construed in accordance with the Indian Laws. Any
                        dispute arising under these terms and conditions shall
                        be subject to the exclusive jurisdiction of the courts
                        of India. While adding the contents by content
                        contributor, there is a mechanism which checks if the
                        content is indigenous or taken from a third party
                        source. If the content is indigenous, it automatically
                        gets added and published on the website after reviewed
                        by content publisher or administrator. If it is from a
                        third party source, a disclaimer has to be provided by
                        the content contributor that the required copyright has
                        been obtained from the said third party source for
                        publishing the respective content.
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
export default CopyrightPolicy;
