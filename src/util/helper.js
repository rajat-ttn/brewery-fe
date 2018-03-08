export function ConvertTempCelciusToFahrenheit (type, value){
    if(type === 'CELSIUS'){
        return value;
    } else {
        return ((parseInt(value,10)*1.8) + 32)

    }
}