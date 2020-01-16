
const headerContent = document.getElementsByClassName('headerContent')[0];
const header = document.getElementById('header');



window.onscroll = () => {
    if (window.scrollY > 20) {
        fixNavigation();
    }
    else {
        headerContent.style.padding = "40px 0";
        headerContent.style.borderBottom = "1px solid rgba(255, 255, 255, 0.15)";
        header.style.background = "none";
    }


};

window.onload = () => {
    if (window.scrollY > 20) {
        fixNavigation();
    }
};

function fixNavigation() {
    headerContent.style.padding = "25px 0";
    headerContent.style.borderBottom = "none";
    header.style.backgroundColor = "#292C47";
}
