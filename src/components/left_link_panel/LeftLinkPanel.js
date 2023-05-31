import { Link } from "react-router-dom";
const LeftLinkPanel = (props) => {
  const data = props.data;
  return (
    <>
      <div className="left-link-panel darkmode">
        <h4 className="darkmode">
          {data.icon ? (
            <img src={data.icon} style={{ width: "7%" }} alt={data.header} />
          ) : null}
          &nbsp;{data.header}
        </h4>
        <span></span>
        <ul>
          {data.data.map((currentValue, index) => {
            return (
              <>
                <li key={index} className={currentValue.active?'active_route':''}>
                 
                  <Link to={currentValue.url} className={'leftSideLink'}>
                  {currentValue.icon ? (
                    <img src={currentValue.icon} alt={currentValue.text} style={{ width: "7%" }} />
                  ) : null}
                  &nbsp;
                    {currentValue.text}
                    </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftLinkPanel;
