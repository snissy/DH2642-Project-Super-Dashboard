import backArrow from "../assets/svg/newsIcons/BackArrow";
import omniArrow from "../assets/svg/newsIcons/OmniArrow";

function ExtendedNewsView(props){

    return (<div className={"extended-newsView " + props.isHidden} >
        <div className={"newsView-background"}>
            <div className={"extended-newsView-navigation"}>
                <div className={"newsView-div-back newsButton"} onClick={e =>{props.goBack()}}>
                    {backArrow}
                    <div className={"newsButton-text"}>
                        BACK
                    </div>
                </div>
                <div className={"newsView-div-omniButton newsButton"} onClick={e => {props.goToOmni(props.newsItem.href)}}>
                    <div className={"newsButton-text"}>
                        OMNI
                    </div>
                    {omniArrow}
                </div>
            </div>
            <div className={"extended-newsView-card"}>
                <div className={"newsView-div-title"}>
                    <p className={"newsView-title"}>{props.newsItem.title}</p>
                </div>
                <div className={"extended-newsView-div-img-text"}>
                    <div className={"extended-newsView-img-wrapper"}>
                        <img className={"newsView-picture-medium"}
                             src={props.newsItem.imgSrc}
                             alt={props.newsItem.imgTitle}/>
                    </div>
                    <p className={"newsView-text"}>{props.newsItem.text}</p>
                </div>
            </div>
        </div>
    </div>)
}

export default ExtendedNewsView;