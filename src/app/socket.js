
import io from 'socket.io-client';
import API from '../config/endpoints';

//connect to socket on server.
const socket = io(API.ENDPOINT.BASE);

//export the socket
export default socket;