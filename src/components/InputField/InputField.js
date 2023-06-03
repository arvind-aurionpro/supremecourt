const InputField = (props) => {
  const { type, placeholder, label,onchange,readonly,value,mandatory} = props;
  return (
    <>

      <div className="form-group pe-2" >
        <label htmlFor="inputEmail1">{label} </label> <small>{mandatory ?(<span className="" style={{color:'red'}}>*</span>
):null}</small>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          onChange = {onchange}
          readOnly = {readonly?readonly:false}
          value={value}
        />
      
      </div>
    </>
  );
};

export default InputField;
