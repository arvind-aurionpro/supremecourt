
import Slider from "../components/slider/Slider";
import MainContent from "../components/maincontent/MainContent";
import BasePage from "../components/basepage/BasePage";
import { useEffect } from "react";
import { setwebTitle } from "../utils/functions";


const Home = () =>{
  useEffect(()=>{
    setwebTitle('Home')
  },[])
    return(
        <>
        <BasePage active_nav={1}>
        <div className="custom_container">
          <Slider />
          <MainContent />
        </div>
        </BasePage>
        
        </>
    )
}
export default Home;