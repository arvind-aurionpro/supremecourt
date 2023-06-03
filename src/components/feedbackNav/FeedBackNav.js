import { Link } from "react-router-dom"

const FeedBackNav = () =>{

    return(
        <div className="feedback_nav" style={{textAlign:'center'}}>
        <Link to="/feedBack" >
          <span style={{paddingLeft:'5px'}}><small style={{color:'lightgray'}}>Share your</small> FeedBack </span>
         
        </Link>
  
      </div>

    )
}

export default FeedBackNav