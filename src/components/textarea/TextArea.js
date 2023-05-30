const TextArea = (props)=>{
    const {label} = props

    return(
        <>
       
        <div class="form-group">
    <label for="textarea">{label}</label>
    <textarea class="form-control mt-2" id="textarea" rows="3"></textarea>
  </div>
        </>
    )
}

export default TextArea;