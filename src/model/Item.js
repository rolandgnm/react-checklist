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
    
    get checked() {
        return this._checked;
    }

    set checked(bool) {
        this._checked = bool;
    }
}

export default Item;