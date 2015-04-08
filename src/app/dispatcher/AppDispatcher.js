var Dispatcher = require('flux').Dispatcher;

// Create Dispatcher instance
var AppDispatcher = new Dispatcher();

// Handle Dispatch Request
AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: "VIEW_ACTION",
        action: action
    });
}

module.exports = AppDispatcher;