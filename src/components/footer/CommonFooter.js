import { Link } from "react-router-dom";

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
                                <li key={index}><Link to={currentList.url} target={currentList.ownpage?'':'_blank'}>{currentList.text}</Link></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
         
        

        </>
    )
}
export default CommonFooter;