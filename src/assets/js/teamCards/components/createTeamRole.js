export default function createTeamRole(team) {
    const teamRole = document.createElement('h5');
    teamRole.classList.add('teamRole');
    teamRole.innerText = team.position || '';

    return teamRole;
}
