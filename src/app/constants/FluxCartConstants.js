var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
    CART_ADD: null,         // Add item to cart
    CART_REMOVE: null,      // Remove item from cart
    CART_VISIBLE: null,     // Show or hide Cart
    SET_SELECTED: null,     // Select a product option
    RECEIVE_DATA: null      // Load mock data
});