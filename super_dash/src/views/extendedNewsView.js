function ExtendedNewsView(props){
    // TODO tillbaka knappen ska ha en symbol tycker jag.
    // ()=>{location.href = props.newsItem.href}

    return (<div className={"extended-newsView " + props.isHidden} >
        <div className={"newsView-background"}>
            <div className={"extended-newsView-navigation"}>
                <div className={"newsView-div-back newsButton"} onClick={e =>{props.goBack()}}>Back</div>
                <div className={"newsView-div-omniButton newsButton"} onClick={e => {props.goToOmni(props.newsItem.href)}}>To omni</div>
            </div>
            <div className={"extended-newsView-card"}>
                <div className={"extended-newsView-div-img-title"}>
                    <img className={"newsView-picture-medium"}
                         src={props.newsItem.imgSrc}
                         alt={props.newsItem.imgTitle}/>
                    <div className={"newsView-div-title"}>
                        <p className={"newsView-title"}>{props.newsItem.title}</p>
                    </div>
                </div>
                <div className={"newsView-div-text"}>
                    <p className={"newsView-text"}>{props.newsItem.text}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default ExtendedNewsView;