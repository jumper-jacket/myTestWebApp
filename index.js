var body = document.body;
function applyStyles(element, styles) {
    Object.assign(element.style, styles);
}
function createHeader(header, text) {
    var Header = document.createElement(header);
    Header.textContent = text;
    body.appendChild(Header);
}
function createContainer(Id) {
    var container = document.createElement('div');
    var ContainerStyle = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        backgroundColor: 'dimgray',
        justifyContent: 'center',
        alignItems: 'center',
    };
    applyStyles(container, ContainerStyle);
    body.appendChild(container);
    return container;
}
function createDiv(container, Id, text) {
    var div = document.createElement('div');
    div.id = Id;
    div.textContent = text;
    var divStyles = {
        display: 'flex',
        flex: '1',
        width: '80%',
        margin: '5px',
        backgroundColor: 'tomato',
    };
    applyStyles(div, divStyles);
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
