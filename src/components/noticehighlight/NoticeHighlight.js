const NoticeHighlight = (props) =>{
    return(
        <div className="row">

            <div className="col-11">
                <div className="meet_text">{props.listText}</div>
                <div>
                    <a href={props.url} className="tile_link">Know more..</a></div>
            </div>
            <div className="col-1">
               
            </div>
        </div>
    )
}
export default NoticeHighlight;