/**
 * By creating a Client, we are able to swap out the
 * specific Broker implementation. This is useful in the
 * case where we move the PubSub Broker to it's own Cloud
 * Service, instead of being internal.
 */

const Broker = require('./broker');

class BrokerClient {
    emit(eventName, ...args) {
        Broker.emit(eventName, ...args);
    }

    on(eventName, listener, context) {
        Broker.on(eventName, listener, context);
    }

    once(eventName, listener, context) {
        Broker.once(eventName, listener, context);
    }

    // Removes only first listener match
    off(eventName, listener, context) {
        Broker.off(eventName, listener, context);
    }

    // Removes all listeners matching (not just first)
    removeListener(eventName, listener, context) {
        Broker.removeListener(eventName, listener, context);
    }
}

module.exports = BrokerClient;
