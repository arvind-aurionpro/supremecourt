import Navigation from "../navigation/Navigation";
const Slider = () => {
  return (
    <>
    

      <div
        id="carouselExampleControls"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
       










       
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="/img/slider/sliding-banner1.png" alt='slider1' style={{ width: "100%" }} />
          </div>
          <div className="carousel-item active">
            <img src="/img/slider/sliding-banner2.png" alt='slider2' style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src="/img/slider/sliding-banner3.png" alt='slider3' style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src="/img/slider/sliding-banner4.png" alt='slider4' style={{ width: "100%" }} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row latest_upadte">
        <div className="col-2 text-end">
          LATEST UPDATES &nbsp;&nbsp;<span>|</span>
        </div>

        <div className="col-10 scroll">
          <marquee direction="left" >
            <a href="https://main.sci.nic.in/sci_accessibility/" target={'_blank'}> Questionnaire on Accessibility </a>
            &nbsp;|&nbsp;
            <a href="#"> Release of e-SCR portal of Supreme Court Of India </a>
            &nbsp;|&nbsp;
            <a href="#"> Release of e-SCR portal of Supreme Court Of India </a>
            &nbsp;|&nbsp;
            <a href="#"> Release of e-SCR portal of Supreme Court Of India </a>
            &nbsp;
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Slider;
