const StatisticsTile = (props) => {
  return (
    <>
      <div
        className={
          "dashboard_tile mt-5 mb-2 position-relative " + props.myclass
        }
      >
        {props.isvisible ? (
          <div className="tile_percentage">
            <span>79%</span>
          </div>
        ) : null}

        <div className="dashboard_tile_icon pb-2">
          <img src="/img/dashboard_tile_icon/casesicon.svg"  alt="casesicon"/>
        </div>
        <div className="dashboard_tile_numbers pb-2">
          <h4 className="common_text_color">{props.number}</h4>
        </div>
        <div>
          <div className="pb-2">{props.case}</div>
          <a className="" href="#">
            view all
          </a>
        </div>
      </div>
    </>
  );
};

export default StatisticsTile;
