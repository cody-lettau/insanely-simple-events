const BrokerClient = require('./client');
const bclient = new BrokerClient();

const emitEvent = () => {
    let someData = {
        id: 2,
        date: (new Date()).toISOString()
    };

    bclient.emit('test2event', someData);
};

bclient.on('test1event', (event) => {
    console.log('test2.js - test1event Received');
    console.log('>>> Event data: ', JSON.stringify(event));
    console.log('\n\n');
});

const start = () => {
    setInterval(emitEvent, 5000);
};

module.exports = {
    start
};