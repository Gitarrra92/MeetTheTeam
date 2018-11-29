import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
//import './lib/foundation-explicit-pieces';
$(document).foundation();

/* ===================== 
people.json script below 
===================== */

// get container element
const peopleContainer = document.getElementById("people")

// fetch data from json
fetch('./assets/img/people.json')
    .then(res => res.json())
    .then(data => renderPeople(data))
    .catch(err => renderError(err))

// render data on page
function renderPeople(data) {
    data.forEach(person => {
        let personDiv = document.createElement("div");
        personDiv.classList.add("cell", "small-12", "medium-6", "large-4", "grey-block");

        personDiv.innerHTML = `
            <img src="./assets/img/${person.image}" alt="person">
            <h2>${person.name}</h2>
            <h3>${person.jobTitle}</h3>
            <p>${person.description}</p>
            <a href="${person.profileUrl}" class="button">View details</a>
        `;

        peopleContainer.appendChild(personDiv)
    })
}

function renderError(err) {
    peopleContainer.innerHTML = 'Ups, something went wrong';
    console.log(err);
}
