# Welcome to your Expo app 👋

# Student Learning App

An Android app for university students to watch their course videos, **download them, and keep studying offline**. Students log in with credentials created by an admin, and each student only sees the content for their own course and batch.

Built with **React Native**, **Node/Express**, **MongoDB** and a **React admin panel** (MERN stack).

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [How Access Works](#how-access-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Screenshots

| Login | Home | Courses |
|:---:|:---:|:---:|
| <img src="docs/screenshots/01-login.jpg" width="220" alt="Student login screen" /> | <img src="docs/screenshots/02-home.jpg" width="220" alt="Home screen with semesters" /> | <img src="docs/screenshots/06-courses.jpg" width="220" alt="Course list with progress" /> |

| Lessons | Offline Study | Profile |
|:---:|:---:|:---:|
| <img src="docs/screenshots/05-lessons.jpg" width="220" alt="Lesson list with completion status" /> | <img src="docs/screenshots/04-offline-study.jpg" width="220" alt="Offline study screen" /> | <img src="docs/screenshots/07-profile.jpg" width="220" alt="Student profile" /> |

## Features

- **Student login**: sign in with a Student ID and password (show/hide password toggle).
- **Admin-managed accounts**: student IDs and passwords are created by the admin in the admin panel, so there is no public sign-up.
- **Batch-based access**: students only see the videos for their own course and batch.
- **Semester view**: browse First Semester and Second Semester for the course.
- **Course progress**: every course shows a completion percentage with a *Start* / *Resume the Course* button.
- **Structured lessons**: courses are split into sections (e.g. *Introduction*, *Core Principles*) with lessons, and each lesson shows whether it is completed.
- **Video streaming**: watch lecture videos online.
- **Offline study**: download videos and watch them later without internet by choosing Semester, Module and Lesson.
- **Assignments tab**: a dedicated place for assignments.
- **Profile**: shows Student ID, course and batch, with logout.

## How Access Works

The Student ID encodes the batch and the course:

```
25MPA009
││ │  └── student number
││ └───── course code (MPA = Master of Public Affair)
└└─────── batch year code (25 = Batch 1, 26 = Batch 2)
```

| ID prefix | Batch |
|:---:|:---:|
| `25` | Batch 1 |
| `26` | Batch 2 |

A student with ID `25MPA009` can only watch **Master of Public Affair, Batch 1** videos.

## Tech Stack

| Part | Technology |
|---|---|
| Mobile app (Android) | React Native |
| Admin panel | React |
| Backend API | Node.js, Express |
| Database | MongoDB |

## Project Structure

```
your-repo/
├── mobile/        # React Native student app
├── admin/         # React admin panel
├── backend/       # Node.js + Express API
├── docs/
│   └── screenshots/
└── README.md
```

> Update the folder names above to match your repository.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- Android Studio or an Android device for the mobile app
- Git

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

### 3. Admin panel

```bash
cd admin
npm install
npm start
```

Use the admin panel to create courses, upload videos and add student accounts (Student ID and password).

### 4. Mobile app

```bash
cd mobile
npm install
npx react-native run-android
```

## Get started

### 5. Install dependencies

   ```bash
   npm install
   ```

### 6. Start the app

   ```bash
   npx expo start

Make sure the API base URL in the app points to your running backend.



1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

