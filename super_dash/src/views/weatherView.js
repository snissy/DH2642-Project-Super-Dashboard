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
    console.log(props.weatherDays)
    const dayOne = props.weatherDays[0];
    const comingDays = [props.weatherDays[1], props.weatherDays[2]];
    return(<div className="weather-view">
        <Container className="weather-container" >
            <Row className="weather-row">
                <Col className="weather-icon" >
                    <Row>
                        <img src={require('../assets/svg/weatherIcons/'+dayOne.Wsymb2+".svg").default} alt=""/>
                    </Row>
                    <Row>
                        <p className="weather-title">{dayOne.day}</p>
                        </Row>
                </Col>
                <Col className="weather-temp" >
                        <Row>
                            <p className="weather-title">Temp</p>
                        </Row>
                        <Row>
                            <p className="weather-value">{dayOne.tMax}°</p>
                        </Row>
                    </Col>
                <Col className="weather-rainfall" >
                        <Row>
                            <p className="weather-title">Rain</p>
                        </Row>
                        <Row>
                            <p className="weather-value">{dayOne.pmeanSum}mm</p>
                        </Row>
                    </Col>
            </Row>
            <Row className="weather-row">
                <Col>
                    <Col className="weather-icon" sm="1">
                        <Row>
                            <img src={require('../assets/svg/weatherIcons/'+comingDays[0].Wsymb2+".svg").default} alt=""/>
                        </Row>
                        <Row>
                            <p className="weather-title">{comingDays[0].day}</p>
                        </Row>
                    </Col>
                    <Col className="weather-temp">
                        <p className="weather-value">{comingDays[0].tMax}°</p>
                    </Col>
                </Col>
                <Col>
                    <Col className="weather-icon">
                        <Row>
                            <img src={require('../assets/svg/weatherIcons/'+comingDays[1].Wsymb2+".svg").default} alt=""/>
                        </Row>
                        <Row>
                            <p className="weather-title">{comingDays[1].day}</p>
                        </Row>
                    </Col>
                    <Col className="weather-temp">
                        <p className="weather-value">{comingDays[1].tMax}°</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>)
}

export default WeatherView;
