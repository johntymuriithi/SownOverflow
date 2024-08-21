# Sown Overflow - Frontend
## Overview
Sown Overflow is a Q&A platform designed to help users ask questions, share knowledge, and collaborate. This `README `provides detailed information about the frontend implementation, including setup instructions, key features, and technical details.
## Features
* `Responsive Design:` User interface adapts seamlessly across different devices and screen sizes.
* `User Authentication: `Login and signup functionality with JWT integration.
* `Dynamic Content Rendering:` Questions and answers are dynamically rendered.
* `Role-Based Access Control: `Features are conditionally displayed based on the user's role (guest, authenticated user, admin).
* `Search and Filter:` Users can search for questions and filter by categories or tags.
## Technologies Used
* `Framework:` React.js
* `State Management:` Redux Toolkit
* `Styling:` Tailwind CSS
* `Build Tool:` Vite
* `Language:` TypeScript
* `API Integration:` Fetch API
## Setup Instructions
### Prerequisites
* Node.js 16+
* npm or Yarn
### Installation
1. Clone the Repository:
   ```
   git clone https://github.com/your-username/sown-overflow-frontend.git
    cd sown-overflow-frontend
   ```
2. Install Dependencies:
   ```
   npm install
   ```
3. Run the Application:
   ```
   npm run dev
   ```
The frontend will be available at `http://localhost:3000.`
## Project Structure
* `src/components/: `Reusable UI components.
* `src/store/: `Redux store configuration and slices.
* `src/styles/: `Global styles and Tailwind CSS configuration.
* `src/utils/: `Utility functions and helpers.
* `src/features/:` Contains feature-specific modules like authentication, question management, etc.
## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.
