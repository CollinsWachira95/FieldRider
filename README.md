# FieldRider
TRACTOR TITAN WEB APPLICATION

Project Description
Tractor Titan is a web application designed to connect farmers and drivers, facilitating efficient tractor services for agricultural needs. The application allows farmers to request tractor services based on their land size and location, while drivers can view these requests and offer their services. It provides a seamless platform for agricultural service transactions, enhancing productivity and convenience for users.

Storyline
Day 1: Project Initiation and Setup
Objective: Defined the scope and requirements for the Tractor Titan web application.
Tasks:
1. Established project goals: connect farmers and drivers through a web platform.
2. Selected technologies: HTML/CSS/JavaScript for frontend, JSON Server for backend simulation.
3. Designed initial UI wireframes and discussed creative design elements.

Day 2: Frontend Development Kickoff
Objective: Implement the basic frontend structure and design elements.
Tasks:
1. Created HTML structure for the main page, including header, main image section, signup forms, and footer.
2. Styled the frontend using CSS, focusing on responsive design and creative enhancements.
3. Integrated JavaScript for dynamic form handling and UI interactions.

Day 3: Implementing Functionality and Interactivity
Objective: Add interactive features and backend simulation.
Tasks:
1. Implemented form functionality for farmers and drivers to submit service requests.
2. Configured JSON Server to simulate API responses for data storage and retrieval.
3. Developed JavaScript functions for form submission handling, data filtering, and tab navigation.

Day 4: Refinement and Bug Fixes
Objective: Refine UI/UX, address bugs, and optimize code.
Tasks:
1. Enhanced CSS for improved visual appeal and user experience.
2. Addressed form validation and submission issues.
3. Optimized JavaScript code for performance and readability.

Day 5: Final Touches and Documentation
Objective: Finalize the project and prepare for deployment.
Tasks:
1. Conducted thorough testing to ensure functionality across different browsers and devices.
2. Documented the project details, including README file creation.
3. Prepared for deployment and future enhancements.

ACCESSING THE PROJECT
To access the project and run it locally, follow these steps:

- Laptop Requirements
Operating System: Windows, macOS, or Linux
Web Browser: Latest version of Chrome, Firefox, or Edge
Node.js: Version 14 or higher
Git: Latest version
Step-by-Step Process
Clone the Repository:

Open your terminal or Git Bash.
1. Run the following command to clone the repository:
git clone git@github.com:CollinsWachira95/FieldRider.git

2. Navigate into the Project Directory:

3. Change to the project directory by running:
cd tractor-titan-app

4. Install Dependencies:
If the project requires any dependencies, you can install them using npm (Node Package Manager). Run:
npm install

5. Start the JSON Server:
The project uses json-server to simulate a backend. Install it globally if you haven't:
npm install -g json-server

6. Start the server with the provided db.json file:
json-server --watch db.json
Open the Project in a Code Editor:

7. Use any code editor like Visual Studio Code:

8. Run the Application:
Open the index.html file in your preferred web browser. You can right-click the file and select "Open with..." and choose your browser.

PROJECT FUNCTIONALITY
The Tractor Titan web application provides the following functionalities:

USER INTERFACE
1. Header: Displays the application name "Tractor Titan" with styled text.
2. Main Image: Shows an introductory image with overlay text that moves up slightly and displays letter by letter.
3. Tabs: Allows switching between "Farmer Sign Up" and "Driver Sign Up" forms.
4. Forms: Collects information from farmers and drivers. Farmers provide details like acres of land and price per acre, while drivers provide details like fuel cost.

JAVASCRIPT FUNCTIONALITIES
1. Form Submission: Handles form submissions for both farmers and drivers, sending the data to a JSON server.
2. Data Filtering: Filters farmers by location and displays the results.
3. Form Switching: Switches between the farmer and driver forms when the respective tab is clicked.

PROJECT REQUIREMENTS AND GUIDELINES
The Tractor Titan project adheres to the following requirements and guidelines:

1. HTML/CSS/JS Frontend: The project uses HTML, CSS, and JavaScript for the frontend.
2. Asynchronous Data Interaction: The application interacts with data asynchronously using JSON.
3. Single Page Application: The application runs on a single page with no redirects or reloads.
4. Event Listeners: Uses at least three distinct event listeners for handling user interactions.
5. Array Iteration: Implements array methods like map, forEach, and filter for data processing.
6. Good Coding Practices: Follows DRY principles and uses functions to abstract repetitive code.

