const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height))
    {
        results.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `please give a valid weight ${weight}`
    } else
    {
        let bmiValue = Math.round((weight / ((height / 100) ** 2
        )) * 10) / 10;
        console.log(bmiValue);
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(`BMI: ${bmi}`);

        // results.innerHTML = `<span>${bmi}</span>`
        // Under Weight = Less than 18.6

        // Normal Range = 18.6 and 24.9

        //         Overweight = Greater than 24.9
        if (bmi < 18.6)
        {
            results.innerHTML = `<span>You are Under Weight, ${bmi}</span>`
            results.style.color = "yellow"
        } else if (bmi > 18.6 && bmi < 24.9)
        {
            results.innerHTML = `<span>You are Normal, ${bmi}</span>`
            results.style.color = "green"
        } else
        {
            results.innerHTML = `<span>You are Overweight, ${bmi}</span>`
            results.style.color = "red";
        }
    }
})