import React, {useEffect, useState} from "react";
import usePromise from "../../customHooks/promiseHook";
import promiseNoData from "../functionalPresenters/promiseNoDataPresenter";
import NewsView from "../../views/newsView";
import ExtendedNewsView from "../../views/extendedNewsView";
import NewsSource from "../../api/newsSource";

function NewsPresenter(props){

    const [askedDetails, setAskedDetails] = useState(null);
    const [detailedNews, setdetailedNews] = useState(0)

    const [promise, setPromise] = useState(null);

    useEffect(()=>{
        setPromise(NewsSource.getNewsItems())
    },[])

    const [data, error] = usePromise(promise);

    return(promiseNoData(promise, data , error) ||
        <div className="newsPresenter">
            <ExtendedNewsView isHidden = {askedDetails ? "": "active"}
                              newsItem = {data.articles[detailedNews]}
                              goBack={() => {setAskedDetails(false)}}
                              goToOmni={(newsLink)=>{window.open(newsLink, '_blank').focus();}}/>

            <NewsView isHidden = {!askedDetails ? "": "active"}
                      newsItems={data}
                      askedNewsItem={itemIndex =>{
                          setAskedDetails(true);
                          setdetailedNews(itemIndex);
            }}/>
        </div>
    )
}

export default NewsPresenter;
