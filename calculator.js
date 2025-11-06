// calculator.js

export function calculateGPA(grades) {
    if (grades.length === 0) {
        return { gpa: '0.00', alert: 'Start by logging grades!', color: '#777777' };
    }

    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach(grade => {
        totalPoints += (grade.grade * grade.credits);
        totalCredits += grade.credits;
    });

    const gpa = (totalCredits === 0) ? 0 : (totalPoints / totalCredits);

    const { alert, color } = getAlertMessage(gpa);

    return { gpa: gpa.toFixed(2), alert, color };
}

function getAlertMessage(gpa) {
    if (gpa === 0) {
        return { alert: 'Add grades to see your GPA!', color: '#777777' };
    } else if (gpa < 7.0) {
        return { alert: 'At risk! Focus on your studies.', color: '#ff6b6b' }; // Red
    } else if (gpa < 8.5) {
        return { alert: 'Looking good! Keep it up.', color: '#333333' }; // Dark text
    } else {
        return { alert: 'Excellent! You\'re on fire!', color: '#4a90e2' }; // Blue
    }
}