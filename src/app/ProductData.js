module.exports = {
    // Load Mock Product Data into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('product', JSON.stringify([
            {
                id: "1234567890",
                name: "Putinka",
                image: 'scotch-beer.png',
                description: "Delicious",
                variants: [
                    {
                        sku: "123123",
                        type: "40oz Bottle",
                        price: 4.99,
                        inventory: 1
                    },
                    {
                        sku: "123124",
                        type: "6 Pack",
                        price: 12.99,
                        inventory: 5
                    },
                    {
                        sku: "123125",
                        type: "30 Pack",
                        price: 19.99,
                        inventory: 3
                    }

                ]
            }
        ]));
    }
};