# BlueBird API

A robust backend API for a Twitter-like social media platform, built with Node.js, Express, and MongoDB. This API provides functionality for user management, posts (tweets), messaging, and file uploads using AWS S3.

## Features

- User Authentication & Authorization
  - JWT-based authentication
  - Google OAuth integration
  - Twitter OAuth integration
- Social Features
  - Create, read, update, and delete posts
  - Like and comment on posts
  - Follow/unfollow users
- Messaging System
  - Direct messaging between users
  - Conversation management
- File Upload
  - AWS S3 integration for media uploads
  - Secure signed URLs for file uploads

## Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:**
  - JWT (JSON Web Tokens)
  - Passport.js
  - Google OAuth 2.0
  - Twitter OAuth
- **File Storage:** AWS S3
- **Security:**
  - Helmet.js for security headers
  - CORS enabled
  - Morgan for HTTP request logging
  - bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- AWS Account (for S3 storage)
- Google OAuth credentials
- Twitter API credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_CONNECTION=your_mongodb_connection_string
AWS_BUCKET_REGION=your_aws_region
AWS_BUCKET=your_s3_bucket_name
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
TWITTER_CONSUMER_KEY=your_twitter_consumer_key
TWITTER_CONSUMER_SECRET=your_twitter_consumer_secret
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bluebird-api.git
cd bluebird-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in `.env`

4. Start the server:

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users

- `GET /api/user/:id` - Get user profile
- `PUT /api/user/:id` - Update user profile
- `DELETE /api/user/:id` - Delete user account
- `PUT /api/user/:id/follow` - Follow a user
- `PUT /api/user/:id/unfollow` - Unfollow a user

### Posts

- `POST /api/post` - Create a new post
- `GET /api/post/:id` - Get a specific post
- `PUT /api/post/:id` - Update a post
- `DELETE /api/post/:id` - Delete a post
- `PUT /api/post/:id/like` - Like/unlike a post
- `POST /api/post/:id/comment` - Comment on a post

### Messages

- `POST /api/message` - Send a message
- `GET /api/message/:conversationId` - Get messages for a conversation

### Conversations

- `GET /api/conversation` - Get user's conversations
- `POST /api/conversation` - Create a new conversation

### File Upload

- `GET /api/s3url` - Get a signed URL for S3 upload

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Secure headers with Helmet.js
- CORS protection
- Rate limiting
- Input validation
- XSS protection

## Error Handling

The API implements comprehensive error handling for:

- Authentication errors
- Database errors
- File upload errors
- Invalid input validation
- Route not found errors

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
