Wallet API
This project provides a simple Wallet API for user registration, authentication, and wallet management. Users can sign up, sign in, enable their wallets, check their wallet balance, and update (credit/debit) their wallet balance.

Features
User Sign-up: Register a new user with an email and password.
User Sign-in: Authenticate a user and issue a JWT token.
Enable Wallet: Activate a wallet for an authenticated user.
Get Wallet Balance: Retrieve the current wallet balance of an authenticated user.
Update Wallet Balance: Credit or debit the wallet balance securely, with validation.
Technologies Used
Node.js: Backend runtime.
Express.js: Web framework.
MongoDB: Database for user and wallet information.
JWT (JSON Web Token): Authentication mechanism.
Joi: Request data validation.
Swagger: API documentation.





Getting Started
Prerequisites
Node.js and npm installed
MongoDB installed or access to a MongoDB instance
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/wallet-api.git
Navigate to the project directory:




npm install
Set up environment variables. Create a .env file in the root of your project and add the following:

makefile
PORT=5000
MONGO_URI=<Your_MongoDB_URI>
JWT_SECRET=<Your_JWT_Secret>
Start the server:


npm start
The API will be available at http://localhost:5000.
