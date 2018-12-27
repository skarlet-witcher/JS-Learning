function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}  

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []){ // default type of items is an array
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype.render = function() {
    let result = '<select>';
    for (let item in items) {
        result += '<option>' + item + '</option>';
    }
    result += '</select>';
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); // instance members missing
HtmlSelectElement.prototype = new HtmlElement(); // also include instance members
HtmlSelectElement.prototype.constructor = HtmlSelectElement;




