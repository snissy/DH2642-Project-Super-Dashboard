import Clock from "../views/clockView";

function ClockPresenter(props) {
    return <Clock time={props.time}
                    updateTime ={props.updateTime}/>
}

export default ClockPresenter;