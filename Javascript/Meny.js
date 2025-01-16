function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.clickable-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const url = cell.getAttribute('data-url');
            if (url) {
                window.location.href = url; // Navigate to the URL
            }
        });
    });
});