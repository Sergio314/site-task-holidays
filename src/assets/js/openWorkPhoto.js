const works = document.getElementsByClassName('work');
document.onkeydown = function (e) {
    e.key === 'Escape'? closePhoto(): false
};


for (let work of works) {

    work.onclick = function (event) {
        event.stopPropagation();
        const imageOfWork = document.querySelector('.imageOfWork');
        imageOfWork.src = `${work.querySelector('img').src}`;
        workPhotoClick();
    }
}

function workPhotoClick() {
    document.body.style.overflow = 'hidden';
    const workClick = document.querySelector('.workClick');
    workClick.style.display = 'flex';
    document.querySelector('.closeWorkImg ').onclick = closePhoto;
    workClick.onclick = function (event) {
        event.stopPropagation();
        if (workClick === event.target) {
            closePhoto();
        }

    }
}

function closePhoto() {
    document.body.style.overflow = 'unset';
    document.querySelector('.workClick').style.display = 'none';
}
