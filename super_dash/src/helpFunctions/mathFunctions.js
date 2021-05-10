export const roundToDecimal = (number, nD= 1)=> {

    nD = Math.round(nD);
    const exp = Math.pow(10,nD)

    return Math.round(number*exp)/exp;
};
