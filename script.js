document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unitFrom = document.getElementById('unit-from').value;
    let unitTo = document.getElementById('unit-to').value;
    let result;

    if (unitFrom === 'Celsius' && unitTo === 'Fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (unitFrom === 'Fahrenheit' && unitTo === 'Celsius') {
        result = (temperature - 32) * 5/9;
    } else if (unitFrom === 'Celsius' && unitTo === 'Kelvin') {
        result = temperature + 273.15;
    } else if (unitFrom === 'Kelvin' && unitTo === 'Celsius') {
        result = temperature - 273.15;
    } else if (unitFrom === 'Fahrenheit' && unitTo === 'Kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (unitFrom === 'Kelvin' && unitTo === 'Fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        result = temperature;
    }

    document.getElementById('result').textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
});
