import * as helper from './helper';


describe('should convert physical quantity',()=> {
    let type = "CELSIUS",
        value = "4";

    it('should convert celsius to fahrenheit', () => {
        expect(helper.ConvertTempCelciusToFahrenheit(type,value)).toBeDefined();
    });

});
