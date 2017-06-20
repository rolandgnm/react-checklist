class Item {
    constructor (description, checked) {
        this.description = description;
        this.checked = checked;
    }
    
    get description() {
        return this._description;
    } 

    set description(str) {
        this._description = str
    }
    
}

export default Item;