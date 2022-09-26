export function getToken() {
    const user = JSON.parse(localStorage.getItem('user'));

    return user?.token || null;
}
export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function removeUser() {
    localStorage.removeItem('user');
    return true;
}

export function savePage(pageName) {
    localStorage.setItem('page-name', pageName);
    return true;
}

export function getLastPage() {
    return localStorage.getItem('page-name');
}

export function saveLikedArticles(articlesArray) {
    localStorage.setItem('liked-articles', JSON.stringify(articlesArray));
    return true;
}

export function getLikedArticles() {
    return JSON.parse(localStorage.getItem('liked-articles')) || [];
}