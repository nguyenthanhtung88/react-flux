var AppDispatcher = require("../dispatcher/AppDispatcher");
var FluxCartConstants = require("../constants/FluxCartConstants");

// Define actions object
var FluxCartActions = {
    // Receive inital product data
    receiveProduct: function(data) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.RECEIVE_DATA,
            data: data
        })
    },

    // Set currently selected product vairation
    selectProduct: function(index) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.SET_SELECTED,
            data: index
        })
    },

    // Add item to Cart
    addToCart: function(sku, update) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_ADD,
            sku: sku,
            update: update
        })
    },

    // Remove item from Cart
    removeFromCart: function(sku) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_REMOVE,
            sku: sku
        })
    },

    // Update Cart visibility status
    updateCartVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_VISIBLE,
            cartVisible: cartVisible
        })
    }
};

module.exports = FluxCartActions;