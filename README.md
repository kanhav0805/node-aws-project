Hackr.io Clone
- This is a Hacker IO clone application developed using Next.js, designed to allow users to post links to informative documents for educational purposes. It integrates various AWS services for enhanced functionality and security.

Features
- User Registration with 2-Factor Authentication:
  - During registration, users are required to verify their email via a verification code sent through AWS SES.

- Secure Image Uploads with AWS S3:
  - Users can upload images alongside their posts, with images being stored securely and scalably in AWS S3.

- Email Notifications and Mass Email Sharing:
  - The app leverages AWS SES to send notifications and allows mass email sharing, providing a robust communication feature.

- Secure Authentication:
  - The application uses JWT (JSON Web Tokens) for secure authentication and session management, ensuring that user data and sessions are well-protected.

- Persistent User Sessions:
  - Utilizing local storage and cookies, user sessions remain persistent, providing a seamless experience across visits.

- Content Management:
  - Users can post links to educational resources, documents, or informative articles to share with others.

Technologies Used
- Frontend:
  - Next.js: For building the user interface and server-side rendering.
  - Bootstrap: For responsive UI design.
- Backend:
  - Express: For API management and routing.
  - MongoDB: As the database to store user information, posts, and other data.
  - AWS SES: For sending verification and notification emails.
  - AWS S3: For storing user-uploaded images.
- Authentication:
  - JWT: To manage secure user authentication.
  - 2-Factor Authentication via email.
- Database
  - MongoDB: Handles user accounts, posts, and related data efficiently, ensuring fast access and storage for all interactions within the app.
- Email and Notification System
  - AWS SES: Used for sending verification emails during registration and implementing mass email notifications for various updates.
