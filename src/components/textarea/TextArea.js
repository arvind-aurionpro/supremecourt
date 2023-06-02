const TextArea = (props)=>{
    const {label, onchange} = props

    return(
        <>
       
        <div className="form-group">
    <label htmlFor="textarea">{label}</label>
    <textarea className="form-control mt-2" id="textarea" rows="3" onChange={onchange}></textarea>
  </div>
        </>
    )
}

export default TextArea;