import {Container, Row, Col} from "react-bootstrap";

function ExtendedWeatherView(props) {
    return(<div className="weather-view-extended">
        <Container className="weather-container">
            {props.weatherDays.map(day=>{
                return(<Row className="weather-row">
                    <Col className="weather-icon" sm="2">
                        <Row>
                            <img src={require('../assets/svg/weatherIcons/'+day.Wsymb2+".svg").default} alt=""/>
                        </Row>
                        <Row>
                            <p className="weather-title">{day.day}</p>
                        </Row>
                    </Col>
                    <Col className="weather-temp" sm="2">
                        <Row>
                            <p className="weather-title">Temp</p>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Max:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.tMax}°</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Mean:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.tMean}°</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="weather-rainfall" sm="2">
                        <Row>
                            <p className="weather-title">Rain</p>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Max:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.pmeanMax}mm</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Total:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.pmeanSum}mm</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="weather-wind" sm="2">
                        <Row>
                            <p className="weather-title">Wind</p>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Max:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.wsMax}m/s</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="weather-under-title">Mean:&#9;</p>
                            </Col>
                            <Col>
                                <p className="weather-value">{day.wsMean}m/s</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="weather-pressure" sm="2">
                        <Row>
                            <p className="weather-title">Pressure</p>
                        </Row>
                        <Row>
                            <p className="weather-value">{day.mslMean}hPa</p>
                        </Row>
                    </Col>
                </Row>)
            })}
        </Container>
    </div>)
}

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
