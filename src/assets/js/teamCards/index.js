
import {loadJson} from '../fetchLoader.js';
import {createTeamCard} from "./components/createTeamCards.js";

const teamsContent = document.querySelector('.teamsContent');


loadJson('./data/employees.json')
    .then(teams => {
        teams.forEach(team => {
            teamsContent.appendChild(createTeamCard(team));
        })
    });
