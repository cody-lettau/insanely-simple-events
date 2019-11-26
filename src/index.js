const BrokerClient = require('./client');
const test1 = require('./test1');
const test2 = require('./test2');
const bclient = new BrokerClient();

let context = { foo: 'bar' };

console.log('Starting demo code. Events will start emitting shortly...');

bclient.on('test1event', (event) => {
    console.log('Index.js - test1event Received');
    console.log('>>> Context (t1e): ', context.foo);
    console.log('>>> Event data: ', JSON.stringify(event));
    console.log('\n\n');
}, context);

bclient.on('test2event', (event) => {
    console.log('Index.js - test2event Received');
    console.log('>>> Context (t2e): ', context.foo);
    console.log('>>> Event data: ', JSON.stringify(event));
    console.log('\n\n');
}, context);

test1.start();
test2.start();
