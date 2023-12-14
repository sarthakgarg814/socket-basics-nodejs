  

```markdown
Author:Sarthak Garg
Email: Sarthakgarg814@gmail.com

# UDP Server using Node.js with Nodemon

  

This is a basic UDP server implemented in Node.js that listens for messages on a specified port and IP address. The server script is configured to use Nodemon for automatic restarts during development.

  

## Prerequisites

  

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

  

- Nodemon: Install Nodemon globally using the following command:

  

```bash

npm install -g nodemon

```

  

## Usage

  

1. Clone this repository or download the `server.js` file to your local machine.

  

2. Open a terminal and navigate to the directory containing the script.

  

3. Install dependencies using the following command:

  

```bash

npm install

```

  

4. Run the server script with Nodemon using the following command:

  

```bash

nodemon server.js <port> <client_port>

```

  

Replace `<port>` with the desired port number for the server to listen on, and `<client_port>` with the port number of the UDP client.

  

5. Once the server is running, you can send messages to the server using standard input. Type a message and press Enter.

  

## Example

  

```bash

nodemon  server.js  3000  4000

```

  

This command starts the server on port 3000, and it expects messages from a client on port 4000. Nodemon will automatically restart the server when changes are detected in the script.

  

## How it works

  

- The server listens for incoming messages and logs the received messages along with the sender's IP address and port.

  

- The `process.stdin.on("data", ...)` event handler allows you to send messages to the server by typing them in the terminal and pressing Enter.

  

- Nodemon monitors changes in the script files and automatically restarts the server when changes are detected.

  

## Dependencies

  

- This script uses the Node.js `dgram` module for UDP socket communication.

  

- Nodemon is used as a development dependency for automatic server restarting.

  

## Notes

  

- Adjust the port numbers based on your requirements.

  

- This is a basic example and may need further modification for production use, such as error handling and security considerations.

  

```