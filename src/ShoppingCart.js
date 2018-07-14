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
        }
        return this.items.push(item)
    }
}
module.exports = ShoppingCart