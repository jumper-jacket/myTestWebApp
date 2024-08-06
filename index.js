var body = document.body;
function createHeader(header, text) {
    var Header = document.createElement(header);
    Header.textContent = text;
    body.appendChild(Header);
}
function createContainer(Id) {
    var container = document.createElement('div');
    container.id = Id;
    container.style.display = 'flex';
    container.style.height = '100vh';
    container.style.width = '100vw';
    container.style.flexDirection = 'column';
    container.style.backgroundColor = 'lightsteelblue';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    body.appendChild(container);
    return container;
}
function createDiv(container, Id, text) {
    var div = document.createElement('div');
    div.id = Id;
    div.textContent = text;
    div.style.display = 'flex';
    div.style.flex = '1';
    div.style.width = '100%';
    div.style.margin = '5px';
    div.style.backgroundColor = 'green';
    container.appendChild(div);
}
function createButtton(Id, text) {
    var button = document.createElement('button');
    button.id = Id;
    button.textContent = text;
    body.appendChild(button);
}
createHeader("h1", "createHeader");
var container = createContainer("container");
createDiv(container, "div1", "div1");
createDiv(container, "div2", "div2");
createDiv(container, "div3", "div3");
//createButtton("btn", "firstBtn");
document.documentElement.appendChild(body);
