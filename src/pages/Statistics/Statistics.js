import { useEffect } from "react";
import BasePage from "../../components/basepage/BasePage";
import StatisticsTile from "../../components/statisticsTile/StatisticsTile";
import { setwebTitle } from "../../utils/functions";
const Statistics = ()=>{
  useEffect(()=>{
    setwebTitle('Statistics')
  },[])
    return(
        <>
        <BasePage >

       <div className="dashboard_content row p-3">

        <div className="col-sm-6"><h6 className="common_text_color">Statistics</h6></div>
        <div className="col-sm-6"></div>
        <div className="row mt-4">

<div className="col-sm-6">

            <div className="row">

                <div className="col-sm-4">
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          State
                        </label>
                      <select className="form-select">
                        <option defaultValue={''}>All State</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                </div>
                <div className="col-sm-4">
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          District
                        </label>
                      <select className="form-select">
                        <option defaultValue={''}>All District</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                </div>
                <div className="col-sm-4">
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          SORT BY
                        </label>
                      <select className="form-select">
                        <option defaultValue={''}>Pending</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                </div>
            </div>
                    
            
           
        </div>
        </div>
        


        <div className="row">
          <div className="col-4 col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg1' number = '879879798' case = 'Civil Cases' isvisible={false}/>
          </div>
          <div className="col-4  col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg2' number = '79879798' case = 'Criminal Casess' isvisible={false}/>
          </div>
          <div className="col-4  col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg3' number = '875987979855' case = 'Total Cases'isvisible={false}/>
          </div>
          <div className="col-4  col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg4' number = '8759879798' case = 'Civil Cases More Than 1 Year'isvisible={true}/>
          </div>

          <div className="col-4  col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg5' number = '3234242432' case = 'Criminal Cases More Than 1 Year'isvisible={true}/>
          </div>

          <div className="col-4  col-lg-3">
          <StatisticsTile myclass = 'dashboard_tile_bg6' number = '12312414576' case = 'Cases More Than 1 Year' isvisible={true}/>
          </div>
        </div>

        
        </div>






<div className="bar_chart my-4">

<div className="row my-3 p-3">
  <div className="col-sm-4">
  <h6 className="common_text_color ">Data Via Chart</h6>

  </div>
  <div className="col-sm-6"></div>
<div className="col-sm-2">
                <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          SORT BY
                        </label>
                      <select className="form-select">
                        <option defaultValue={''}>All</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                      </div>
                </div>

</div>




<img src="/img/bar-chart.svg" style={{width:'99%'}}/>
</div>


        </BasePage>
       
        </>
    )
}
export default Statistics;