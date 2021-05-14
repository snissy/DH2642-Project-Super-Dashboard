function NoCoordinatesView(props){
    return <div className={"noCoordinatesView"}>
        <div className={"text-information-container"}>
            <img className="noCoords-weatherIcon" src={require('../assets/svg/weatherIcons/4.svg').default} alt=""/>
            <p>Fetch your coordinates in the sidebar settings tab to get the weather</p>
        </div>
    </div>
}

export default NoCoordinatesView;