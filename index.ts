const body = document.body;


type HeaderTag = "h1" | "h2" | "h3";
type ID = string;


function applyStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>){
    Object.assign(element.style, styles);
}

function createHeader(header: HeaderTag, text: string){
    const Header = document.createElement(header);
    Header.textContent = text;
    body.appendChild(Header)
}

function createContainer(Id: ID): HTMLElement{
    const container= document.createElement('div');
    const ContainerStyle: Partial<CSSStyleDeclaration> = {
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

function createDiv(container: HTMLElement,Id: ID, text: string){
    const div = document.createElement('div');
    div.id = Id;
    div.textContent = text;
    const divStyles: Partial<CSSStyleDeclaration> = {
        display: 'flex',
        flex: '1',
        width: '80%',
        margin: '5px',
        backgroundColor: 'tomato',
    };
    applyStyles(div, divStyles);
    container.appendChild(div);
}

function createButtton(Id: ID, text: string){
    const button = document.createElement('button');
    button.id = Id;
    button.textContent = text;
    body.appendChild(button);
}

createHeader("h1", "createHeader");
const container = createContainer("container");
createDiv(container, "div1","div1");
createDiv(container, "div2","div2");
createDiv(container, "div3","div3");

//createButtton("btn", "firstBtn");

document.documentElement.appendChild(body);