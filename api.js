// ===================================================
// Get random quote from (kanye by api)
// ===================================================
// ========== HTML ==========
/* 
<button onclick="loadQuotes()">Fresh Kanye</button>
<blockquote id="quote"></blockquote> 
*/

// ========== JS ==========
const loadQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}

// ===================================================
// Get & display random user Nmae & email from (randum user api)
// ===================================================
// ========== HTML ==========
/*
<div id="buddies"> </div>
*/

// ========== JS ==========
const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById("buddies");
    for(const buddy of buddies){
        // console.log(buddy.name.first, buddy.name.last,);
        const p = document.createElement("p");
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}
        `;
        buddiesDiv.appendChild(p);
    }
}

// ===================================================
// Get & display all countries info from (rest countries)
// ===================================================
// ========== HTML ==========
/*
<div id="countries"> </div>
*/

// ========== CSS ==========
// .country{
//     border: 2px solid tomato;
//     margin: 10px;
//     padding: 20px;
//     border-radius: 10px;
// }

// ========== JS ==========
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement("div");
        div.classList.add("country")
        // Country Name
        const h3 = document.createElement("h3");
        h3.innerText = country.name;
        div.appendChild(h3);
        // Countries Capital Name
        const p = document.createElement("p");
        p.innerText = country.capital;
        div.appendChild(p);

        countriesDiv.appendChild(div);
    })
}

// ===================================================
// Get & display all countries info more dynamically from (rest countries)
// ===================================================
// ========== HTML ==========
/*
<section>
    <h3>Country Details</h3>
    <div id="country-detail"></div>
</section>
<div id="countries"> </div>
*/

// ========== CSS ==========
// #countries{
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
// }
// .country{
//     border: 2px solid tomato;
//     margin: 10px;
//     padding: 20px;
//     border-radius: 10px;
// }
// img{
//     width: 200px;
// }

// ========== JS ==========
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement("div");
        div.classList.add("country")
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Show Details</button>
        `;

        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById("country-detail");
    countryDiv.innerHTML = `
        <h5>${country.name}</h5>
        <p>${country.population}</p>
        <img src="${country.flag}">
    `
}