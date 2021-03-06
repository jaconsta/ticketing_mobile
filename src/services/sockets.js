import socketIo from 'socket.io-client'

const SOCKET_SERVER = 'http://127.0.0.1:8080'

const socket = socketIo(SOCKET_SERVER)

export const subscribeToCounter = (cb) => {
    socket.on('current_count', message => cb(message))
}

export const subscribeToMyTurn = (cb) => {
  socket.on('your_turn', () => cb())
}

export const myAssignedTurn = (cb) => {
  socket.on('turn_booked', (turnNumber) => cb(turnNumber))
}

export const enqueueTurn = (cb) => {
  socket.emit('room_turn')
}

export const incrementCounter = (cb) => {
  socket.emit('increment_conter')
}
