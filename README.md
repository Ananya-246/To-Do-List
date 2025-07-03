🧾 **To-Do List**

The To-Do List Web Application is a full-stack task management tool that enables users to manage their daily tasks with additional fields for task description and due date. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and demonstrates clean architecture, API integration, and responsive design.

**Features**

1.Add tasks with optional description and due date
2.View, delete, and manage tasks in real-time
3.Mark tasks as completed using checkbox toggle
4.Responsive and user-friendly interface
5.RESTful API integration with MongoDB for persistent data storage

**Tech Stack**

 **Frontend**  : React.js, CSS, Axios 
 **Backend**   : Node.js, Express.js  
 **Database**  : MongoDB, Mongoose    
 **API** : REST, Axios          
 **Tools**    :Git, VS Code, GitHub 
 
**Installation and Usage**

1. Clone the repository
git clone https://github.com/Ananya-246/To-Do-List.git
cd To-Do-List

2. Setup backend
cd backend
npm install

 Create a .env file in backend/ with the following:

 MONGO_URI=your_mongodb_connection_string

 PORT=5000

Start the backend server
node index.js

3. Setup frontend
cd ../frontend
npm install
npm start
