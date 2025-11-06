// ui.js

// --- Get DOM Elements ---
export const gradeForm = document.getElementById('grade-form');
export const subjectNameInput = document.getElementById('subject-name');
export const subjectCreditsInput = document.getElementById('subject-credits');
export const subjectGradeInput = document.getElementById('subject-grade');
export const gradesContainer = document.getElementById('grades-container');

// New Template Elements
export const templateSelect = document.getElementById('template-select');
export const loadTemplateBtn = document.getElementById('load-template-btn');

// Private Dashboard Elements
const currentGpaEl = document.getElementById('current-gpa');
const alertMessageEl = document.getElementById('alert-message');

// --- UI Render Functions ---
export function renderGrades(grades) {
    gradesContainer.innerHTML = ''; // Clear the old list

    if (grades.length === 0) {
        gradesContainer.innerHTML = '<li class="empty-state">No subjects added. Load a template or add one manually.</li>';
        return;
    }

    grades.forEach(grade => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="grade-info">
                <span>${grade.subject} (Credits: ${grade.credits})</span>
            </div>
            <div class="grade-actions">
                <input 
                    type="number" 
                    class="grade-input" 
                    data-id="${grade.id}" 
                    value="${grade.grade.toFixed(1)}" 
                    min="0" max="10" step="0.1"
                >
                <button class="delete-btn" data-id="${grade.id}">Delete</button>
            </div>
        `;
        gradesContainer.appendChild(li);
    });
}

export function updateDashboard(gpa, alert, color) {
    currentGpaEl.textContent = gpa;
    alertMessageEl.textContent = alert;
    alertMessageEl.style.color = color;
}

export function clearForm() {
    gradeForm.reset();
}