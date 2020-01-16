import {links} from "./links";

export default function createTeamSocialIcons(team) {
    const socialNetworkListContainer = document.createElement('div');
    socialNetworkListContainer.classList.add('socialNetworkList');

    if (Array.isArray(team.contacts)) {
        team.contacts.forEach(socialLink => {

            if (links.get(new URL(socialLink).host)) {
                const link = document.createElement('a');
                link.href = socialLink;
                const icon = document.createElement('i');
                link.appendChild(icon);
                socialNetworkListContainer.appendChild(link);
                icon.setAttribute('class', `${links.get(new URL(socialLink).host)}`)
            }

        });
    }

    return socialNetworkListContainer;
}
