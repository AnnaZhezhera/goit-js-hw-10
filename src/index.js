import './css/styles.css';
import countryCard from './templates/country-template.hbs';

const DEBOUNCE_DELAY = 300;
const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

// app.set('view engine', 'hbs');

fetchCountries('peru').then(data => console.log(data));

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(country => {
      console.log(country);
      const markup = countryCard('peru');
      countryInfoEl.insertAdjacentHTML('beforeend', markup);
      console.log(markup);
    });
}

inputEl.addEventListener('input', onCountrySearchChange);

function onCountrySearchChange(event) {
  let input = event.target.value;
  console.log(input);
  fetchCountries(input);
}
