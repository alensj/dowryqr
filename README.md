# DowryQR

DowryQR is a decentralized application built on the Theta Network. It allows users to generate and scan QR codes to facilitate donations using the Theta blockchain, promoting financial support for women.

## Features

- **User Registration**: Users can sign up with their email, name, gender, and Theta wallet address.
- **QR Code Generation**: Female users can generate QR codes linked to their Theta wallet for receiving donations.
- **QR Code Scanning**: Users can scan QR codes to make donations.
- **MetaMask Integration**: The application integrates with MetaMask for secure transactions.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js
- **Blockchain**: Theta Network, MetaMask
- **QR Code Generation**: `qrcode` library
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Variables**: `dotenv`

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- MetaMask extension for browser

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/dowryqr.git
    cd dowryqr
    ```

2. **Install Backend Dependencies**:

    ```sh
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**:

    ```sh
    cd ../frontend
    npm install
    ```

4. **Setup Environment Variables**:

    Create a `.env` file in the `backend` directory with the following content:

    ```plaintext
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    THETA_WALLET_ADDRESS=<your_theta_wallet_address>
    THETA_PRIVATE_KEY=<your_theta_private_key>
    ```

### Running the Application

1. **Start the Backend Server**:

    ```sh
    cd backend
    npm start
    ```

2. **Start the Frontend Server**:

    ```sh
    cd ../frontend
    npm start
    ```

3. **Open the Application**:

    Open your browser and navigate to `http://localhost:3000`

### Usage

- **Sign Up**: Create an account by providing your details.
- **Sign In**: Log in using your email and password.
- **Generate QR Code**: Female users can generate a QR code linked to their Theta wallet.
- **Scan QR Code**: Users can scan QR codes to make donations using MetaMask.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please open an issue or contact the repository owner.

