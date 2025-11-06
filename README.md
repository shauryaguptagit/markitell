# Markitell - A Modern GPA Tracker

Markitell is a client-side GPA tracking application built with a modern, modular JavaScript architecture. It's designed to be a fast, user-friendly tool for students, allowing them to load predefined course templates, track their grades, and see real-time GPA calculations and performance alerts.

All data is saved securely in the browser's `localStorage`, meaning your grades are saved even after you close the tab.

---

## ✨ Features

* **📈 Real-Time GPA Calculation:** Automatically calculates and updates your GPA as you add or change grades.
* **📚 Course Templates:** Pre-load subjects and credits for common courses (like B.Tech CSE, BBA) to get started instantly.
* **✏️ In-Line Editing:** Easily update a subject's grade directly in the list without a separate "edit" button.
* **⚠️ Performance Alerts:** Get dynamic feedback based on your current GPA (e.g., "At risk!", "Excellent!").
* **💾 Local Persistence:** Uses `localStorage` to save all your subjects and grades, so your data is never lost on refresh.
* **🗑️ Delete Functionality:** Easily remove subjects you no longer need.
* **📱 Responsive Design:** A clean, mobile-first "Student Theme" that works on any device.

---

## 🛠️ Tech Stack

This project was built from scratch to "industry standard" by separating all concerns into different modules.

* **HTML5**
* **CSS3:** (Custom "Student Theme" with `Poppins` font, gradients, and a responsive layout)
* **JavaScript (ES6+):**
    * **JavaScript Modules:** The app is broken into four distinct modules for maintainability:
        * `main.js`: The main "conductor" that handles state and events.
        * `ui.js`: Manages all DOM manipulation (rendering, clearing).
        * `store.js`: Manages all communication with `localStorage`.
        * `calculator.js`: Handles all business logic (GPA calculation, alerts).
    * **DOM Manipulation**
    * **Event Delegation**
* **`localStorage`:** Used for client-side data persistence.

---

## 🚀 How to Run

No build process or server is required.

1.  Clone this repository.
2.  Open the `index.html` file in your favorite browser.

(For the best development experience, you can use the **Live Server** extension in VS Code.)