export const formatTempererature = (temperature : number) : number => {
    const kelvin = 273.15
    return parseInt((temperature - kelvin).toString())
}