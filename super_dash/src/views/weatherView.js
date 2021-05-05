import {Container, Row, Col} from "react-bootstrap";

function WeatherView(props) {
    const dayOne = props.weatherDays[0];
    const comingDays = [props.weatherDays[1], props.weatherDays[2], props.weatherDays[3]];
    return(<div className="weather-container weather-view">
            <Row className="weather-dayOne justify-content-around align-items-center">
                <Col className="justify-content-center dayOne-left">
                    <img className="weather-IconMedium" src={require('../assets/svg/weatherIcons/'+dayOne.Wsymb2+".svg").default} alt=""/>
                    <p className="weather-title">{dayOne.day}</p>
                </Col>
                <Col className="justify-content-around dayOne-right">
                    <Row className="justify-content-around">
                        <Col>
                            <p className="weather-title">Temp</p>
                        </Col>
                        <Col>
                            <p className="weather-text">{dayOne.t[0].toFixed(1)}°</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-around">
                        <Col>
                            <p className="weather-title">Rain</p>
                        </Col>
                        <Col>
                            <p className="weather-text">{dayOne.pmean[0].toFixed(1)} mm</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="weather-dayFollowing justify-content-between" >
                {comingDays.map((day, index) =>{
                    return (<Col className={"weather-dayCard day"+index} >
                        <Row className="justify-content-around">
                            <img className="weather-IconSmall" src={require('../assets/svg/weatherIcons/'+day.Wsymb2+".svg").default} alt=""/>
                        </Row>
                        <Row className="justify-content-around">
                            <p className="weather-title-small">{day.day}</p>
                            <p className="weather-text-small">{day.tMax}°</p>
                        </Row>
                    </Col>)
                })}
            </Row>
        </div>
)
}

export default WeatherView;
