const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Event Emitter started.');
})

eventEmitter.emit('start')

eventEmitter.on('start', (time) => {
    console.log(`The meeting will start by ${time}`);
})

eventEmitter.emit('start', '1:30pm')

eventEmitter.on('greet', (name) => {
    console.log(`Hey ${name}`);
})

class MyCustomEmitter extends EventEmitter {
    constructor(){
        super()
        this.greeting = "Hello"
    }

    greet(name) {
        this.emit('greeting', `${this.greeting} ${name}`)
    }
}

const myCustomEmitter = new MyCustomEmitter()

myCustomEmitter.on('greeting', (input) => {
    console.log('Greeting event:', input);
})

myCustomEmitter.greet('Alaje')
 