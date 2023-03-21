const CommonFooter = (props) =>{
    const data = props.data;
    return(
        <>
       
            <div className="footer_content">
                <span>{data.header}</span>
                <ul className="pt-3">
                    {
                        data.list.map((currentList, index)=>{
                            return(
                                <li key={index}><a href={currentList.url} target={'_blank'}>{currentList.text}</a></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
         
        

        </>
    )
}
export default CommonFooter;