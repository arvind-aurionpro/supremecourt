const InputField = (props) => {
  const { type, placeholder, label } = props;
  return (
    <>
      {/* <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </div> */}
      <div className="form-group pe-2" >
        <label for="exampleInputEmail1">{label}</label>
        <input
          type={type}
          className="form-control"
          id=""
          
          placeholder={placeholder}
        />
      
      </div>
    </>
  );
};

export default InputField;
