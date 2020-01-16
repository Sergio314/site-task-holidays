import noPhoto from "../../../images/noPhoto.png";

export default function createTeamPhoto(team) {
    const teamImageContainer = document.createElement('div');
    teamImageContainer.classList.add('teamImageContainer');

    const teamImage = new Image();
    teamImage.src = team.avatar;
    teamImage.alt = 'avatar';

    teamImage.onerror = () => {
        teamImage.src = noPhoto;
        teamImage.style.border = '1px solid black';

    };

    teamImageContainer.appendChild(teamImage);

    return teamImageContainer;
}
