import io from 'socket.io-client';
import API from '../config/endpoints';
import { TEMP_EVENT } from '../constants/textConstants';

//connect to socket on server.
const socket = io(API.ENDPOINT.BASE);

//export the socket subscribed function
export default function subscribeToUpdateTemperature(cb) {
    socket.on(TEMP_EVENT.CONTAINER_TEMPERATURE_CHANGE, data => cb(data));
}