toggleNav = () => {
    document.getElementById('header__nav').classList.toggle('hidden');
}

document.getElementById('ham').addEventListener('click', toggleNav);

const today = new Date();
document.getElementById('year').textContent = today.getFullYear();
const lastmodified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = document.lastModified;