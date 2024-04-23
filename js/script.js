document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

/* Buscador */
function showSearch() {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.display = "block";
}

/* Buscar dentro de la página */
function searchText() {
    const searchTerm = document.getElementById("searchTerm").value;
    const elements = document.querySelectorAll("body *");

    let found = false;
    elements.forEach(function (element) {
        element.childNodes.forEach(function (child) {
            if (child.nodeType === 3) {
                const text = child.nodeValue;
                if (text.match(new RegExp(searchTerm, "i"))) {
                    found = true;
                    element.scrollIntoView();
                    element.style.backgroundColor = "yellow";
                    return false;
                }
            }
        });
        if (found) {
            return false;
        }
    });

    if (!found) {
        alert(`No se encontró "${searchTerm}"`);
    }
}