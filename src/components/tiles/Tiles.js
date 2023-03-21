import { Link } from "react-router-dom";

const Tiles = (props) => {
  return (
    <>
    
      <div className="tiles position-relative">
        {/* <span className="tooltiptext">{props.tooltipsText}</span> */}

        <div class="tooltip ">
          <p className="">{props.tooltipsText}</p>
        </div>

        <div className="tiles_child tile_icon">
          <img src={props.icon} alt={props.text}/>
        </div>
        <div className="tiles_child tile_text common_text_color">
          <span>{props.text}</span>
        </div>
        <div className="tiles_child tile_link">
          <Link to={props.url}>Know more..</Link>
        </div>
      </div>
    </>
  );
};

export default Tiles;
