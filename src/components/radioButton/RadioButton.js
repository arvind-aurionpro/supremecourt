const RadioButton = (props) => {
  const { className, rowsData,onchange } = props;
  return (
    <>
      {rowsData.map((data, index) => {
        return (
          <div className={className}>
            <div className="row">
              <div className="col-1">{index + 1}</div>
              <div className="col-11">{data.label}</div>
              <div className="col-1">{''}</div>
              {data.radio.map((currentRadio, radioIndex) => {
                return (
                  <div className="col-3 py-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={"radio" + index}
                        id={"radio" + index + "" + radioIndex}
                        defaultChecked = {currentRadio.checked}
                        value={currentRadio.value}
                        onChange={data.onchange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={"radio" + index + "" + radioIndex}
                      >
                        {currentRadio.label}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      })}
    </>
  );
};

export default RadioButton;
