export function convertTempCelciusToFahrenheit (type, value){
    if(type === 'CELSIUS'){
        return parseInt(value,10);
    } else {
        return ((parseInt(value,10)*1.8) + 32)

    }
}