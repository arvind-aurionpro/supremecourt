const TableWithActions = (props) => {
  const data = props.data;
  return (
    <>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr className="bg-light">
            <th scope="col"  className="py-3">S.No</th>
            <th scope="col"  className="py-3">Discription</th>
            <th scope="col"  className="py-3">Date</th>
            <th scope="col"  className="py-3">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currentData, index) => {
            return (
              <tr key={index}>
                <th  className="py-3" scope="row">{index+1}</th>
                <td className="py-3">
                  {currentData.description}
                </td>
                <td  className="py-3">{currentData.date}</td>
                <td  className="py-3">
                  <img src="/img/download.svg" alt="download" width={"20px"} style = {{cursor:"pointer"}}/>
                  &nbsp;
                  <img src="/img/share.svg" alt="share" width={"20px"} style = {{cursor:"pointer"}} />
                  &nbsp;
                  <img src="/img/print.svg" alt='print' width={"20px"}  style = {{cursor:"pointer"}}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableWithActions;
