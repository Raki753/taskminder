# TaskMinder – Task Management Dashboard (React)

A pixel-perfect Task Management Dashboard UI built using React, HTML, and pure CSS, inspired by the provided design reference.

This project focuses on UI accuracy, clean component structure, and simple state-based task flow without using any external UI libraries.

Features

📌 Pixel-perfect desktop UI

🧭 Fixed sidebar navigation

🔍 Top header with search, notification, and user avatar

📋 Task board with three columns:

To Do

In Progress

Done

➕ Create new tasks

✏️ Move tasks forward using Edit

🗑️ Delete tasks

🎨 Pure CSS styling (no frameworks)

⚛️ Built with React Functional Components & Hooks

| Action                 | Result                       |
| ---------------------- | ---------------------------- |
| **New task +**         | Adds a task to **To Do**     |
| **Edit (To Do)**       | Moves task → **In Progress** |
| **Edit (In Progress)** | Moves task → **Done**        |
| **Edit (Done)**        | Disabled / Hidden            |
| **Delete**             | Removes task permanently     |

Tech Stack

React (Functional Components)

useState for state management

HTML5

Pure CSS (Flexbox & Grid)

❌ No backend

❌ No UI libraries (MUI, Bootstrap, Tailwind, etc.)

❌ No drag & drop

src/
│── App.jsx            # Root layout
│── Sidebar.jsx        # Left navigation
│── Header.jsx         # Top header
│── TaskBoard.jsx      # Main task logic
│── Column.jsx         # Task column component
│── TaskCard.jsx       # Individual task card
│── styles.css         # Global styles
│── index.js           # Entry point



🚀 Getting Started
1️⃣ Clone the repository
(https://github.com/Raki753/taskminder.git).


cd taskminder

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm start


The app will run at:

http://localhost:3000



