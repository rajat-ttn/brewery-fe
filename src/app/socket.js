import io from 'socket.io-client';

//connect to socket on server.
const socket = io('http://localhost:3001');

//export the socket
export default socket;
