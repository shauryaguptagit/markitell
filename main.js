// main.js

// --- IMPORTS ---
import { getGrades, saveGrades } from './store.js';
import { calculateGPA } from './calculator.js';
import { courseTemplates } from './templates.js'; // New template data
import {
    gradeForm,
    subjectNameInput,
    subjectCreditsInput,
    subjectGradeInput,
    gradesContainer,
    templateSelect,       // New UI element
    loadTemplateBtn,        // New UI element
    renderGrades,
    updateDashboard,
    clearForm
} from './ui.js';

// --- STATE ---
let grades = [];

// --- INITIALIZATION ---
function init() {
    grades = getGrades();
    renderGradesList();
    refreshDashboard();
    setupEventListeners();
}

function setupEventListeners() {
    gradeForm.addEventListener('submit', handleAddGrade);
    gradesContainer.addEventListener('click', handleDeleteGrade);
    
    // New listener for in-line grade changes
    // 'change' fires when the user clicks away after changing the value
    gradesContainer.addEventListener('change', handleUpdateGrade);

    // New listener for the template loader
    loadTemplateBtn.addEventListener('click', handleLoadTemplate);
}

// --- EVENT HANDLERS ---

function handleAddGrade(e) {
    e.preventDefault();

    const newGrade = {
        subject: subjectNameInput.value,
        credits: parseInt(subjectCreditsInput.value),
        grade: parseFloat(subjectGradeInput.value),
        id: Date.now()
    };

    grades.push(newGrade);
    saveAndRefresh();
    clearForm();
}

function handleDeleteGrade(e) {
    if (!e.target.classList.contains('delete-btn')) return;

    const idToDelete = parseInt(e.target.dataset.id);
    grades = grades.filter(grade => grade.id !== idToDelete);
    saveAndRefresh();
}

function handleUpdateGrade(e) {
    if (!e.target.classList.contains('grade-input')) return;

    const idToUpdate = parseInt(e.target.dataset.id);
    const newGradeValue = parseFloat(e.target.value);

    // Find the grade in our state and update it
    const gradeToUpdate = grades.find(grade => grade.id === idToUpdate);
    if (gradeToUpdate) {
        gradeToUpdate.grade = newGradeValue;
    }

    // Save and refresh the dashboard, but NOT the whole list
    saveGrades(grades);
    refreshDashboard();
}

function handleLoadTemplate() {
    const templateKey = templateSelect.value;
    if (!templateKey) return; // Do nothing if they selected "-- Select --"

    const templateSubjects = courseTemplates[templateKey];
    
    // Convert template subjects into our grade format
    grades = templateSubjects.map((sub, index) => ({
        subject: sub.subject,
        credits: sub.credits,
        grade: 0.0, // Default to 0
        id: Date.now() + index // Create unique IDs
    }));

    saveAndRefresh();
}

// --- HELPER FUNCTIONS ---

// Updates storage, re-renders the list, and refreshes the dashboard
function saveAndRefresh() {
    saveGrades(grades);
    renderGradesList();
    refreshDashboard();
}

// Only refreshes the GPA and alerts
function refreshDashboard() {
    const { gpa, alert, color } = calculateGPA(grades);
    updateDashboard(gpa, alert, color);
}

// Only re-draws the list of subjects
function renderGradesList() {
    renderGrades(grades);
}

// --- START THE APP ---
init();