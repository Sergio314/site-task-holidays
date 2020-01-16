export default function createTeamText(team) {
    const teamDescription = document.createElement('p');
    teamDescription.classList.add('teamDescription');
    teamDescription.innerText = team.description || '';

    return teamDescription;
}
