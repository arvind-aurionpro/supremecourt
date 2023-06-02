const InputField = (props) => {
  const { type, placeholder, label,onchange,readonly,value} = props;
  return (
    <>

      <div className="form-group pe-2" >
        <label htmlFor="exampleInputEmail1">{label}</label>
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
