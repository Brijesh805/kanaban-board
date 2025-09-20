Dynamic Kanban Board

A simple, interactive Kanban board to help you organize and track tasks. This application allows you to create new tasks and move them between different columns using a drag-and-drop interface. All tasks are saved in your browser's local storage.
Features

    Add New Tasks: Easily create tasks with a title and description.

    Drag and Drop: Move tasks between To Do, In Progress, and Done columns.

    Local Storage: All your tasks are automatically saved and will be available the next time you visit.

    Modular JavaScript: The code is organized into separate modules for better maintainability.

File Structure

    index.html: The main HTML file that provides the structure of the Kanban board, including the task form and the three columns.

    style.css: The stylesheet for the application, responsible for the visual layout and design of the board and task cards.

    js/: This directory contains all the JavaScript modules.

        app.js: The main script that ties everything together. It handles form submissions, initializes the application, and manages the application's state by interacting with other modules.

        storage.js: A module that handles the loading and saving of tasks to and from the browser's localStorage.

        render.js: A module responsible for dynamically generating and updating the HTML for the task cards on the board.

        dragdrop.js: A module that implements the drag-and-drop functionality for moving task cards between columns.

How to Use

    Clone this repository or download the project files.

    Open the index.html file in your web browser.

    Use the form at the top to add a new task.

    Drag and drop tasks between the "To Do," "In Progress," and "Done" columns.

Technologies Used

    HTML5

    CSS3

    JavaScript ES6 Modules

Installation

This is a simple client-side application and does not require a build process.

    Clone the repository:

    git clone [https://github.com/YOUR_USERNAME/kanban-board.git](https://github.com/YOUR_USERNAME/kanban-board.git)

    Navigate to the project directory:

    cd kanban-board

    Open index.html in your favorite web browser.

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
