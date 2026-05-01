# Aora

Aora is a mobile video-sharing community application built with React Native and Expo. The platform is designed for users to share, discover, and explore AI-related videos through a modern, responsive, and interactive mobile experience.

The application combines smooth animations, secure authentication, content discovery, media uploads, and a scalable backend powered by Appwrite.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Learn More](#learn-more)
- [License](#license)

---

## About the Project

Aora is an AI-focused video-sharing community app that allows users to browse, search, upload, and interact with video content. It is built using React Native and Expo to provide a smooth cross-platform mobile experience for both Android and iOS.

The app includes onboarding, authentication, video feeds, search functionality, media upload, profile management, and animated UI interactions. Appwrite is used as the backend service for user authentication, database management, and file storage.

---

## Tech Stack

### Mobile App

- React Native
- Expo
- Expo Router
- NativeWind
- React Native Animatable

### Backend

- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

### Development Tools

- Node.js
- npm
- Expo CLI
- Android Emulator, iOS Simulator, or Expo Go

---

## Features

### User Authentication

- Secure user registration and login
- Email-based authentication
- Protected user sessions
- Authorization flow for restricted screens

### Onboarding Experience

- Introductory onboarding screen
- Clear user guidance for getting started
- Mobile-friendly layout and navigation

### Video Feed

- Home screen displaying AI-related videos
- Animated video cards and interface elements
- FlatList-based rendering for efficient content display
- Pull-to-refresh support for loading the latest content

### Search and Discovery

- Full-text search functionality
- Search screen for finding specific videos
- Real-time content filtering and discovery
- Smooth navigation between search results and video content

### Content Creation

- Post creation screen
- Upload support for videos and images
- Media selection from the user device
- Form-based content submission

### User Profile

- Profile screen with user information
- View uploaded videos
- Display user activity and basic account insights
- Account-specific content management

### Navigation and Responsiveness

- Tab-based navigation
- File-based routing using Expo Router
- Responsive layouts across different device sizes
- Reusable and modular component structure

### User Interface Enhancements

- Smooth animations using React Native Animatable
- Utility-first styling with NativeWind
- Clean and consistent mobile UI design
- Scalable code organization for future development

---

## Getting Started

This project is built with Expo. To run it locally, make sure you have Node.js and npm installed on your machine.

### Prerequisites

Install the following tools before running the project:

- Node.js
- npm
- Expo Go mobile app, Android Emulator, or iOS Simulator
- Appwrite project for backend services

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/aora.git
cd aora
```

### 2. Install Dependencies

```bash
npm install
```

---

## Running the Application

Start the Expo development server:

```bash
npx expo start
```

After starting the server, you can open the application using one of the following options:

- Expo Go on a physical device
- Android Emulator
- iOS Simulator
- Development build

---

## Project Structure

```text
aora/
├── app/                  # Expo Router screens and navigation
├── assets/               # Images, icons, fonts, and static assets
├── components/           # Reusable UI components
├── constants/            # Shared constants and configuration values
├── lib/                  # Appwrite configuration and helper functions
├── scripts/              # Project utility scripts
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## Environment Variables

Create the required configuration file for your Appwrite setup and add your project credentials.

Example configuration values:

```env
APPWRITE_ENDPOINT=your_appwrite_endpoint
APPWRITE_PROJECT_ID=your_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_VIDEO_COLLECTION_ID=your_video_collection_id
APPWRITE_STORAGE_ID=your_storage_bucket_id
```

Make sure the Appwrite project is configured with authentication, database collections, and storage permissions before running the app.

---

## Usage

After running the application:

1. Open the app through Expo Go, an emulator, or a simulator.
2. Create a new account or log in with an existing account.
3. Browse AI-related videos from the home feed.
4. Use the search screen to discover specific content.
5. Upload a new video or image post.
6. View uploaded content and account details from the profile screen.

---

## Resetting the Project

To reset the starter project structure, run:

```bash
npm run reset-project
```

This command moves the starter code to the `app-example` directory and creates a new blank `app` directory for development.

---

## Future Enhancements

Potential improvements for future development include:

- Like and comment system
- User following and followers
- Video categories and tags
- Advanced recommendation system
- Notifications
- Admin content moderation
- Video analytics
- Offline caching
- Push notifications
- Improved media compression and upload progress tracking

---

## Learn More

Useful resources for working with Expo and React Native:

- Expo Documentation
- Expo Router Documentation
- React Native Documentation
- Appwrite Documentation
- NativeWind Documentation

---

## License

This project is licensed under the MIT License.
