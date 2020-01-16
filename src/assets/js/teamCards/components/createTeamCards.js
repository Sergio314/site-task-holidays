import createFullName from "./createFullName";
import createTeamPhoto from "./createTeamPhoto";
import createTeamRole from "./createTeamRole";
import createTeamText from "./createTeamText";
import createTeamSocialIcons from "./createTeamSocialIcons";

export function createTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('teamCard');

    const teamImage = createTeamPhoto(team);
    teamCard.appendChild(teamImage);

    const teamFullName = createFullName(team);
    teamCard.appendChild(teamFullName);

    const teamRole = createTeamRole(team);
    teamCard.appendChild(teamRole);

    const teamDescription = createTeamText(team);
    teamCard.appendChild(teamDescription);

    const teamSocialNetworks = createTeamSocialIcons(team);
    teamCard.appendChild(teamSocialNetworks);

    return teamCard;
}
