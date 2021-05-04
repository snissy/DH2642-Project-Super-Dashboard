function NewsView(props){
    return (<div className={"newsView " + props.isHidden}>
        <div className={"newsView-background"}>
            {props.newsItems.articles.map((item, index)=>{
                return (<div className={"newsView-card " +"cardId" + index} onClick={event => {props.askedNewsItem(index)}}>
                    <img className={"newsView-picture-small"} src={item.imgSrc}  alt={item.imgTitle}/>
                    <div className={"newsView-div-title"}>
                        <p className={"newsView-title"}>{item.title}</p>
                    </div>
                </div>)
            })}
        </div>
    </div>)
}

export default NewsView;