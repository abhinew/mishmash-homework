class ShoppingCart {
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName,quantity,pricePerUnit) {
        const item = { 
            name: itemName,
            quantity: quantity,
            pricePerUnit: pricePerUnit
        };
        return this.items.push(item);
    }
    clear() {
        return this.items =[];
    }
    clone() {
        const copy = Object.create(this)
        
        return copy;
    }
}

// const cart1 = new ShoppingCart()
// cart1.addItem("Rolex watch", 2, 250.1)
// const cart2 = cart1.clone()
// //console.log(cart2, " is cart 2");
// console.log("cart1", cart1.getItems())
// console.log("cart2", cart2.getItems())
// cart2.addItem("Shoes", 1, 90.0)
// console.log(cart1.getItems())




module.exports = ShoppingCart