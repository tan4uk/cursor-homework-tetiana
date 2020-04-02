const planets = document.getElementById('planets');
const characters = document.getElementById('characters');
const season = document.getElementById('season');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const input = document.getElementById('season');
const url = 'https://swapi.co/api/';
const queryParamsFilms = 'films/';
const queryParamsPlanets = 'planets/?page=';
let currentPage = 1;

const images = {
  'https://swapi.co/api/people/1/': './images/Luke_Skywalker.png',
  'https://swapi.co/api/people/2/': './images/C-3PO.png',
  'https://swapi.co/api/people/3/': './images/R2-D2.png',
  'https://swapi.co/api/people/4/': './images/Darth_Vader.png',
  'https://swapi.co/api/people/5/': './images/Leia_Organa.png',
  'https://swapi.co/api/people/6/': './images/Owen_Lars.png',
  'https://swapi.co/api/people/7/': './images/Beru_Whitesun_lars.png',
  'https://swapi.co/api/people/8/': './images/R5-D4.png',
  'https://swapi.co/api/people/9/': './images/Biggs_Darklighter.png',
  'https://swapi.co/api/people/10/': './images/Obi_Wan_Kenobi.png',
  'https://swapi.co/api/people/12/': './images/Wilhuff_Tarkin.png',
  'https://swapi.co/api/people/13/': './images/Chewbacca.png',
  'https://swapi.co/api/people/14/': './images/Han_Solo.png',
  'https://swapi.co/api/people/15/': './images/Greedo.png',
  'https://swapi.co/api/people/16/': './images/Jabba_Desilijic_Tiure.png',
  'https://swapi.co/api/people/18/': './images/Wedge_Antilles.png',
  'https://swapi.co/api/people/19/': './images/Jek_Tono_Porkins.png',
  'https://swapi.co/api/people/20/': './images/Yoda.png',
  'https://swapi.co/api/people/21/': './images/Palpatine.png',
  'https://swapi.co/api/people/22/': './images/Boba_Fett.png',
  'https://swapi.co/api/people/23/': './images/IG-88.png',
  'https://swapi.co/api/people/24/': './images/Bossk.png',
  'https://swapi.co/api/people/25/': './images/Lando_Calrissian.png',
  'https://swapi.co/api/people/26/': './images/Lobot.png',
  'https://swapi.co/api/people/27/': './images/Ackbar.png',
  'https://swapi.co/api/people/28/': './images/Mon_Mothma.png',
  'https://swapi.co/api/people/30/': './images/Wicket_Systri_Warrick.png',
  'https://swapi.co/api/people/31/': './images/Nien_Nunb.png',
  'https://swapi.co/api/people/45/': './images/Bib_Fortuna.png',
  'https://swapi.co/api/people/81/': './images/Raymus_Antilles.png'
};

const info = document.getElementById('root');

const planetContainer = document.createElement('div');
planetContainer.setAttribute('class', 'planet-container');
info.appendChild(planetContainer);

const personContainer = document.createElement('div');
personContainer.setAttribute('class', 'person-container');
info.appendChild(personContainer);



// Get film characters info

async function getCharacters(season) {
  try {
    let response = await fetch(url + queryParamsFilms + season + '/');
    if (response.ok) {
      let jsonResponse = await response.json();
      const arr = jsonResponse.characters;
      arr.forEach(person => {
        getPerson(person);
      });
    }
  } catch (err) {
    err = document.createElement('error');
    err.textContent = `Request failed!`;
    info.appendChild(err);
  }
}


async function getPerson(url) {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let jsonResponse = await response.json();
      const personCard = document.createElement('div');
      personCard.setAttribute('class', 'person');

      const pic = document.createElement('img');
      pic.setAttribute('class', 'image');
      pic.src = `${getImage(jsonResponse.url)}`;

      const h1 = document.createElement('h1');
      h1.textContent = jsonResponse.name;

      const h2 = document.createElement('h2');
      h2.textContent = jsonResponse.birth_year;

      const h3 = document.createElement('h3');
      h3.textContent = jsonResponse.gender;

      personContainer.appendChild(personCard);

      personCard.appendChild(pic);
      personCard.appendChild(h1);
      personCard.appendChild(h2);
      personCard.appendChild(h3);
    }
  } catch (err) {
    err = document.createElement('error');
    err.textContent = `Request failed!`;
    info.appendChild(err);
  }
}


function getImage(key) {
  if (images[key] === undefined) {
    return './images/starwars_logo.png';
  } else {
    return images[key];
  }
}

function getInputValue() {
  const inputValue = document.getElementById('season').value;
  return inputValue;
}


// Get planets info

async function getPlanets(page) {
  try {
    let response = await fetch(url + queryParamsPlanets + page);
    if (response.ok) {
      let jsonResponse = await response.json();
      const planets = jsonResponse.results;
      planets.forEach(planet => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1');
        h1.textContent = planet.name;
        
        planetContainer.appendChild(card);

        card.appendChild(h1);
      });
    }
  } catch (err) {
    err = document.createElement('error');
    err.textContent = `Request failed!`;
    info.appendChild(err);
  }
}



// Eventlisteners

characters.addEventListener('click', () => {
  const numberOfSeason = getInputValue();
  getCharacters(numberOfSeason);
  personContainer.innerHTML = '';
  planetContainer.innerHTML = '';
  next.classList.remove('shown');
  previous.classList.remove('shown');
});

planets.addEventListener('click', () => {
  getPlanets(currentPage);
  personContainer.innerHTML = '';
  planetContainer.innerHTML = '';
  next.classList.add('shown');
  previous.classList.add('shown');
});

next.addEventListener('click', () => {
  if (currentPage != 6) {
    currentPage++;
    planetContainer.innerHTML = '';
    getPlanets(currentPage);
  }
});

previous.addEventListener('click', () => {
  if (currentPage != 1) {
    currentPage--;
    planetContainer.innerHTML = '';
    getPlanets(currentPage);
  }
});
