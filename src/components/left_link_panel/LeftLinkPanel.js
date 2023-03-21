import { Link } from "react-router-dom";
const LeftLinkPanel = (props) => {
  const data = props.data;
  return (
    <>
      <div className="left-link-panel">
        <h4>
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
                <li key={index}>
                 
                  <Link href={currentValue.url}>
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
