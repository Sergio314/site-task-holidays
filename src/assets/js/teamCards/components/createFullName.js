export default function createFullName(team) {
    const fullName = document.createElement('h4');
    fullName.classList.add('fullName');
    fullName.innerText = team.name || '';

    return fullName;
}
