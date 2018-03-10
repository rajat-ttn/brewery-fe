import io from 'socket.io-client';

//connect to socket on server.
const socket = io('http://localhost:3001');

export default function subscribeToUpdateTemperature(cb) {
    socket.on("CONTAINER_TEMPERATURE_CHANGE", data => cb(data));
}

