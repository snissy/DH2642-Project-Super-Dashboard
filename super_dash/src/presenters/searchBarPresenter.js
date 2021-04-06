import SearchBarView from "../views/searchBarView";

function SearchBarPresenter(props) {
    return <SearchBarView 
                test={props.test}
                onText={e=> console.log(e.target.value)}
                onSearch={()=> console.log("User wants to search.")}
            />
}

export default SearchBarPresenter;