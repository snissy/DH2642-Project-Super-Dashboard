import loadingIcon from "../../assets/svg/loadingIcon";
import loadingIconSmall from "../../assets/svg/loadingIconSmall";

function promiseNoData(promise, data, error, size) {
    
    let icon = loadingIcon;
    if (size === "small")
        icon = loadingIconSmall;

    // case 1: Promise is falsy. This means left side will evaluates to "no data" --> toRender is truthy
    // case 2: toRender is truthy because Promise is true but there is no data. Left side evaluates to false and right side to an html element with a gif --> toRender is truthy
    // case 3: Promise is truthy so !promise is falsy but error is truthy --> toRender is truthy
    // case 4: Promise is truthy --> left side false. Right side is false because there is data --> toRender is falsy
    const toRender = (!promise?"no data":error) || ((promise) && !data?(icon):!data);
    return toRender?<span>{toRender}</span>:toRender
}

export default promiseNoData;