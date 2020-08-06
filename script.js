const countryName = document.getElementById('countryName');
const flag = document.getElementById('flag');
const country = document.getElementById('country');
const capital = document.getElementById('capital');
const demonym = document.getElementById('demonym');
const currency = document.getElementById('currency');
const countryCode = document.getElementById('countryCode');
const submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
    const cName = countryName.value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://restcountries.eu/rest/v2/name/${cName}?fullText=true`,true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.table(response);
            flag.src = response[0].flag;
            country.textContent = response[0].name;
            capital.textContent = response[0].capital;
            demonym.textContent = response[0].demonym;
            currency.textContent = response[0].currencies[0].name;
            countryCode.textContent = response[0].callingCodes[0];
        }

    }
    xhr.send();
    e.preventDefault();
})