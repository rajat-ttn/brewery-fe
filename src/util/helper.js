// utility function to convert temperature from celsius to fahrenheit
export function convertTempCelciusToFahrenheit(type, value) {
    if (!value) return;
    if (type === 'CELSIUS') {
        return parseFloat(value);
    }
    return ((parseFloat(value) * 1.8) + 32);
}

export function isSafari(){
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};
