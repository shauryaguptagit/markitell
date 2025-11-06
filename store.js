// store.js

const STORAGE_KEY = 'markitell-grades';

export function getGrades() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveGrades(grades) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(grades));
}