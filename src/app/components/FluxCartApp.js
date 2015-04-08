var React = require("react");
var CartStore = require("../stores/CartStore");
var ProductStore = require("../stores/ProductStore");
var FluxProduct = require("./FluxProduct");
var FluxCart = require("./FluxCart");

// Method to retrive state from Stores
function getCartState() {
    return {
        product: ProductStore.getProduct(),
        selectedProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems(),
        cartCount: CartStore.getCartCount(),
        cartTotal: CartStore.getCartTotal(),
        cartVisible: CartStore.getCartVisible()
    };
}

// Define main Controller View
var FluxCartApp = React.createClass({
    // Get initail state from stores
    getInitialState: function() {
        return getCartState();
    },

    // Add change listeners to stores
    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    // Remove change listener from stores
    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    // Render child components, passing state via props
    render: function() {
        return (
            <div className="flux-cart-app">
                <FluxCart
                    products={this.state.cartItems}
                    count={this.state.cartCount}
                    total={this.state.cartTotal}
                    visible={this.state.cartVisible} />
                <FluxProduct
                    product={this.state.product}
                    cartItems={this.state.cartItems}
                    selected={this.state.selectedProduct} />
            </div>
        );
    },

    // Method to setState upon Store changes
    _onChange: function() {
        this.setState(getCartState());
    }
});

module.exports = FluxCartApp;