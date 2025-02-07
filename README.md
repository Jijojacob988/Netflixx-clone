# **Netflix Clone - Full Stack Streaming App**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://funny-monstera-176f90.netlify.app/)

This is a **Full Stack Netflix Clone** built using **React, Firebase, and TMDB API**. It allows users to **browse movies, watch trailers, authenticate using Firebase, and fetch movie details from TMDB API**.

## 🚀 **Features**
- 🎥 **Movie Listing** from TMDB API
- 🔍 **Movie Search & Categories** (Popular, Top Rated, Upcoming, Now Playing)
- 🎬 **Trailer Player** using YouTube embed
- 🔐 **User Authentication** (Signup/Login with Firebase Auth)
- ☁️ **Firestore Database** for storing user data
- 🌍 **Fully Responsive Design** with Tailwind CSS
- 🎭 **Dynamic Background Banners & Movie Cards**

## 🛠️ **Tech Stack**
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Firebase, Firestore (NoSQL Database)
- **Authentication:** Firebase Auth (Google Sign-In, Email/Password)
- **API:** TMDB API (Movie Data Fetching)
- **Deployment:** Vercel & Firebase Hosting

## 📂 **Project Structure**
```
netflix-clone
├── client (Frontend - React)
│   ├── src
│   │   ├── components (Navbar, Hero, Movie Cards, Player, Footer)
│   │   ├── pages (Home, Login, Player)
│   │   ├── assets (Icons, Images, Fonts)
│   │   ├── App.jsx (Main App Component)
│   │   ├── index.js (Entry Point)
│   ├── public (Static Files)
│   ├── package.json
│
├── server (Firebase Backend)
│   ├── authentication (Firebase Auth Setup)
│   ├── firestore (User Database Config)
│   ├── api (TMDB API Fetching)
│
├── README.md
├── LICENSE
```

## 🏗️ **Installation & Setup**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/jijojacob988/netflix-clone.git
cd netflix-clone
```
### 2️⃣ **Install Dependencies**
```sh
npm install
```
### 3️⃣ **Set Up Firebase**
- Create a **Firebase Project** in [Firebase Console](https://console.firebase.google.com/)
- Enable **Firestore Database & Authentication**
- Get your Firebase config and create a `.env` file with:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ **Run the Application**
```sh
npm start
```
Now open **http://localhost:3000** to use the app.

## 🌐 **Live Demo**
🔗 **[Live Demo](https://funny-monstera-176f90.netlify.app/)**

## 🌐 **Deployment**
### **Frontend Deployment (Vercel)**
1. Push your project to GitHub.
2. Deploy the frontend using [Vercel](https://vercel.com/).

### **Backend Deployment (Firebase Hosting)**
1. Install Firebase CLI:
```sh
npm install -g firebase-tools
```
2. Login to Firebase:
```sh
firebase login
```
3. Initialize Firebase:
```sh
firebase init
```
4. Deploy:
```sh
firebase deploy
```

## 🤝 **Contributing**
Pull requests are welcome! Feel free to open issues for improvements or bug fixes.

## 📜 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Jijo Jacob**
