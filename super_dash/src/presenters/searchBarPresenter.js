import SearchBarView from "../views/searchBarView";
import React from 'react';

function SearchBarPresenter(props) {

    const [searchQuery, setSearchQuery] = React.useState("");

    function googleSearch(){
        window.location.href = "https://www.google.com/search?q="+searchQuery;
    }

    const enterButtonSearch = (event) => {
        if(event.code === 'Enter'){
            event.preventDefault()  // ignore native behavior
            googleSearch();       
        }
    }

    return <SearchBarView 
                onText={e=> setSearchQuery(e.target.value)}
                gSearch={()=> googleSearch()}
                buttonSearch={e=> enterButtonSearch(e)}
            />
}

export default SearchBarPresenter;