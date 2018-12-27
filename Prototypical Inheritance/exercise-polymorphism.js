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
    this.render = function() {
       return `<select>${this.items.map(item => `
                    <option>${item}</option>`).join('')}
                </select>`;
    }
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); // instance members missing
HtmlSelectElement.prototype = new HtmlElement(); // also include instance members
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// without arrow function
const renderItem = function (item) {
    return `<option>${item}</option>`;
}

// with arrow function
const renderItem2 = item => `<option>${item}</option>`;




function HtmlImageElement(src) {
    this.src = src;
    
    this.render = function() {
        return `<img src="${this.src}" />`; // template string
    }
}

HtmlImageElement.prototype = new HtmlElement(); // also include instance members
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://')
  ];
  
  for (let element of elements) 
    console.log(element.render());

