import BasePage from "../../components/basepage/BasePage";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
import InputField from "../../components/InputField/InputField";
import RadioButton from "../../components/radioButton/RadioButton";
import TextArea from "../../components/textarea/TextArea";
const Feedback = () => {
  useEffect(() => {
    setwebTitle("Feedback");
  }, []);

  const rowsData = [
    {
      label:
        "Did you find the information on the website page clear and easy to understand?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Were you able to navigate the website pages easily and find what you were looking for?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Did the design and layout of the website page appeal to you visually?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Did the website page effectively convey the purpose or message it intended to communicate?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Were the images, graphics, or multimedia elements on the website page relevant and engaging?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Did the website page provide the information or features you expected to find?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Is there any additional information or content you would like to see on the website page?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
    {
      label:
        "Did the website page meet your expectations in terms of providing a positive user experience?",
      radio: [
        { label: "Yes", checked: true },
        { label: "No", checked: false },
      ],
    },
  ];

  return (
    <>
      <BasePage active_nav={''}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="right-panel">
                  <h3 className="common_text_color">Feedback Form</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Feedback Form
                  </p>

                  <div className="row">
                    <div className="col-sm-3">
                      <InputField
                        type="text"
                        placeholder="Enter your full name"
                        label="Name"
                      />
                    </div>
                    <div className="col-sm-3">
                      <InputField type="date" placeholder="" label="Date" />
                    </div>
                    <div className="col-sm-3">
                      <InputField
                        type="email"
                        placeholder="Enter your email id"
                        label="Email ID"
                      />
                    </div>
                    <div className="col-sm-3">
                      <InputField
                        type="number"
                        placeholder="Enter your mobile number"
                        label="Mobile"
                      />
                    </div>
                  </div>

                  <div className="row mt-5">
                    <RadioButton
                      className={"col-sm-6 py-2"}
                      rowsData={rowsData}
                    />
                  </div>

                  <div className="row">
                    <div className="col-sm-6 py-2">
                      <div className="row">
                        <div className="col-1">{"9"}</div>
                        <div className="col-11">
                          {" "}
                          What is your overall impression of the site?
                        </div>

                        <div className="col-1 pt-3"></div>
                        <div className="col-11 pt-3">
                          <b>Informative </b>

                          <div class="ratings">
                            <i class="fa fa-star rating-color pe-2 star"></i>
                            <i class="fa fa-star rating-color pe-2 star"></i>
                            <i class="fa fa-star rating-color pe-2 star"></i>
                            <i class="fa fa-star rating-color pe-2 star"></i>
                            <i class="fa fa-star star"></i>
                          </div>

                          <div className="pt-3">
                            <b className="">Visual Pleasing </b>
                            <div class="ratings">
                              <i class="fa fa-star rating-color pe-2 star"></i>
                              <i class="fa fa-star rating-color pe-2 star"></i>
                              <i class="fa fa-star rating-color pe-2 star"></i>
                              <i class="fa fa-star rating-color pe-2 star"></i>
                              <i class="fa fa-star star"></i>
                            </div>
                          </div>

                          <div className="mt-3">
                            Attach document for any input/comments/reference
                            <div className="attach_file">
                              <i class="fa fa-paperclip" aria-hidden="true"></i>{" "}
                              Attach{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6"></div>

                    <div className="col-sm-9 more_information mt-3">
                      <TextArea label="Please add any comments you have for improving the website. We welcome suggestions on specific areas for improvements, features you would like to see added to the site, and examples of what you consider good websites." />
                    </div>

                    <div className="col-sm-12 mt-3">
                      <button className="btn submit w-25">Submit</button>
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
export default Feedback;
