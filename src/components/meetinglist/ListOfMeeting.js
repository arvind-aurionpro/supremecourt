const ListOfMeeting = (props) =>{
    return(
        <div className="row">
            <div className="col-3">
                <div className="date_month date_bg">{props.date}</div>
                <div className="date_month month_bg">{props.month}</div>
            </div>
            <div className="col-9">
                <div className="meet_text">{props.listText}</div>
                <div>
                    <a href={props.url} className="tile_link">Know more..</a></div>
            </div>
        </div>
    )
}
export default ListOfMeeting;