const Table = (props) => {
    const {headers,tabledata} = props



  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            {
               headers.map((curentHeader,index)=>{
                return(
                    <th style={{verticalAlign:'top'}} scope="col" colspan={curentHeader.colspan} key={index}>{curentHeader.th}</th>
                )
               }) 
            }
            

          </tr>
        </thead>
        <tbody>

            {
                tabledata.map((curentTD,index)=>{
                    return(
                        <tr>
                        <th scope="row">{index + 1}</th>
            
                        {
                           curentTD.data.map((curentdata)=>{
                            return(
                                <td colspan={curentdata.colspan} key={index}>{curentdata.td}</td>
                            )
                           }) 
                        }
                      </tr>
                    )
                   
                    
                })
            }
         
    
        </tbody>
      </table>
    </>
  );
};

export default Table;
