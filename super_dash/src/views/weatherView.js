import {Container, Row, Col} from "react-bootstrap";
import {maxFunc, meanFunc, mostFrequentFunc, sumFunc} from "../helpFunctions/arrayMethods";
import {days} from "../helpFunctions/usefuleConstants";

/*
    t =         C ,      Air temperature, Decimal number, one decimal
    wd =        degree,  Wind direction, Integer
    ws =        m/s,     Wind speed, Decimal number, one decimal
    msl =       hPa,     Air pressure, Decimal number, one decimal
    tcc_mean =  octas    Mean value of total cloud cover, Integer, 0-8
    pmean =     mm/h 	 Mean precipitation intensity, Decimal number, one decimal
    pcat =      category Precipitation category, Integer, 0-6
    Wsymb2 =    code 	 Weather symbol, Integer, 1-27
 */
const dataToUse =  new Set(["t","ws","wd","msl", "tcc_mean", "pmean", "pcat", "Wsymb2"]);

function WeatherDay(day="", date = ""){

    this.day = day;
    this.date = date;
    this.logedDays = [];

    dataToUse.forEach(p =>{
        this[p] = []
    })

    this.saveWeatherParams  = function(timeSeries){
        this.logedDays.push(timeSeries.validTime);
        timeSeries.parameters.forEach(param =>{
            if(dataToUse.has(param.name)){
                this[param.name].push(param.values[0]);
            }
        })
    }

    this.calcDisplayData  = function (){
        this["tMax"] = maxFunc(this["t"]).toFixed(2);
        this["tMean"]= meanFunc(this["t"]).toFixed(2);
        this["wsMean"] = meanFunc(this["ws"]).toFixed(2);
        this["wsMax"] = maxFunc(this["ws"]).toFixed(2);
        this["pmeanSum"] = sumFunc(this["pmean"]).toFixed(2);
        this["pmeanMax"] = maxFunc(this["pmean"]).toFixed(2);
        this["mslMean"] = meanFunc(this["msl"]).toFixed(2);
        this["Wsymb2"] = mostFrequentFunc(this["Wsymb2"])
    }
}

function pickDataPoints(timeSeries){
    /*
    * Jag ber om ursäkt för denna förfärliga kod. Men API skickar också sin data riktigt jobbigt.
    * TODO this could be moved to the actual api. Perhaps better to make this a promise there. I that is better.
    *  Want a disscussion around this. What is the best way
    * */
    const startHour = parseInt(timeSeries[0].validTime.substring(11,13))
    const nextDayIndex = 24-startHour

    let dayOne = new WeatherDay("Today", timeSeries[0].validTime.substring(0,10));
    let dayTwo = new WeatherDay("Tomorrow", timeSeries[nextDayIndex].validTime.substring(0,10));
    let dayThree = new WeatherDay("", timeSeries[nextDayIndex+24].validTime.substring(0,10),);

    dayThree.day = days[(new Date(dayThree.date)).getDay()];

    const toRender = [dayOne, dayTwo, dayThree];

    for (let i = 0; i < 6; i++) {
        dayOne.saveWeatherParams(timeSeries[i]);
    }
    for (let i = 6; i < 19 ; i++) { // Read the data for the second day
        dayTwo.saveWeatherParams(timeSeries[nextDayIndex+i])
    }

    let i = 0;
    let collectedAllPoints = false

    while(!collectedAllPoints && timeSeries[nextDayIndex+24+i].validTime.substring(0,10) === dayThree.date){
        // Read the data for the third day
        // OMG this is so ugly. SMHI api is a mess
        if(timeSeries[nextDayIndex+24+i].validTime.substring(11,13) ==="06"){
            while(!collectedAllPoints){
                dayThree.saveWeatherParams(timeSeries[nextDayIndex+24+i])
                collectedAllPoints = timeSeries[nextDayIndex+24+i].validTime.substring(11,13) ==="18"
                i++;
            }
            break;
        }
        i++;
    }

    toRender.forEach(day=> day.calcDisplayData())

    return [dayOne, dayTwo, dayThree]
}

function WeatherView(props) {

    const toRender = pickDataPoints(props.data.timeSeries);

    return(<div className="weather-view">
        <Container className="weather-container">
            {toRender.map(day=>{
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

export default WeatherView;
