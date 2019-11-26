const BrokerClient = require('./client');
const bclient = new BrokerClient();

const emitEvent = () => {
    let someData = {
        id: 1,
        date: (new Date()).toISOString()
    };

    bclient.emit('test1event', someData);
};

bclient.on('test2event', (event) => {
    console.log('test1.js - test2event Received');
    console.log('>>> Event data: ', JSON.stringify(event));
    console.log('\n\n');
});

const start = () => {
    setInterval(emitEvent, 5000);
};

module.exports = {
    start
};
