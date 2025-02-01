# FAQ Management System with Multi-language Support

This project is a backend-only application for managing FAQs with multilingual support, built using Node.js, Express, and MongoDB. It includes features like dynamic FAQ translation, caching, and an API for managing FAQs in different languages.

## Features

- **Multilingual FAQ model** with language-specific translations.
- **WYSIWYG editor support** for managing formatted answers.
- **Cache mechanism** with Redis to store translations and improve performance.
- **REST API** for managing FAQs with language selection via query parameters (`?lang=`).
- **Google Translate API** integration for automating translations during object creation.

## Installation

To get the project running locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/divyanshucodes20/BharatFD-FAQ
2. Set up the project dependencies
Install the necessary project dependencies using npm:

npm install
3. Set up environment variables
Create a .env file in the root of the project and define the following environment variables:

# MongoDB URI for database connection
MONGO_URI=mongodb://localhost:27017/faq_management

# Redis URI for caching
REDIS_URI=redis://localhost:6379

# Google Translate API Key for translations
GOOGLE_API_KEY=your_google_translate_api_key
4. Start the server
Run the following command to start the server using nodemon:

npm run dev
The API will be available at http://localhost:3000.

5. Run the application
Once the server is running, you can use the API to manage FAQs and retrieve them in different languages.

API Usage
1. Get all FAQs
To retrieve all FAQs in a specific language, use the following API endpoint:

GET /api/v1/faqs/?lang=en
2. Create a new FAQ
To create a new FAQ, send a POST request with the necessary data:

POST /api/v1/faqs/
Content-Type: application/json
{
  "question": "How to install the system?",
  "answer": "<p>Install the system by following these steps...</p>"
}
3. Retrieve a specific FAQ by ID
To retrieve a specific FAQ by ID in a given language:

GET /api/v1/faqs/{id}/?lang=en

