# Desktop-App-Slidely-AI-Internship-Application-

Note: This project does not include the `node_modules` directory. Before running the backend server, make sure to run `npm install` in the `backend` directory to install the necessary dependencies.

Slidely Task 2 - Desktop App with Visual Basic and Express Server with TypeScript

This project is a Windows desktop application built with Visual Studio and Visual Basic, accompanied by a backend server built with Express and TypeScript. The application allows users to create new submissions and view existing submissions.

Features
- Create New Submission: Users can fill in details such as name, email, phone number, and a GitHub repo link.
- View Submissions: Users can navigate through all submitted forms with Next and Previous buttons.
- Keyboard Shortcuts: Ctrl + S submits the form on the Create New Submission page.

Additional Features
- Deletion of Submitted Forms: Users can delete previously submitted forms.
- Editing of Submitted Forms: Users can edit details of previously submitted forms.
- Styling of Forms: Forms are styled for a better user experience.
- Error Handling: Implement robust error handling mechanisms in both the frontend and backend to gracefully handle any unexpected errors or user inputs.
- Data Validation: Validate user inputs on the frontend to ensure they meet the required criteria (e.g., valid email format, non-empty fields) before submitting the form to the backend.
- Logging: Implement logging in the backend to record important events and errors, which can be useful for troubleshooting and monitoring the application's performance.
- Security: Implement security best practices, such as input sanitization, to protect against common vulnerabilities like SQL injection and XSS attacks.
- Testing: Write unit tests for critical components of your application to ensure they function as expected. Consider using frameworks like Jest for frontend testing and Jest or Supertest for backend testing.
- Documentation: Provide comprehensive documentation for developers who may work on the project in the future. Include information on the project structure, how to set up the development environment, and how to deploy the application.
- Deployment: Consider deploying your application to a cloud platform like Heroku or AWS for easier access and scalability. Include instructions on how to deploy the frontend and backend components.
- User Feedback: Implement features to gather feedback from users, such as surveys or feedback forms, to improve the application based on user input.
- Localization: If your application will be used by a global audience, consider implementing localization features to support multiple languages.
- Accessibility: Ensure your application is accessible to users with disabilities by following accessibility best practices and guidelines.

Frontend Development (Visual Basic)
- Main Form (MainForm.vb): Contains buttons for viewing submissions and creating new submissions.
- View Submissions Form (ViewSubmissionsForm.vb): Displays submission details with navigation buttons.
- Create Submission Form (CreateSubmissionForm.vb): Allows users to create new submissions with a stopwatch feature.

Backend Server (Express with TypeScript)
- Endpoints:
  - `/ping`: GET request that always returns True.
  - `/submit`: POST request with parameters for submitting a form.
  - `/read`: GET request with query parameter for reading a specific form submission.
- **Database:** Uses a JSON file (db.json) to store submissions.

Getting Started
1. Clone the repository.
2. Set up the frontend in Visual Studio.
3. Set up the backend by installing dependencies and running the server.
4. Run the desktop application.

Running the Backend Server
1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

SCREENSHOTS:


![SlidelyAITask Frontend](https://github.com/reddyharikrishna/Desktop-App-Slidely-AI-Internship-Application-/assets/104090204/ade8a4de-e074-40d5-8ea9-b80783b7ac03)

![SlidelyAITask Frontend 2](https://github.com/reddyharikrishna/Desktop-App-Slidely-AI-Internship-Application-/assets/104090204/ea2b0a23-1845-4ffb-bd23-96f85cbada20)

![Form Frontend](https://github.com/reddyharikrishna/Desktop-App-Slidely-AI-Internship-Application-/assets/104090204/e995bc7d-4488-413c-bfc4-80f0a1cc431e)



