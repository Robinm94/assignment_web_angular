# Angular User Registration Application

This project demonstrates a modern Angular 19 application with a focus on reactive forms, form validation, and user management.

## Project Overview

This application features:

- User registration with form validation
- API integration with JSONPlaceholder
- Modern Angular control flow syntax

## Components

### Navigation and Routing

The application includes a navigation system with the following routes:

- `/`: Home page - Basic welcome screen
- `/form`: User registration form
- `/api`: API data display from JSONPlaceholder

### User Registration Form Component

The core component implements a reactive form with:

- **Comprehensive Form Validation**
  - Name: Required, minimum 2 characters, letters only
  - Email: Required, valid email format
  - Phone: Required, 10-digit format
- **User Management**
  - Tracks all registered users in memory
  - Displays users in a list below the form
  - Uses modern Angular control flow syntax (@if, @for)

### API Component

Demonstrates integration with external APIs:

- Fetches post data from JSONPlaceholder
- Displays the first 10 posts
- Shows post ID, title, and body content

## Technologies Used

- **Angular 19.2.1**
- **Reactive Forms**: For robust form handling
- **HttpClient**: For API communication
- **Modern Control Flow**: Using @if and @for
- **Tailwind-style CSS Classes**: For styling components

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm package manager

### Installation and Setup

```bash
# Clone the repository (if applicable)
git clone <repository-url>

# Navigate to project directory
cd angular-assignment

# Install dependencies
npm install

# Start development server
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

## Building for Deployment

```bash
# Build for production
ng build
```

Vercel deployment link `https://assignment-web-angular.vercel.app/`

## Project Structure

The application is organized into:

- Standalone components
- Shared services
- Routing configuration
- Type definitions

## Additional Information

This project demonstrates Angular's component-based architecture with a focus on:

- Form validation techniques
- User data management
- Responsive design
- API integration
- Modern Angular syntax (Angular 19)
