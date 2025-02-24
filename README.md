# CODE REVIEWER AI
<p>🚀 A full-stack code review tool built using React for the frontend and Express.js for the backend.🚀 AI-Powered Code Review Tool built with React, Express.js, and Google Generative AI to analyze and provide feedback on your code.

</p>

<h1>Features</h1>
<ul>
 <h2>AI-Powered Code Review</h2>
<li>Uses Google Generative AI to analyze code and provide suggestions & improvements.</li>
<li>Frontend (React 19 + Vite)</li>
<li>Code syntax highlighting with Prism.js</li>
<li>Markdown support via React Markdown</li>
<li>Responsive and lightweight UI</li>
<li>Backend (Node.js + Express.js)</li>
<li>Handles API requests for AI-based code analysis</li>
<li>Securely loads environment variables using dotenv</li>
<li>Uses CORS to allow cross-origin API calls</li>
</ul>

<h1>Tech Stack</h1>


Frontend	Backend	AI
React 19	Express.js	Google Generative AI
Vite	Node.js	
Prism.js	dotenv	
Axios	CORS	


<h1>Tech Installation & Setup</h1>

<h2>
  Clone the Repository
</h2>

git clone https://github.com/hassanshehzad1/Code_Reviewer.git
cd Code_Reviewer

cd Backend
npm install

node index.js

cd ../Frontend
npm install
npm run dev

<h2>Environment Variables</h2>

PORT=5000
GOOGLE_AI_API_KEY=your_api_key_here


Available Scripts
Inside Frontend:

npm run dev - Runs the frontend in development mode
npm run build - Builds the production-ready frontend
npm run preview - Previews the built frontend
Inside Backend:

node index.js - Starts the backend server


<h1>How the AI Works</h1>
<ul>
<li>User submits code for review via the frontend.</li>
<li>Backend sends the code to Google Generative AI.</li>
<li>AI analyzes the code and provides feedback.</li>
<li>Frontend displays AI-generated suggestions to improve the code.</li>
</ul>
