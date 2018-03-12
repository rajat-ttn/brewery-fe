export function convertTempCelciusToFahrenheit (type, value){
    if(type === 'CELSIUS'){
        return parseFloat(value);
    } else {
        return ((parseFloat(value)*1.8) + 32)

    }
}